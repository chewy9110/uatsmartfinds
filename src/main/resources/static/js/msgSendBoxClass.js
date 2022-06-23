
class MsgSendBoxClass {
 
  constructor(DeployServer ) {
    this._DeployServer = DeployServer;
  }

// BtnSendMsg modal
  addEventListenerSendMsgModal() {
 
   let sendBoxMsgModal = document.querySelector("#sendboxmsgmodal");
   sendBoxMsgModal.addEventListener('show.bs.modal', function (event) {
 
    // document.querySelector("#btn-sendmsgbox").style.display="block";
    // document.querySelector("#btn-sendmsgclose").style.display="none";
    // document.querySelector("#btn-sendmsglogin").style.display="none";
    // document.querySelector("#btn-sendmsgMymsg").style.display="none";
    MsgSendBox.EnableBtn("btn-sendmsgbox");

    // Button that triggered the modal
    let button = event.relatedTarget
 
    // Extract info from data-bs-* attributes
    if (( typeof(button ) == "undefined") ||
    ( button  == null) || (button=="") )  return;

    let msgItemStr =  button.getAttribute('data-bs-item');
    if (( typeof(msgItemStr ) == "undefined") ||
            ( msgItemStr  == null)  || (msgItemStr == "") )
            return;

 

     msgItemStr =   msgItemStr.replace(/undefined/g, '');
     let msgItem =  JSON.parse(msgItemStr);
 
    let hidSendboxMsgItem = document.querySelector("#hid-sendbox-msgItem");
    hidSendboxMsgItem.value = msgItemStr;  
 
    let txtFrom = msgItem.from;

    let lblSendBoxMsgFrom = document.querySelector("#lbl-sendbox-from");
    lblSendBoxMsgFrom.value = txtFrom;  
    lblSendBoxMsgFrom.disabled = true;
 
    // let txtTo= msgItem.to;

      //    alert(msgItem.toUid);
          let toUid = msgItem.toUid;

           let txtTo =   MsgSendBox.getDisplayName(toUid)

      let lblSendBoxMsgTo = document.querySelector("#lbl-sendbox-to");
    //  lblSendBoxMsgTo.value = txtTo;
    //  lblSendBoxMsgTo.disabled = true;

     let urlImg =  msgItem.url;
     let ImgSendBoxMsg = document.querySelector("#img-sendboxmsg");
     ImgSendBoxMsg.src = urlImg;
 
     let productTitle =  msgItem.productTitle;
     let lblSendboxProductTitle = document.querySelector("#lbl-sendbox-producttitle");
     lblSendboxProductTitle.innerHTML = productTitle;
     
     //////
     document.querySelector("#txt-sendbox-msg").value="";


       if (txtFrom=="undefined") {txtFrom = ""}
       // need to login
       if (txtFrom.length===0){
        //alert("Please Login before you may send message");
        // setTimeout(function(){
        //   window.location.href = 'login.html';
        //   }, 20000);
 
        // MsgSendBox.MessageBox("<h4 class='alert-heading'><i  class='bi-exclamation-octagon-fill'></i> Oops! Something went wrong.</h4><p>Please Login before you may send message</p><p> Redirecting after 5 seconds.</p>" 
        // )
 
          MsgSendBox.MessageBox("<h5 class='alert-heading'><i  class='bi-exclamation-octagon-fill'></i>&nbsp Please login before you may send message</h5> " 
          )



          // document.querySelector("#btn-sendmsgbox").style.display="none";
          // document.querySelector("#btn-sendmsgclose").style.display="none";
          // document.querySelector("#btn-sendmsglogin").style.display="block";
          // document.querySelector("#btn-sendmsgMymsg").style.display="none";
          MsgSendBox.EnableBtn("btn-sendmsglogin");

          return
        }   
 
       // same from and to uid
       if (msgItem.fromUid===msgItem.toUid){
 
          MsgSendBox.MessageBox("<p><i  class='bi-exclamation-octagon-fill'></i>&nbsp Oops, Message can't send to same person.</p>")
 
          lblSendboxProductTitle.innerHTML = ""
  
          // document.querySelector("#btn-sendmsgbox").style.display="none";       
          // document.querySelector("#btn-sendmsgclose").style.display="block";
          // document.querySelector("#btn-sendmsglogin").style.display="none";
          // document.querySelector("#btn-sendmsgMymsg").style.display="none";

          MsgSendBox.EnableBtn("btn-sendmsgclose");

          return
      }

     MsgSendBox.showForm();
 

  })
 }

 

addEventListenerBtnSendBoxMsgClick() {
  document.querySelector("#btn-sendmsgbox").addEventListener("click", function(){ 
 
     let txtMsg = document.querySelector("#txt-sendbox-msg").value;
     if (txtMsg.length===0) {
       return // nothing to do
     }

      txtMsg =   txtMsg.replace(/\n/g, '<br>\n');

      let msgItem={};
      let msgItemStr  = document.querySelector("#hid-sendbox-msgItem").value;
      if ((  msgItemStr  != null) ||
          (typeof(msgItemStr) != "undefined") )
          msgItem = JSON.parse(msgItemStr); 

  //alert(msgItemStr)

    let msgInboxId = 0;
    let msgInboxName = "";
   
    let msgInboxUid =  msgItem.inboxUid;
    let msgFromUid = msgItem.fromUid;
    let msgToUid = msgItem.toUid;

    let msgProductImgURL = msgItem.url;
    let msgFromName = msgItem.from; 
    //"images/smartfindweblogo.jpg";
    let msgFromImg = ""; //msgUtilUserImgUrl(msgFromUid);  //member's profile image
    let msgToName = msgItem.to; 
    //"images/placeholder.gif";
    let msgToImg = ""; //msgUtilUserImgUrl(msgToUid);   //member's profile image
    let msgLine = txtMsg;
    let msgTimestamp = currentDate(); // today's date
    let msgProductId =  msgItem.productId;
    //let msgOwnerId = msgItem.ownerId;
    let msgProductTitle = msgItem.productTitle;
    let msgPrice = msgItem.price;

    let msgInboxUFid = msgItem.toUid; 

    // addMsg ..MsgFormat
    let sendBoxItem =  msgData.MsgFormat(msgInboxId, msgInboxName,
                        msgProductImgURL, msgFromName,  msgFromImg,
                        msgToName,  msgToImg,  msgLine, 
                        msgTimestamp, msgProductId, msgProductTitle, msgPrice, 
                        msgInboxUid, msgFromUid, msgToUid,  msgInboxUFid );
  
                              
       if  (MsgSendBox._DeployServer == "Remote")    {
        //remote  
        console.log(MsgSendBox._DeployServer)
        msgData.saveInbox( sendBoxItem );
      }
      else {
     // local
         console.log(MsgSendBox._DeployServer)
         //SaveMsg for Buyer inbox
          sendBoxItem.msgInboxName=msgFromName;
         msgData.saveInbox( sendBoxItem );

         //SaveMsg for Seller inbox
          sendBoxItem.msgInboxName=msgToName;
          msgData.saveInbox( sendBoxItem );
       }


     // alert("Message Sent.");
 
     {/* MsgSendBox.MessageBox("<h5><i class='bi bi-check-circle'></i></h5><h5>Your message have been sent.<br> Check  \"My Messages\" for detail.</h5>")
  */}
 
   MsgSendBox.MessageBox("<h5 style='text-align:center'><i class='bi bi-check-circle' style='font-size: 2rem;  color: cornflowerblue;'></i>&nbspYour message has been sent.</h5><h5 style='text-align:center'>Check \"My Messages\" for detail.</h5>")
 
    //  document.querySelector("#btn-sendmsgbox").style.display="none";
    //  document.querySelector("#btn-sendmsgclose").style.display="block";
    //  document.querySelector("#btn-sendmsglogin").style.display="none";
    //  document.querySelector("#btn-sendmsgMymsg").style.display="block";
    MsgSendBox.EnableBtn("btn-sendmsgMymsg")

      // alert("ProductId:"+productId+"\n"+"From:" + txtFrom + "\n"+ "To:" + txtTo + "\n" + "Message : "+txtMsg  );
      
   });
  
}
 
EnableBtn(Btn){

  document.querySelector("#btn-sendmsgbox").style.display="none";
  document.querySelector("#btn-sendmsgclose").style.display="none";
  document.querySelector("#btn-sendmsglogin").style.display="none";
  document.querySelector("#btn-sendmsgMymsg").style.display="none";

switch(Btn) {
  case "btn-sendmsgbox":
    document.querySelector("#btn-sendmsgbox").style.display="block";
    break;
  case "btn-sendmsgclose":
    document.querySelector("#btn-sendmsgclose").style.display="block";
    break;
  case "btn-sendmsglogin":
    document.querySelector("#btn-sendmsglogin").style.display="block";
    document.querySelector("#btn-sendmsgclose").style.display="block"
    break;
  case "btn-sendmsgMymsg":
      document.querySelector("#btn-sendmsgMymsg").style.display="block";
      document.querySelector("#btn-sendmsgclose").style.display="block";
      break;
  //default:
 }


}

addEventListenerSendMsgModalCollapse () {
  document.querySelector("#sendboxmsgmodal").addEventListener('hidden.bs.modal', function (event) {
     
    let alertBox = document.querySelector("#alert2-id") ;
    let formbox = document.querySelector("#form-id") ;

    var bsCollapse = new bootstrap.Collapse(alertBox, {
    toggle: false
     })
  // console.log("form-idshow.bs.collapse ");
   
    bsCollapse.hide() // reset to hide the messagebox
 
     var bsCollapseForm = new bootstrap.Collapse(formbox, {
       toggle: false
     })
  
    bsCollapseForm.show() // reset to show the form
 })
 
}

MessageBox(msg){


  let alertBox = document.querySelector("#alert2-id") ;
  let formbox = document.querySelector("#form-id") ;
  let formBoxModal = document.querySelector("#sendboxmsgmodal") ;
 
   alertBox.innerHTML=msg;
 
var bsCollapseForm = new bootstrap.Collapse(formbox, {
  toggle: false 
})

bsCollapseForm.hide() // form

  var bsCollapse = new bootstrap.Collapse(alertBox, {
    toggle: false 
  })

 bsCollapse.show() // message box

 
}

showForm(){

  let alertBox = document.querySelector("#alert2-id") ;
  let formbox = document.querySelector("#form-id") ;
 
   var bsCollapse = new bootstrap.Collapse(alertBox, {
    toggle: false 
  })
 
   bsCollapse.hide()  // messageBox
 
  var bsCollapseForm = new bootstrap.Collapse(formbox, {
    toggle: false 
  })
 
   bsCollapseForm.show() // form

}


 async getDisplayName(toUid)
 {

       let  txtTo=await msgUtilUserDisplay(toUid);
      //  alert("GETDisplayName")
      // alert ( txtTo);
       let lblSendBoxMsgTo = document.querySelector("#lbl-sendbox-to");
         lblSendBoxMsgTo.value = txtTo.displayName;
         lblSendBoxMsgTo.disabled = true;

      return(txtTo.displayName)
 }


}  // class msgSendBoxUtilClass


 
  
