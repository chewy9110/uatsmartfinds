class MsgRemoteStorageClass {
  
    //methods
        ////////////
       MsgFormat( msgInboxId,
                  msgInboxName,  
                   msgProductImgURL, 
                   msgFromName, msgFromImg,
                   msgToName, msgToImg,
                   msgLine,  msgTimestamp,
                   msgProductId,
                   
                   msgProductTitle,
                    msgPrice,
                   msgInboxUid, 
                   msgFromUid ,
                   msgToUid,
                   msgInboxUFid 
                   ) {
  
            // message detail format for sendmessage module
            const msgDetail = {
                msgInboxId: msgInboxId,
                msgInboxName: msgInboxName,
                msgProductImgURL: msgProductImgURL,
                msgFromName: msgFromName,
                msgFromImg: msgFromImg,
                msgToName: msgToName, 
                msgToImg: msgToImg,
                msgLine: msgLine,
                msgTimestamp: msgTimestamp,
                msgProductId: msgProductId,
               
                msgProductTitle:msgProductTitle,
                msgPrice:msgPrice,
                msgInboxUid:msgInboxUid,
                msgFromUid:msgFromUid,
                msgToUid:msgToUid,
                msgInboxUFid:msgInboxUFid 
            }
       
            return(msgDetail);

     
        } 

  saveInbox(inMsg) {
 
    const _remoteHost  = msgUtilRemoteHostURL();  // inside msgUtil 

     const msgInboxUid = inMsg.msgInboxUid;
     const msgInboxUFid = inMsg.msgInboxUFid;
     const msgProductId= inMsg.msgProductId;
     const msgFromUid = inMsg.msgFromUid;
     const msgToUid = inMsg.msgToUid;
     const msgLine = inMsg.msgLine;
 
     console.log (inMsg);

     const formData = new FormData();
     formData.append('InboxUid', msgInboxUid);
     formData.append('InboxUFid', msgInboxUFid);
     formData.append('ProductId', msgProductId);
     formData.append('FromUid', msgFromUid);
     formData.append('ToUid', msgToUid);
     formData.append('msgLine',msgLine);
 
    const _remoteURL  = _remoteHost + "/msg/saveSendMsg"
    const _remoteSendMsgAPI = _remoteURL    //+ "?" + _remoteQueryStr
 
    console.log (_remoteSendMsgAPI)
 
   //fetch data from database using the REST API endpoint from Spring Boot
   // msgUtilDisplayLoading("");
 
   fetch(_remoteSendMsgAPI, {
    method: 'POST',
    body: formData
    })
    .then(function(response) {
        console.log(response.status); // Will show you the status
        if (response.ok) {
          //  alert("msg sent  Successfully ")
          console.log("msg sent  Successfully ");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
       // alert("Error   sending msg")
    });
 
 
    } //saveInbox
        
          

    } // class MsgLocalStorageClass


   
