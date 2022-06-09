class MsgLocalStorageClass {
  
    //methods
        ////////////
       MsgFormat( msgInboxId,msgInboxName,   msgImgURL, 
                   msgFromName, msgFromImg,
                   msgToName, msgToImg,
                   msgLine,  msgTimestamp,
                   msgProductId,
                   //msgOwnerId,
                   msgProductTitle, msgPrice,
                   msgInboxUid, 
                   msgFromUid ,
                   msgToUid 
                   ) {
  
            // message detail format for sendmessage module
            const msgDetail = {
                msgInboxId: msgInboxId,
                msgInboxName: msgInboxName,
                msgImgURL: msgImgURL,
                msgFromName: msgFromName,
                msgFromImg: msgFromImg,
                msgToName: msgToName, 
                msgToImg: msgToImg,
                msgLine: msgLine,
                msgTimestamp: msgTimestamp,
                msgProductId: msgProductId,
                //msgOwnerId:msgOwnerId,
                msgProductTitle:msgProductTitle,
                msgPrice:msgPrice,
                msgInboxUid:msgInboxUid,
                msgFromUid:msgFromUid,
                msgToUid:msgToUid 
            }
       
            return(msgDetail);

     
        } 

        saveInbox(inMsg) {
            // save the last detail msg
            const msgInboxList = [];
        
            const msgFromName = inMsg.msgFromName;
            const msgToName = inMsg.msgToName;
            const msgInboxName= inMsg.msgInboxName;
            const msgProductId = inMsg.msgProductId;

            let msgInboxId = -1;
         
            // read existing inbox 
            let inbox = window.localStorage.getItem(msgInboxName + "Inbox");
            if (inbox != null) {
              let inboxObject = JSON.parse(inbox);
              inboxObject.forEach((item,index) => {
               
                if ((msgFromName === item.msgFromName) && 
                    (msgToName === item.msgToName) &&
                    (msgProductId === item.msgProductId )
                   ) {
                  // found the inbox id with the seller
                  msgInboxId = item.msgInboxId;
                }
                else if ((msgFromName === item.msgToName)  && 
                         (msgToName === item.msgFromName) && 
                        (msgProductId === item.msgProductId )
                         ) {
                  // latest msg seller sent to buyer
                  msgInboxId = item.msgInboxId;
                  
                }
                else
                  msgInboxList.push(item); // add inbox from other sellers
              })
        
            }
        
             if (msgInboxId<0) {
               //empty list
               msgInboxId=msgInboxList.length+1; 
              }
            
             // append new msg 
           
             inMsg.msgInboxId = msgInboxId;  
             msgInboxList.push(inMsg); 
        
             window.localStorage.setItem(msgInboxName+"Inbox" ,JSON.stringify(msgInboxList));
        
             this.saveMsg(inMsg);
         
           }
        
           saveMsg(inMsg) {
             // save all messages 
              let msgList = [];
            
              const msgInboxName = inMsg.msgInboxName  
        
              // read existing msg  
             let msg = window.localStorage.getItem(msgInboxName+"Msg");
             if (msg != null) {
               msgList   = JSON.parse(msg);
             }
          
               msgList.push(inMsg);
         
             window.localStorage.setItem(msgInboxName+"Msg" ,JSON.stringify(msgList));
           }
  

    } // class MsgLocalStorageClass