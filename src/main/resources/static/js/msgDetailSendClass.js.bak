//add send button listener
class MsgDetailSendClass {
    
  addEventListenerBtnSendClick() {
    document.querySelector("#btnMsgSend").addEventListener("click", function(){ 
      // displayMsgDetail(msg)
      let txtSendMsg = document.querySelector("#txtSendMsg")
       
      let msgLine =   txtSendMsg.value.replace(/\n/g, '<br>\n');

      if (msgLine.length === 0) {return};
 
      let msgTimestamp = currentDate(); // today's date

      msgDetail.sendMsg(msgLine,  msgTimestamp);   
 
      txtSendMsg.value="";
      txtSendMsg.focus();
   
      msgDetailSend.scrollToBottom('containerBottom');
      txtSendMsg.value="";
      txtSendMsg.focus();
      
   }) 
  }
 
      //////////////////////////////////////////////////////
      // scroll to bottom
      scrollToBottom(id) { 
        const element = document.getElementById(id);
        element.scrollIntoView();

        // const scrollToBottom = (id) => {
        //  const element = document.getElementById(id);
        //  element.scrollIntoView();
      }
 
} // class MsgDetailSendController
 
 
 


   
    
     
