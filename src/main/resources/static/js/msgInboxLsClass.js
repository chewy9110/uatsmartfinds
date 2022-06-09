class MsgInboxLsClass {
 
  loadInbox(msgInboxName) {

    const msgInboxList = [];
   // const msgInboxName = this._msgInboxName;

    // read existing msg  
    let inbox = window.localStorage.getItem(msgInboxName+"Inbox");
    if (inbox != null) {
      let inboxObject = JSON.parse(inbox);

      inboxObject.forEach((item) => {
        msgInboxList.push(item);
      })
    }

    return(msgInboxList)
 }

 /////////
 getQueryInboxNameOrgKeep() {
       
              //const queryString = window.location.href;
              const parameters = new URLSearchParams(window.location.search);
              const msgInboxName = parameters.get('name');
             
              this._msgInboxName = msgInboxName;

              return(msgInboxName);
  
     }   
     
 /////////
  getQueryInboxName() {
      let msgInboxName = "";
      
        if (typeof(Storage) == "undefined") {
          // browser don't support Web Storage
          //alert("unsupported")
        }
        else {
     
           let  sesslogin = window.sessionStorage.getItem("loginDetails");
            let sessLoginID = JSON.parse(sesslogin);
            msgInboxName = sessLoginID.displayName;
          //  this._msgInboxName = msgInboxName
        } 
      return(msgInboxName);

}  
       
} // class MsgInboxLsClass

    
 
 