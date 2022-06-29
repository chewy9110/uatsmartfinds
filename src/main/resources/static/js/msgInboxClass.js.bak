class MsgInboxClass {

    // _msgInboxList = [];
    // _msgInboxName;

    constructor(DeployServer ) {
          this._msgInboxList = [];
      
         // this._msgInboxList = msgInboxList;

          this._DeployServer = DeployServer;
 
    }
    
    //methods
     
        ////////////
        displayInbox(){
 
          const DeployServer = this._DeployServer

            const msgInboxList = this._msgInboxList;

            let showMsgItem = "";
            let btnReplyId = "";
 
            // showMsgItem = `<p>LoginName: ${this._msgInboxName} </p>`;
 
            console.log (DeployServer);

            msgInboxList.forEach ((item, index) => {   
                btnReplyId = "btnReplyId" + index;
 
                //  let msgitemStr = JSON.stringify(`{"msgInboxId":"${item.msgInboxId}", "msgInboxUid":"${item.msgInboxUid}", "msgInboxUFid":"${item.msgInboxUFid}",  "msgProductId":"${item.msgProductId}", "msgFromUid":"${item.msgFromUid}",   "msgToUid":"${item.msgToUid}","msgToImg":"${item.msgToImg}",  "msgToName":"${item.msgToName}","msgProductImgURL":"${item.msgProductImgURL}", "msgProductTitle":"${item.msgProductTitle}",  "msgPrice":"${item.msgPrice}"}`)

                let msgitemStr = ""
                let encodeURIStr= ""
            

                if (DeployServer == "Local")  {
                    msgitemStr =  `FromInboxId=${item.msgInboxId}&FromName=${item.msgInboxName}&FromInboxUid=${item.msgInboxUid}` 

                    encodeURIStr=msgitemStr
                }
                else {

                  console.log (DeployServer);

                      msgitemStr =  `msgInboxId=${item.msgInboxId}&msgInboxUid=${item.msgInboxUid}&msgInboxUFid=${item.msgInboxUFid}&msgProductId=${item.msgProductId}&msgFromUid=${item.msgFromUid}&msgToUid=${item.msgToUid}&msgInboxName=${item.msgInboxName}&msgToImg=${item.msgToImg}&msgToName=${item.msgToName}&msgFromImg=${item.msgFromImg}&msgFromName=${item.msgFromName}&msgProductImgURL=${item.msgProductImgURL}&msgPrice=${item.msgPrice}&msgProductTitle=${item.msgProductTitle}` 

                     // encodeURIStr=encodeURIComponent(msgitemStr)  
                     encodeURIStr=encodeURI(msgitemStr)  
                  }

                showMsgItem +=`
                <!-- start of row -->
                <div class="d-flex flex-row g-0 align-items-top mb-3 "> 
                <div class="w-25 m-0 p-0 g-0">
                   <div class="xs-img-small-inbox m-0 p-0 g-0">
      
                     <img src="${item.msgProductImgURL}"  class="img-fluid rounded-start" 
                     alt="item-interested">   
                     <h6 class="g-0 p-0 m-0">${item.msgProductTitle}</h6>
                     <h6 class="p-0 m-0 ">${formatPrice(item.msgPrice)}</h6>
                   </div>  
   
                </div>
              <div class="w-100 g-0 m-0 p-0">
                <div class="card align-items-start border-1 rounded-5 p-0 mx-2 my-0">
                  <div class="card-header text-end  m-1 "
                   data-toggle="tooltip" data-placement="top"
                    title=" ${this.displayName(item)}">  
                      <img src="${this.displayImg(item)}"  width="40"
                         height="40"  class="border rounded-circle  border-dark " alt="...">
                         ${this.displayName(item)}
                     
                  </div>

                <!--   <div class="card-body align-items-start ${this.bg_RtlLtr(item)} rounded-pill m-1 ms-3 p-3 w-75"> -->
                   <div class="card-body align-items-start ${this.bg_RtlLtr(item)} border-1 m-1 ms-3 p-3 w-75">
                      <div class="d-flex flex-row"  data-toggle="tooltip" data-placement="top"
                             title=" ${item.msgFromName}" ms-2 p-1>
                           <img src="${item.msgFromImg}" width="25" height="25" class="border rounded-circle  " alt="img profile">
                            <p class="my-0  me-1 ms-2 text-truncate p-1"  >
                            ${this.displayMe(item)}</p>
                     </div>

                       <p class="card-text">
                       <span class="timestamp-size ml-2">${formatDate(item.msgTimestamp)}</span><br>${item. msgLine}
                       </p>
                  </div>

                </div>
              </div>
              <div class="w-25 align-self-center">
                <div  class="xs-center-inbox">
                <!--   <a id="${btnReplyId}" href="msgDetail?FromInboxId=${item.msgInboxId}&FromName=${item.msgInboxName}&FromInboxUid=${item.msgInboxUid}" class="btn btn-primary">Message</a>
                -->
                
                  <a id="${btnReplyId}" href='msgDetail?${encodeURIStr}'

            class="btn btn-primary">Message</a> 
                </div>
              </div>
              </div>
              <hr>
              <!-- end of row -->
              `
             });
          
             if (showMsgItem == "" ) {
               showMsgItem = `<div class="alert alert-info" role="alert">
                              No Message
                              </div>`
             }
             document.querySelector("#container").innerHTML = showMsgItem;

            // console.log(showMsgItem);
        } 
 
  displayReply(msgItem){
    // if (msgItem.msgInboxName == msgItem.msgFromName)
    //   return("sent to " +msgItem.msgToName);
    // else 
    //   return("replied");

    return("");
  }

  // displayName(msgItem){
  //   if (msgItem.msgInboxName == msgItem.msgFromName)
  //     return("Me as " + msgItem.msgFromName);
  //   else 
  //     return(msgItem.msgFromName);
  // }

  // displaySeller(msgItem){
  //   if (msgItem.msgInboxName == msgItem.msgFromName)
  //     return(msgItem.msgToName);
  //   else 
  //     return(msgItem.msgFromName);
  // }

  bg_RtlLtr(msgItem){
    if (msgItem.msgInboxName == msgItem.msgFromName)
      return("bg-rtl");
    else 
      return("bg-ltr");
  }

  displayName(msgItem){
    if (msgItem.msgInboxName == msgItem.msgFromName)
      return(msgItem.msgToName);
    else 
      return(msgItem.msgFromName);
  }

  displayMe(msgItem){
    if (msgItem.msgInboxName == msgItem.msgFromName)
      return("Me");
    else
      return(msgItem.msgFromName);
  }

  displayImg(msgItem){
    if (msgItem.msgInboxName === msgItem.msgFromName)
      return(msgItem.msgToImg);
    else 
     return(msgItem.msgFromImg);
  }
  
 
 /////////
 
 async loadmsg(){
    let  _msgInbox = this;
    
    _msgInbox._msgInboxList = [];

    _msgInbox._msgInboxList = await msgInboxC.loadInbox()

    // console.log("loadInbox");
    // console.log( _msgInbox._msgInboxList);

 //   alert( _msgInbox._msgInboxList.length);
  
     _msgInbox.displayInbox();

  //this.displayInbox();
 }

       
} // class MsgInboxClass

    
 
 