 
///////////////////////////////////////////////////////
//  date function 
///////////////////////////////////////////////////////
function currentDatex(){
    // let msgTimestamp="01/05/22 13:44";
   //let msgTimestamp= new Date('2022', '2', '28').toLocaleDateString('en-GB');
    var today = new Date();
    let currentDate = ('0' + today.getDate()).slice(-2) + '/' +('0' + (today.getMonth()+1)).slice(-2)+ '/' +  ('0' + today.getFullYear()).slice(-2) + ' '+today.getHours()+ ':'+('0' + (today.getMinutes())).slice(-2)+ ':'+ ('0' + today.getSeconds()).slice(-2)  ;  
    return currentDate;
}

function currentDate(){
    // let msgTimestamp="01/05/22 13:44";
   //let msgTimestamp= new Date('2022', '2', '28').toLocaleDateString('en-GB');
    var today = new Date();
  //  let currentDate = ('0' + today.getDate()).slice(-2) + '/' +('0' + (today.getMonth()+1)).slice(-2)+ '/' +  ('0' + today.getFullYear()).slice(-2) + ' '+today.getHours()+ ':'+('0' + (today.getMinutes())).slice(-2)+ ':'+ ('0' + today.getSeconds()).slice(-2)  ;
    return today;
}




function formatDate(date){

     let newDate = new Date(date);

    // options = {
    //   year: 'numeric', month: 'numeric', day: 'numeric',
    //   hour: 'numeric', minute: 'numeric', second: 'numeric',
    //   hour12: false,
    //   timeZone: 'Asia/Singapore'
    // };

      options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    newDate = new Intl.DateTimeFormat('default', options).format(newDate)

    // console.log (Intl.DateTimeFormat().resolvedOptions().timeZone)

  return(newDate );

}

function formatPrice(price) {

      var price = "$" + Number(price).toFixed(2);
       return(price);
}

///////////////////////////////////////////
// current login id
///////////////////////////////////////////
function msgUtilLoginId() {

   // let  currLoginID =  { userID:"", displayName : "", email : "", pw : ""};

    let  sesslogin = window.sessionStorage.getItem("loginDetails");

    if (  sesslogin  != null) {
         
         currLoginID = JSON.parse(sesslogin);
    }
 
        console.log ("user")
        console.log(currLoginID)
    return currLoginID
}

///////////////////////////////////////////
// Profile Url image
///////////////////////////////////////////

function msgUtilRemoteUserId() {
//     <script th:inline="javascript">
//      var message = [[ ${currentuser.username}]];
//     </script>
//   <script th:inline="javascript">
//      /*<![CDATA[*/
//        currLoginID.userId = [[${currentuser.userid}]];
//        console.log("member.html***** ID " + currLoginID.userId);
//        currLoginID.displayName = [[${currentuser.displayName}]];
//        console.log("member.html***** displayname " + currLoginID.displayName);
//        currLoginID.username = [[${currentuser.username}]];
//        console.log("member.html***** username " + currLoginID.username);
//        currLoginID.userImgUrl = [[${currentuser.userImgUrl}]];
//         console.log("member.html***** userImgUrl " + currLoginID.userImgUrl);
//
//      /*]]>*/
//     </script>

 //alert (currLoginID.userId )

   return( msgUtilLoginId().userId);
   // return(1);
}

function msgUtilDisplayLoading(errmsg){
    const loader = document.querySelector("#loading");
    const loadermsg = document.querySelector("#loadingmsg");
    loader.classList.add("display");
    setTimeout(()=> {
        loader.classList.remove("display");
        loadermsg.innerHTML = "Remote Server failed to load .. "+errmsg;
    },5000);
}

function msgUtilHideLoading(){
    const loader = document.querySelector("#loading");
    loader.classList.remove("display");
}

function msgUtilShowServerStatus(msg){
    const loader = document.querySelector("#ls");
 
    
    if (  
    (msg.length == 0) 
    )  
    {
       // loader.classList.add("hidden");
        // loader.classList.add("alert");
        // loader.classList.add("alert-light");
        loader.innerHTML = msg;
        loader.style.display = "none";
    }
   else {
    //loader.classList.add("display:block");
    loader.classList.add("alert");
    loader.classList.add("alert-danger");
    
    loader.innerHTML = msg;
    loader.style.display = "block";
   }
}

 async function  msgUtilloginUserInfo() {

    const _remoteHost  =  msgUtilRemoteHostURL();  // inside msgUtil
    const _remoteURL   = _remoteHost + "/user/currentuser"
    const _remoteAPI = `${_remoteURL}`

console.log(_remoteAPI);

    let currLoginID = [];
  await    fetch(_remoteAPI)
    .then((resp) => resp.json())
    .then(function(data) {
//         console.log("2222. receive data")
//         console.log(data);
         currLoginID = {
            userId  : data.userid,
            userName :  data.username,
            displayName :  data.displayName,
            userImgUrl :  data.userImgUrl
         }
         console.log("userid="+currLoginID.userId)
         console.log("username="+currLoginID.userName)
         console.log("displayName="+currLoginID.displayName)
         console.log("userImgUrl="+currLoginID.userImgUrl)

         window.sessionStorage.removeItem("loginDetails")
         window.sessionStorage.setItem("loginDetails", JSON.stringify(currLoginID) );

   })
     .catch(function(error) {
       console.log(error);
     });

    //  console.log ("inside loginUser"+currLoginID);

     return(currLoginID);

}

function  msgUtilRemoteHostURL() {
   //  remoteHostURL = "http://localhost:8080"
 if ((typeof(activeURL ) == "undefined") ||
     ( activeURL  == null)  ||
      (activeURL == "") ) {
          //remoteHostURL = "https://mysmartfinds.herokuapp.com"
          remoteHostURL = "http://localhost:8080"
   }
  else {
     remoteHostURL = activeURL;
     remoteHostURL = remoteHostURL.replace(/\/+$/, '');
     console.log ("msgUtilRemoteHostURL - this.activeURL");
     console.log (remoteHostURL) ;
  }

  console.log (remoteHostURL) ;

    return(remoteHostURL)
}

///// ///
   async function  msgUtilUserDisplay(userid) {

     console.log ("userid")
     console.log(userid)
    //if (userid = "" ) return;

     console.log ("userid")
     console.log(userid)
      const id = userid
      const _remoteHost  =  msgUtilRemoteHostURL();  // inside msgUtil
    //  const _remoteURL   = `${_remoteHost}/user/${userid}`;
    //  const _remoteAPI = `${_remoteURL}`

    const _remoteAPI   = `${_remoteHost}/user/${id}`;

    console.log(_remoteAPI);

    if (userid != "" )  { 

      let currLoginID = [];
      await    fetch(_remoteAPI)
      .then((resp) => resp.json())
      .then(function(data) {
  //         console.log("2222. receive data")
  //         console.log(data);
           currLoginID = {
              userId  : data.userid,
              userName :  data.username,
              displayName :  data.displayName,
              userImgUrl :  data.userImgUrl
           }
           console.log("userid="+currLoginID.userId)
           console.log("username="+currLoginID.userName)
           console.log("displayName="+currLoginID.displayName)
           console.log("userImgUrl="+currLoginID.userImgUrl)

        //  return(currLoginID.displayName);
        //   window.sessionStorage.removeItem("loginDetails")
         //  window.sessionStorage.setItem("loginDetails", JSON.stringify(currLoginID) );

     })
       .catch(function(error) {
         console.log(error);
       });

       console.log ("inside msgUtilUserDisplayName"+currLoginID);
       console.log ("  displayName"+currLoginID.displayName);

      // return(currLoginID.displayName);
        return(currLoginID);
     }
     else {
         return;
     }
  }
  



