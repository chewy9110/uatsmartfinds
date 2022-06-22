
///////////////////////////////////////////////////////
// remote
///////////////////////////////////////////////////////
   const DeployServer = "Remote"
   const msgData = new MsgRemoteStorageClass();
   const msgDetailC = new MsgDetailRsClass();
    const msgDetail = new MsgDetailClass(DeployServer);


     (async () => {

            await msgUtilloginUserInfo()

         })();

     (async () => {

             await   msgDetail.loadMsgR();

         })();


    msgUtilShowServerStatus(DeployServer);
    msgUtilShowServerStatus("");
  
///////////////////////////////////////////////////////
// end of remote 
///////////////////////////////////////////////////////
 
///////////////////////////////////////////////////////
 
const msgDetailSend = new MsgDetailSendClass();
msgDetailSend.addEventListenerBtnSendClick();

msgDetailSend.scrollToBottom('containerBottom');
 

// memberPageCheck(); // handle login and navbar display

  
 

    
    