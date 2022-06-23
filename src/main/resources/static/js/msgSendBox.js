
///////////////////////////////////////////////////////
// remote
///////////////////////////////////////////////////////
const DeployServer = "Remote"
const msgData = new MsgRemoteStorageClass();
const MsgSendBox = new MsgSendBoxClass(DeployServer);

///////////////////////////////////////////////////////
// end of remote 
///////////////////////////////////////////////////////

MsgSendBox.addEventListenerBtnSendBoxMsgClick();  //  button on modal
MsgSendBox.addEventListenerSendMsgModal(); // modal event to pass data-bs-*
MsgSendBox.addEventListenerSendMsgModalCollapse(); // hide alert and form div boxes.

 
 

  
