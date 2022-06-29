class MsgDetailClass {
 
    _msgDetailList = [];
    _msgInboxTo = [];   // used in save_inbox;

   constructor(DeployServer) {
        this._msgDetailList = [];
        this._msgInboxTo = [];
        this._DeployServer = DeployServer;

    }
    

    // constructor(msgDetailList,msgInboxTo,DeployServer) {
    //     this._msgDetailList = [];
    //     this._msgInboxTo = [];
    //     this._DeployServer = DeployServer;

    //  if  (this._DeployServer == "Remote")    {
    //     //remote server
    //         this._msgDetailList = msgDetailList;
    //         this._msgInboxTo = msgInboxTo;
    //   }
    //   else if ( this.getQueryId()) { 
    //     // local server
    //     this.loadMsg();
    //     this.displayMsg();
    //    }
    //    else 
    //    {
    //      this.displayNoMsg();
    //    }
    // }
    
    //methods
     
    sendMsg( msgLine,  msgTimestamp) {

              // global list _msgDetailList
              const msgDetailList = this._msgDetailList;
              const msgInboxTo =  this._msgInboxTo;
 
              let msgDetail = [];
              msgDetail = msgData.MsgFormat(msgInboxTo.msgInboxId, 
                msgInboxTo.msgInboxName,
                msgInboxTo.msgProductImgURL,
                msgInboxTo.msgFromName, msgInboxTo.msgFromImg,
                msgInboxTo.msgToName, msgInboxTo.msgToImg,
                msgLine, msgTimestamp, msgInboxTo.msgProductId,   
                msgInboxTo.msgProductTitle , msgInboxTo.msgPrice,
                msgInboxTo.msgInboxUid, msgInboxTo.msgFromUid, msgInboxTo.msgToUid,
                msgInboxTo.msgInboxUFid
                )

                msgDetailList.push(msgDetail);
 
                let showMsgItem = "";
                showMsgItem += this.displayMsgRTL(msgDetail) ;
                document.querySelector("#cardContainer").innerHTML += showMsgItem;



       // save to web.storage , sequence impt here
      //  msgInboxTo.msgInboxName =  msgInboxTo.msgInboxName;
       msgInboxTo.msgLine  = msgLine;
       msgInboxTo.msgTimestamp = msgTimestamp;

      console.log(this._DeployServer)
      
       if  (this._DeployServer == "Remote")    {
        //remote  
        msgData.saveInbox( msgInboxTo );
      }

       msgDetailSend.scrollToBottom('containerBottom');

//      else {
//        // local
//         msgData.saveInbox( msgInboxTo );
//
//        //SaveMsg for Seller inbox
//        // for local only
//        msgInboxTo.msgInboxName =  msgInboxTo.msgToName ;
//        msgData.saveInbox( msgInboxTo );
//       ////////////////////////
//      }

    } //sendMsg

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
             showMsgItem =  `  <div class="card border-0 m-3">
                                 <div class=" d-flex align-items-start mb-1 p-wrap p-0 "> 
                                  <div class="d-flex flex-row card-header ">       
                                     <img src="${msgInboxTo.msgToImg}"  width="40" height="40" class="border rounded-circle">
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

             // const btnBackhref= "msgInBox?name="+msgInboxName;
//               const btnBackhref= "msgInBox" ;
//              document.querySelector("#btnBack").href  = btnBackhref;
        } 

        /////////
        displayMsgImage(item) { 
         return ( `   
 
             <div class="w-100 .imgprod-small -small">
             <img src="${item.msgProductImgURL}"  class="img-fluid rounded-start"
             alt="item-interested">   
             </div>  
             <div class="w-100 titleprod-small">
             <h6 class="p-1 m-0  ">${item.msgProductTitle}</h6>
            <!--  </div>
             <div class="w-100"> -->
             <h6 class="p-1 m-0 ">${formatPrice(item.msgPrice)}</h6>
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
                 <div class="card-header d-flex align-items-start mb-1 p-wrap   p-2"  data-toggle="tooltip" data-placement="top" 
                 title=" ${item.msgFromName}" > 
             
                   <div class="d-flex flex-row">    
                   <img src="${item.msgFromImg}" width="25" height="25" class="border rounded-circle  " alt=".">
                   <p class="my-0  me-1 ms-1 text-truncate  " >
                   ${item.msgFromName}</p>
                   </div>
                 </div>

              <!--   <div class="card-body p-2 align-items-start bg-ltr rounded-pill border border-3 "> -->
              <div class="card-body p-2 align-items-start bg-ltr   border border-1">
                  <p class="card-text">
                    <span class="timestamp-size me-2">${formatDate(item.msgTimestamp)}</span><br>${item.msgLine}
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
               <div class="card-header d-flex flex-row-reverse  align-items-start   p-wrap align-items-end  mb-1  p-2"  data-toggle="tooltip" data-placement="top"
              title=" ${item.msgFromName}">
       
               <div class="d-flex flex-row">
                <img src="${item.msgFromImg}" width="25" height="25" class="border rounded-circle   " alt=".">
                <p class="my-0 me-1 ms-1 text-truncate   " 
                   >
                Me</p>
                </div>
             
               </div>
          
        
         <!--    <div class="card-body  p-2 align-items-end bg-rtl rounded-pill border   border-3   "> -->
             <div class="card-body  p-2 align-items-end bg-rtl   border   border-1   ">
                <p class="card-text">
                <span class="timestamp-size me-2">${formatDate(item.msgTimestamp)}</span><br> ${item.msgLine}
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
          if ( this.getQueryId())  {
             const msgInboxTo = this._msgInboxTo; 
             const msgInboxId = msgInboxTo.msgInboxId;
             const msgInboxName = msgInboxTo.msgInboxName;

             this._msgDetailList = msgDetailC.loadMsg(msgInboxId,msgInboxName);
             this.displayMsg();
           }
           else  { 
            this.displayNoMsg();
            }
        }

        /////////
        getQueryId() {
 
              this._msgInboxTo = msgDetailC.getQueryId();
              let retStat = true;
 
              if ((this._msgInboxTo == null)||
                  (typeof(this._msgInboxTo)== "undefined")||
                  (this._msgInboxTo.length === 0) 
                  ) 
                
                  retStat = false;

              return(retStat)
        }
 
      async  loadMsgR() {
 
          let  msgDetail = this;
 
          msgDetail._msgDetailList=[]
          msgDetail._msgInboxTo = [];
          
          msgDetail._msgInboxTo  = await msgDetailC.getRemoteQueryId()

          msgDetail._msgDetailList = await msgDetailC.loadMsg();

          console.log("inside msgdetailist loadmsgR")
          console.log(  this._msgDetailList );
        
          msgDetail.displayMsg();
          msgDetailSend.scrollToBottom('containerBottom');
        } // loadmsgR 



} // class MsgDetailClass

 
