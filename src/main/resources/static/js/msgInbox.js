 
///////////////////////////////////////////////////////
// local
///////////////////////////////////////////////////////
//      const DeployServer = "Local"
//      const msgData = new MsgLocalStorageClass();
//      const msgInboxC = new MsgInboxLsClass();
//      const msgInbox  = new MsgInboxClass(DeployServer);
//      msgUtilShowServerStatus(DeployServer);
//      msgInbox.loadmsg();
///////////////////////////////////////////////////////
// end of local 
///////////////////////////////////////////////////////
 
///////////////////////////////////////////////////////
// remote
///////////////////////////////////////////////////////
       const DeployServer = "Remote"

        const msgData = new MsgRemoteStorageClass();
        const msgInboxC  = new MsgInboxRsClass();
        const msgInbox  = new MsgInboxClass(DeployServer);
        msgUtilShowServerStatus(DeployServer);
        msgUtilShowServerStatus("");
       //msgInbox.loadmsg();

      (async () => {

            await msgUtilloginUserInfo()

         })();


    (async () => {

               await   msgInbox.loadmsg();

           })();

 ///////////////////////////////////////////////////////
 // end of remote
 ///////////////////////////////////////////////////////
