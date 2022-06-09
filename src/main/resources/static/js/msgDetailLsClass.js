class MsgDetailLsClass {
 
 ///////
 loadMsg(msgInboxId,msgInboxName) {

          // gobal list _msgDetailList; 
          
          // const msgInboxName = this._msgInboxName;
          // const msgInboxId =   this._msgInboxId;

         // const msgInboxTo = this._msgInboxTo; 
        //  const msgInboxId = msgInboxTo.msgInboxId;
         // const msgInboxName = msgInboxTo.msgInboxName;

          let msgDetailList = [];
          // read existing msg  
          let msg = window.localStorage.getItem(msgInboxName+"Msg");
          if (msg != null) {
            let msgObject = JSON.parse(msg);
      
            msgObject.forEach((item) => {
              if (msgInboxId == item.msgInboxId) {
                msgDetailList.push(item);
              }
            })
      
          }

          return(msgDetailList)
        } //LoadMsg

  /////////
  getQueryId() {
            //const queryString = window.location.href;
            const parameters = new URLSearchParams(window.location.search);
 
            // access from inbox
            const msgInboxId = parameters.get('FromInboxId');
            const msgInboxName = parameters.get('FromName');
            const msgInboxUid = parameters.get('FromInboxUid');

            // access from watchlist
            const msgFromUid= parameters.get('FromUid');;
            const msgToUid= parameters.get('ToUid');;
            const msgProductId= parameters.get('FromProductId');;
 
//console.log (`msgFromUid=${msgFromUid}, msgToUid=${msgToUid}, msgProductId=${msgProductId}`)

            let msgInboxTo = [];
            if (msgInboxId != null)
               msgInboxTo = this.readInbox(msgInboxId, msgInboxName);
            else if  (msgFromUid != null)
                msgInboxTo = this.readWatchlist(msgFromUid, msgToUid, msgProductId );
            else msgInboxTo = [];

            return(msgInboxTo)
        } // getQueryId

  ///////
  readInbox(msgInboxId, msgInboxName) {

           // read inbox  
          // this._msgInboxId = msgInboxId;
          // this._msgInboxName = msgInboxName;
          // this._msgInboxTo = [];

          let msgInboxTo = [];
          let inbox = window.localStorage.getItem(msgInboxName + "Inbox");
          if (inbox != null) {
            let inboxObject = JSON.parse(inbox);
              let item = inboxObject.find((id)=>(id.msgInboxId==msgInboxId) )
              msgInboxTo =  this.myMsgBox(msgInboxName, item);

        }    

        return(msgInboxTo)
      } //readInbox

  ///////
  myMsgBox(msgInboxName, item) {
        let msgInboxTo = [];
        if (msgInboxName == item.msgFromName) {
          msgInboxTo =  msgData.MsgFormat(item.msgInboxId, 
                                      msgInboxName,
                                      item.msgImgURL, 
                                      item.msgFromName,  item.msgFromImg,
                                      item.msgToName,  item.msgToImg,  
                                      item.msgLine, 
                                      item.msgTimestamp, item.msgProductId,  
                                      item.msgProductTitle, item.msgPrice, 
                                      item.msgInboxUid, item.msgFromUid, 
                                      item.msgToUid);
                }
                else {
                   //swap from and to name and img ..MsgFormat
                   msgInboxTo =  msgData.MsgFormat(item.msgInboxId, 
                    msgInboxName,
                    item.msgImgURL,
                    item.msgToName,  item.msgToImg,      // swap 
                    item.msgFromName,  item.msgFromImg,  // swap
                    item.msgLine, 
                    item.msgTimestamp, item.msgProductId, item.msgProductTitle, 
                    item.msgPrice, 
                    item.msgInboxUid,  item.msgToUid, item.msgFromUid);
                
                }

              return (msgInboxTo);
      } // MyMsgBox

 ///////
 readWatchlist(msgFromUid, msgToUid, msgProductId ) {
      
           let product = msgUtilProduct(msgProductId);
           let userFrom = msgUtilUser(msgFromUid);
           let userTo = msgUtilUser(msgToUid);

          // console.log (`product=${product}, userFrom=${userFrom}, userTo=${userTo}`)
  
           let msgInboxName = userFrom.displayName;
          
         //  console.log (`msgInboxName=${msgInboxName}, msgFromUid=${msgFromUid}, msgProductId=${msgProductId}`)
          


           let msgInboxTo = [];

           let inbox = window.localStorage.getItem(msgInboxName + "Inbox");
           if (inbox != null) {
             //not empty
               let inboxObject = JSON.parse(inbox);
               // temp. need to change to id, in db connection
               // read last msg 
               let item = inboxObject.find((id)=>(id.msgFromUid== msgFromUid &&
                                               id.msgToUid== msgToUid &&
                                               id.msgProductId==msgProductId
                                              ) ||
                                              (id.msgFromUid == msgToUid  &&
                                                id.msgToUid == msgFromUid &&
                                                id.msgProductId==msgProductId
                                               )
                                              )        
               if  (item!=null)  {
                   // go ReadInbox
                   let msgInboxName = item.msgInboxName;
                   msgInboxTo = this.myMsgBox(msgInboxName, item)
                  // alert ("not empty")
                    return (msgInboxTo) ;
                }
                
             }
          
             // empty
            //alert ("empty")
             // empty inbox, will create one here.
             msgInboxTo = [];
  
            let msgInboxId = 0;
           // let msgInboxName = userFrom.displayName; // declared above already

            let msgInboxUid = msgFromUid  ;

           // let msgFromUid = msgFromUid; //passed in
           // let msgToUid = msgToUid;  //passed in
           // let msgProductId =  msgProductId  //passed in

            let msgProductTitle = product.title;
            let msgImgURL = product.imageURL1;
            let msgPrice = product.price;
 
            let msgFromName = userFrom.displayName
            let msgFromImg = msgUtilUserImgUrl(msgFromUid);  //member's profile image

            let msgToName = userTo.displayName
            let msgToImg = msgUtilUserImgUrl(msgToUid)   //member's profile image
            
            let msgLine = "" ;
            let msgTimestamp = currentDate(); // today's date
            
            // addMsg ..MsgFormat
             msgInboxTo  = msgData.MsgFormat(msgInboxId, msgInboxName,
                                msgImgURL, msgFromName,  msgFromImg,
                                msgToName,  msgToImg,  msgLine, 
                                msgTimestamp, msgProductId, msgProductTitle, msgPrice, 
                                msgInboxUid, msgFromUid, msgToUid);

         //  console.log(msgInboxTo)
           return(msgInboxTo)


        } //readWatchlist
 
       

} // class MsgDetailLsClass

 
