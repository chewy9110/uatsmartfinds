class MsgInboxClass {

    _msgInboxList = [];
    _msgInboxName;

    constructor() {
          this._msgInboxList = [];
          //this._msgInboxName = this.getQueryInboxName();
          //this.LoadInbox();

          this._msgInboxName = msgInboxLs.getQueryInboxName();
          this._msgInboxList = msgInboxLs.loadInbox(this._msgInboxName);

          this.displayMsg();
    }
    
    //methods
     
        ////////////
        displayMsg(){
            const msgInboxList = this._msgInboxList;

            let showMsgItem = "";
            let btnReplyId = "";
 
            // showMsgItem = `<p>LoginName: ${this._msgInboxName} </p>`;

            msgInboxList.forEach ((item, index) => {   
                btnReplyId = "btnReplyId" + index;

                showMsgItem +=`
                <!-- start of row -->
                <div class="d-flex flex-row g-0 align-items-center mb-3 "> 
                <div class="w-25 mb-2">
                 
                <div class="xs-img-small">
                      <img src="${item.msgImgURL}"  class="img-fluid rounded-start "  alt="item-interested">
                 </div>
              </div>
              <div class="w-100">
                <div class="card align-items-start border-1 rounded-5 p-0 ms-2 me-3 mb-0 mt-0">
                  <div class="card-header text-end  m-1  card-header "
                   data-toggle="tooltip" data-placement="top"
                    title=" ${this.displayName(item)}">  
                      <img src="${this.displayImg(item)}"  width="30"
                         height="30"  class="rounded-circle" alt="...">
                         ${this.displayName(item)}
                     
                  </div>
                  <h6 class="card-title ms-3 mb-0 mt-0 p-0">${item.msgProductTitle}</h6>
                   <div class="card-body align-items-start ${this.bg_RtlLtr(item)}   rounded-pill m-1 ms-3 p-3"> 
                   <p class="card-text">
                   <span class="timestamp-size me-2">${item.msgTimestamp}</span> ${item. msgLine}
                   </p>
                  </div>

                </div>
              </div>
              <div class="w-25 align-self-center">
                <div  class="xs-center">
                 <a id="${btnReplyId}" href="msgDetail.html?FromInboxId=${item.msgInboxId}&FromName=${item.msgInboxName}&FromInboxUid=${item.msgInboxUid}" class="btn btn-primary">Message</a>   
                      
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

  displayImg(msgItem){
    if (msgItem.msgInboxName === msgItem.msgFromName)
      return(msgItem.msgToImg);
    else 
     return(msgItem.msgFromImg);
  }
  
//   LoadInbox() {

//     const msgInboxName = this._msgInboxName;
//     //const msgInboxList = this._msgInboxList;

//     // // read existing msg  
//     this._msgInboxList = msgInboxLs.LoadInbox(msgInboxName);

//     // let inbox = window.localStorage.getItem(msgInboxName+"Inbox");
//     // if (inbox != null) {
//     //   let inboxObject = JSON.parse(inbox);

//     //   inboxObject.forEach((item) => {
//     //     msgInboxList.push(item);
//     //   })

//     // }
//  }

 /////////
 
//      getQueryInboxName() {

//       // let msgInboxName = "";
      
//       //   if (typeof(Storage) == "undefined") {
//       //     // browser don't support Web Storage
//       //     //alert("unsupported")
//       //   }
//       //   else {
     
//       //      let  sesslogin = window.sessionStorage.getItem("loginDetails");
//       //       let sessLoginID = JSON.parse(sesslogin);
//       //       msgInboxName = sessLoginID.displayName;
//       //     //  this._msgInboxName = msgInboxName
//       //   } 
//       // return(msgInboxName);
        
//       let msgInboxName = msgInboxLs.getQueryInboxName();
//       return(msgInboxName);
// }  
       
} // class MsgInboxClass

    
 
 