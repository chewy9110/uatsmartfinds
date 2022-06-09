class MsgDetailClass {
 
    _msgDetailList = [];
    _msgInboxTo = [];   // used in save_inbox;

    constructor() {
        this._msgDetailList = [];
        this._msgInboxTo = [];

       if ( this.getQueryId()) { 
        this.loadMsg();
        this.displayMsg();
       }
       else 
       {
         this.displayNoMsg();
       }
    }
    
    //methods
     
    sendMsg( msgLine,  msgTimestamp) {

              // global list _msgDetailList
              const msgDetailList = this._msgDetailList;
              const msgInboxTo =  this._msgInboxTo;
 
              let msgDetail = [];
              msgDetail = msgData.MsgFormat(msgInboxTo.msgInboxId, 
                msgInboxTo.msgInboxName,
                msgInboxTo.msgImgURL,
                msgInboxTo.msgFromName, msgInboxTo.msgFromImg,
                msgInboxTo.msgToName, msgInboxTo.msgToImg,
                msgLine, msgTimestamp, msgInboxTo.msgProductId,   
                msgInboxTo.msgProductTitle , msgInboxTo.msgPrice,
                msgInboxTo.msgInboxUid, msgInboxTo.msgFromUid, msgInboxTo.msgToUid
                )

                msgDetailList.push(msgDetail);
 
                let showMsgItem = "";
                showMsgItem += this.displayMsgRTL(msgDetail) ;
                document.querySelector("#cardContainer").innerHTML += showMsgItem;



       // save to web.storage , sequence impt here
      //  msgInboxTo.msgInboxName =  msgInboxTo.msgInboxName;
       msgInboxTo.msgLine  = msgLine;
       msgInboxTo.msgTimestamp = msgTimestamp;

       msgData.saveInbox( msgInboxTo );
 
        //////////////////////////
        //SaveMsg for Seller inbox

       msgInboxTo.msgInboxName =  msgInboxTo.msgToName ;
       msgData.saveInbox( msgInboxTo );
 
       ////////////////////////
 
        }

        displayNoMsg() {
           
          let showMsgItem = "";
            showMsgItem = `<br>
                          <div class="alert alert-info" role="alert">
                           No Message
                           </div>`
                           
              document.querySelector("#cardContainer").innerHTML = showMsgItem;

              document.querySelector("#btnMsgSend").disabled = true;
              
           return

        }

      
        ////////////
        displayMsg() {
           
            const msgDetailList = this._msgDetailList;
            // const msgInboxId = this._msgInboxId;
            // const msgInboxName = this._msgInboxName;
            const msgInboxTo = this._msgInboxTo; 
            const msgInboxId = msgInboxTo.msgInboxId;
            const msgInboxName = msgInboxTo.msgInboxName;

              const msgFilterById = msgDetailList.filter((msgDetail)=>(msgDetail.msgInboxId == `${msgInboxId}`))

             let showMsgItem = "";
             let showMsgImageItem = "";
             let msgItem;

             //  product image
              showMsgImageItem += this.displayMsgImage(msgInboxTo) ;
             
            //
             showMsgItem =  `  <div class="card border-0 ms-3 mt-3">   
                                 <div class="card-header d-flex align-items-start mb-1 p-wrap  card-header  p-0"> 
                                  <div class="d-flex flex-row">       
                                     <img src="${msgInboxTo.msgToImg}"  width="70" height="70" >  
                                  <div>
                                   <p class="my-0  me-1 ms-3 text-truncate bolder ">${msgInboxTo.msgToName}</p>
                                   <p class="my-0  me-1 ms-3 text-truncate">Very Responsive</p>
                                   </div>
                                </div>
                                </div>
                              </div>
                              `;

             msgFilterById.forEach ((item, index) => {   
                msgItem = msgFilterById[index];
 
                if (msgItem.msgInboxName === msgItem.msgFromName){
                  showMsgItem += this.displayMsgRTL(msgItem) ;
                }
                else {
                    showMsgItem += this.displayMsgLTR(msgItem) ;
                }

              }) //end of foreach loop

              document.querySelector("#imgContainer").innerHTML  = showMsgImageItem;
              document.querySelector("#cardContainer").innerHTML = showMsgItem;
              document.querySelector("#imgReduceSize").innerHTML  = showMsgImageItem;

              const btnBackhref= "msgInBox.html?name="+msgInboxName;

              document.querySelector("#btnBack").href  = btnBackhref;
        } 

        /////////
        displayMsgImage(item) { 
         return ( `   
 
             <div class="w-100">
             <img src="${item.msgImgURL}"  class="img-fluid rounded-start" 
             alt="item-interested">   
             </div>  
             <div>
             <h6 class="p-0 m-0  ">${item.msgProductTitle}</h6>
             <h6 class="p-0 m-0 ">${item.msgPrice}</h6>
             </div>
           `)
        }
 
        /////////
        displayMsgLTR(item) {
           return ( `
           <!-- start of one row msg (ltr) -->     
             <div class="d-flex flex-row m-2">
             <div class="card-deck width-80 mb-2">
               <div class="card align-items-start border-0">
                 <div class="card-header d-flex align-items-start mb-1 p-wrap  card-header  p-0"  data-toggle="tooltip" data-placement="top" 
                 title=" ${item.msgFromName}" > 
                
                   <div class="d-flex flex-row">    
                   <img src="${item.msgFromImg}" width="30" height="30" class="rounded-circle" alt="img profile">
                   <p class="my-0  me-1 ms-1 text-truncate  " >
                   ${item.msgFromName}</p>
                   </div>
                 </div>

                 <div class="card-body p-2 align-items-start bg-ltr rounded-pill border border-3 ">
                  <p class="card-text"> 
                    <span class="timestamp-size me-2">${item.msgTimestamp}</span>${item.msgLine}
                   </p>
                 </div>
               </div>
               <!--msg card col -->
               <!-- <div class="width-80"> </div> -->
             </div> <!-- row -->
           </div>
             <!-- end of one row msg (ltr) -->
           
           `)
        }

        /////////
        displayMsgRTL(item) {
            return ( `
           
        <!-- start of one reverse row msg (rtl)--> 
        <div class="d-flex  flex-row-reverse m-2">
          <div class="card-deck width-80">
            <div class="card align-items-end  border-0 ">
               <div class="card-header d-flex flex-row-reverse  align-items-start   p-wrap align-items-end  mb-1  card-header  p-0"  data-toggle="tooltip" data-placement="top" 
              title=" ${item.msgFromName}">
       
               <div class="d-flex flex-row">
                <img src="${item.msgFromImg}" width="30" height="30" class="rounded-circle" alt="alt-profile">
                <p class="my-0 me-1 ms-1 text-truncate   " 
                   >
                Me</p>
                </div>
             
               </div>
          
        
              <div class="card-body  p-2 align-items-end bg-rtl rounded-pill border   border-3  ">
            
                <p class="card-text">
                <span class="timestamp-size me-2">${item.msgTimestamp}</span> ${item.msgLine}
                </p>
              </div>
            </div>
            <!-- <div class="w-75"></div> -->
            <!-- <div class="width-80"> </div> -->
          </div>
         </div> <!-- row -->
        <!-- end of one reverse row msg (rtl) --> 
            `)
        }
       ///////
        loadMsg() {
 
          const msgInboxTo = this._msgInboxTo; 
          const msgInboxId = msgInboxTo.msgInboxId;
          const msgInboxName = msgInboxTo.msgInboxName;

          this._msgDetailList = msgDetailLs.loadMsg(msgInboxId,msgInboxName);
        }

        /////////
        getQueryId() {
 
              this._msgInboxTo = msgDetailLs.getQueryId();
              let retStat = true;
 
              if ((this._msgInboxTo == null)||
                  (typeof(this._msgInboxTo)== "undefined")||
                  (this._msgInboxTo.length === 0) 
                  ) 
                
                  retStat = false;

              return(retStat)
        }
 

} // class MsgDetailClass

 
