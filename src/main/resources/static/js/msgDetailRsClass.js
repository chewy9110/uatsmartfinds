class MsgDetailRsClass {
 
  constructor() {
    // this.msgItem={};
    // this._msgInboxTo= [];

 }


 ///////
 async loadMsg() {
 
   const _msgDetailList = [];
   let  _msgInboxTo = [];
   let _msgDetail = [];


   _msgInboxTo = await this.getRemoteQueryId()

  const _msgInboxId = _msgInboxTo.msgInboxId;
 
  const _remoteHost  = msgUtilRemoteHostURL();  // inside msgUtil 
  const _remoteURL   = _remoteHost + "/msg/displayMsgDetail"
  const _remoteMsgDetailAPI = _remoteURL + "/" + _msgInboxId
 
  console.log(_remoteMsgDetailAPI);
 
 //fetch data from database using the REST API endpoint from Spring Boot
   msgUtilDisplayLoading();

 await fetch(_remoteMsgDetailAPI)
 .then((resp) => resp.json())
 .then(function(data) {
      console.log("2. receive data")
      console.log(data);

     msgUtilHideLoading();
 
    data.forEach(function (item, index) {
   
      _msgDetail = msgData.MsgFormat(item.msgInboxId, 
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
        
        _msgDetailList.push(_msgDetail);
   
     }
     );
     // after populate
     
    //  const _msgDetailbox = new MsgDetailClass(_msgDetailList, _msgInboxTo, "Remote");
     
    //  console.log ("inside fetch"+_msgDetailList);
     
    //  _msgDetailbox.displayMsg();

  
     
  })
  .catch(function(error) {
    console.log(error);
  });


  console.log ("inside rsloadMsg"+_msgDetailList);
  return(_msgDetailList);
  
 } //LoadMsg

  /////////
  // getQueryRemoteId(){
  //   const parameters = new URLSearchParams(window.location.search);
  //   const msgInboxId = parameters.get('FromInboxId');
  //   return(msgInboxId)
  // }

  /////////
  async getRemoteQueryId() {
 

            //const queryString = window.location.href;
            const parameters = new URLSearchParams(window.location.search);
       
            // access from inbox
            let msgInboxTo = [];
            let item = [];

             let msgItem = {};
   
            // console.log(parameters);
            // let decodeURIStr=decodeURIComponent(parameters)  
               let decodeURIStr=decodeURI(parameters)  
   
           // console.log(decodeURIStr);
            msgItem = Object.fromEntries(new URLSearchParams(decodeURIStr));
 
            let msgInboxId=msgItem.msgInboxId;
            console.log("msgItem.msgInboxId="+msgInboxId);
            

            // access from watchlist
            const msgFromUid= parameters.get('FromUid');;
            const msgToUid= parameters.get('ToUid');;
            const msgProductId= parameters.get('FromProductId');;
 
            
            if (msgInboxId != null){ 
            // query from inbox
              console.log("query from inbox")
               item = this.readInbox(msgItem);
               msgInboxTo =  this.myMsgBox(item.msgInboxName, item);
              }
             else if  (msgFromUid != null) {
             // query from watchlist
               console.log("query from watchlist")
                 msgInboxTo = await this.readWatchlist(msgFromUid, msgToUid, msgProductId );

                // msgInboxTo = this.loadRemoteWatchlist(msgFromUid, msgToUid, msgProductId)
              }
            else 
               msgInboxTo = [];

            console.log(msgInboxTo)
          
            return(msgInboxTo)
        } // getRemoteQueryId

  ///////
  readInbox(item) {
 
         // -- change to query string
 
          let msgInboxTo = [];

          msgInboxTo =  msgData.MsgFormat(item.msgInboxId, 
            item.msgInboxName,
            item.msgProductImgURL, 
             item.msgFromName,  item.msgFromImg,
            item.msgToName,  item.msgToImg,  
            "item.msgLine", 
            "item.msgTimestamp", item.msgProductId,  
            item.msgProductTitle, item.msgPrice, 
            item.msgInboxUid, item.msgFromUid, 
            item.msgToUid,
            item.msgInboxUFid);

        return(msgInboxTo)
      } //readInbox

  ///////
  myMsgBox(msgInboxName, item) {
        let msgInboxTo = [];
        if (msgInboxName == item.msgFromName) {
          msgInboxTo =  msgData.MsgFormat(item.msgInboxId, 
                                      msgInboxName,
                                      item.msgProductImgURL, 
                                      item.msgFromName,  item.msgFromImg,
                                      item.msgToName,  item.msgToImg,  
                                      item.msgLine, 
                                      item.msgTimestamp, item.msgProductId,  
                                      item.msgProductTitle, item.msgPrice, 
                                      item.msgInboxUid, item.msgFromUid, 
                                      item.msgToUid,
                                      item.msgInboxUFid);
                }
                else {
                   //swap from and to name and img ..MsgFormat
                   msgInboxTo =  msgData.MsgFormat(item.msgInboxId, 
                    msgInboxName,
                    item.msgProductImgURL,
                    item.msgToName,  item.msgToImg,      // swap 
                    item.msgFromName,  item.msgFromImg,  // swap
                    item.msgLine, 
                    item.msgTimestamp, item.msgProductId, item.msgProductTitle, 
                    item.msgPrice, 
                    item.msgInboxUid,  item.msgToUid, item.msgFromUid,
                    item.msgInboxUFid);
                
                }

              return (msgInboxTo);
      } // MyMsgBox

 ///////

 async  loadRemoteWatchlist(msgFromUid, msgToUid, msgProductId) {
 
  const _msgDetailList = [];
  let  _msgInboxTo = [];
  let _msgDetail = [];

  _msgInboxTo = [];

  msgFromUid=100
  msgToUid=101
  msgProductId=106

 const _remoteHost  = msgUtilRemoteHostURL();  // inside msgUtil 
 const _remoteURL   = _remoteHost + "/msg/displayMsginboxByID"
 const _remoteAPI = `${_remoteURL}/${msgFromUid}/${msgToUid}/${msgProductId}`

 console.log(_remoteAPI);

//fetch data from database using the REST API endpoint from Spring Boot
//   msgUtilDisplayLoading();

await  fetch(_remoteAPI)
.then((resp) => resp.json())
.then(function(data) {
     console.log("2222. receive data")
     console.log(data);

    msgUtilHideLoading();
 
   data.forEach(function (item, index) {
  
     _msgDetail = msgData.MsgFormat(item.msgInboxId, 
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
       
       // _msgDetailList.push(_msgDetail);

       _msgInboxTo = _msgDetail;
  
    } );


   // after populate
    
    // const _msgDetailbox = new MsgDetailClass(_msgDetailList, _msgInboxTo, "Remote");
    
    // console.log ("inside fetch"+_msgDetailList);
    
    // _msgDetailbox.displayMsg();

 })
 .catch(function(error) {
   console.log(error);
 });


 console.log ("inside rsloadMsg"+_msgDetailList);
 return(_msgDetailList);
 
} //loadRemoteWatchlist


   readWatchlist(msgFromUid, msgToUid, msgProductId ) {
      
           let product = msgUtilProduct(msgProductId);
           let userFrom = msgUtilUser(msgFromUid);
           let userTo = msgUtilUser(msgToUid);

          // console.log (`product=${product}, userFrom=${userFrom}, userTo=${userTo}`)
  
          // let msgInboxName = userFrom.displayName;
          
         //  console.log (`msgInboxName=${msgInboxName}, msgFromUid=${msgFromUid}, msgProductId=${msgProductId}`)
 
           let msgInboxTo = [];
/// fetch --
           let item =   this.loadRemoteWatchlist(msgFromUid, msgToUid, msgProductId)
           let msgInboxName = item.msgInboxName;
           msgInboxTo = this.myMsgBox(msgInboxName, item)
/////           
           
        //   if (msgInboxTo == null)
        //   {
        //      // empty
        //     //alert ("empty")
        //      // empty inbox, will create one here.
        //      msgInboxTo = [];
  
        //     let msgInboxId = 0;
        //    // let msgInboxName = userFrom.displayName; // declared above already

        //     let msgInboxUid = msgFromUid  ;

        //    // let msgFromUid = msgFromUid; //passed in
        //    // let msgToUid = msgToUid;  //passed in
        //    // let msgProductId =  msgProductId  //passed in

        //     let msgProductTitle = product.title;
        //     let msgProductImgURL = product.imageURL1;
        //     let msgPrice = product.price;
 
        //     let msgFromName = userFrom.displayName
        //     let msgFromImg = msgUtilUserImgUrl(msgFromUid);  //member's profile image

        //     let msgToName = userTo.displayName
        //     let msgToImg = msgUtilUserImgUrl(msgToUid)   //member's profile image
            
        //     let msgLine = "" ;
        //     let msgTimestamp = currentDate(); // today's date
            
        //     let msgInboxUFid = msgToUid; 

        //     // addMsg ..MsgFormat
        //      msgInboxTo  = msgData.MsgFormat(msgInboxId, msgInboxName,
        //                         msgProductImgURL, msgFromName,  msgFromImg,
        //                         msgToName,  msgToImg,  msgLine, 
        //                         msgTimestamp, msgProductId, msgProductTitle, msgPrice, 
        //                         msgInboxUid, msgFromUid, msgToUid,
        //                         msgInboxUFid);

        //      }


        //  console.log(msgInboxTo)
 
           return(msgInboxTo)
 
        } //readWatchlist
 
     
    



} // class MsgDetailLsClass

 
