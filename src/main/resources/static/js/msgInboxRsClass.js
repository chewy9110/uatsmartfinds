class MsgInboxRsClass {

  constructor() {
    const _msgInboxList = [];
 }


 async  loadInbox() {
  
    // msgInbox._msgInboxList = [];
     let _msgInboxList = [];
     let  _msgDetail = [];


    const _msgInboxName = msgUtilRemoteUserId(); // inside msgUtil 
    const _remoteHost  = msgUtilRemoteHostURL();  // inside msgUtil 
    const _remoteURL    = _remoteHost + "/msg/displayInboxMsg"
    const _remoteInboxAPI = _remoteURL + "/" + _msgInboxName
 
   //fetch data from database using the REST API endpoint from Spring Boot
 //   msgUtilDisplayLoading("");
   console.log("_msgInboxName"+_msgInboxName)
   console.log(_remoteInboxAPI)

      await   fetch(_remoteInboxAPI)
   
    .then((resp) => resp.json())
    .then(function(data) {
      // console.log("2. receive data")
      // console.log(data);

   //     msgUtilHideLoading();
 
      data.forEach(function (item, index) {
      
      _msgDetail =  msgData.MsgFormat(item.msgInboxId, 
          item.msgInboxName,
          item.msgProductImgURL,
          item.msgFromName,item.msgFromImg,
          item.msgToName,item.msgToImg,
          item.msgLine, item.msgTimestamp, 
          item.msgProductId,   
          item.msgProductTitle , item.msgPrice,
          item.msgInboxUid, item.msgFromUid,item.msgToUid,  
          item.msgInboxUFid 
          )
          
          _msgInboxList.push(_msgDetail);
     
       }
       );
       // after populate
          //  const _msgInbox = new MsgInboxClass (_msgInboxList,"Remote");
          //  _msgInbox.displayInbox();
       
      //  msgItem = Object.fromEntries(  _msgInboxList );
     
    })
 
    .catch(function(error) {
        console.log(error);
      //  msgUtilDisplayLoading(error);
    }
    
    );
 
   // console.log (_msgInboxList)
    return( _msgInboxList)
 

    // function status(res) {
    //   if (!res.ok) {
    //       throw new Error(res.statusText);
    //   }
    //   return res;
    // }

 } //loadInbox
   


} // class MsgInboxRsClass

    
 
 