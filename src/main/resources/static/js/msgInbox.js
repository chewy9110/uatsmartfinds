



  let currLoginIDx;

// memberPageCheck(); // handle login and navbar display
  (async () => {
        currLoginIDx  = await loginUserInfo()
        console.log("outside")
        console.log("userid="+currLoginIDx.userId)
        console.log("username="+currLoginIDx.userName)
        console.log("displayName="+currLoginIDx.displayName)
        console.log("userImgUrl="+currLoginIDx.userImgUrl)

            window.sessionStorage.setItem("loginDetails", JSON.stringify(currLoginID) );
      })();

  console.log("outside2")
//        console.log("userid="+currLoginIDx.userId)
//        console.log("username="+currLoginIDx.userName)
//        console.log("displayName="+currLoginIDx.displayName)
//        console.log("userImgUrl="+currLoginIDx.userImgUrl)

this.currLoginIDMe =  msgUtilLoginId();
console.log("currLoginIDMe")
console.log("currLoginIDMe userid="+currLoginIDMe.userId)
console.log("currLoginIDMe username="+currLoginIDMe.userName)
console.log("currLoginIDMe displayName="+currLoginIDMe.displayName)
console.log("currLoginIDMe userImgUrl="+currLoginIDMe.userImgUrl)

//
//console.log("currLoginIDMe2")
//console.log("currLoginIDMe2 userid="+currLoginID.userId)
//console.log("currLoginIDMe2 username="+currLoginID.userName)
//console.log("currLoginIDMe2 displayName="+currLoginID.displayName)
//console.log("currLoginIDMe2 userImgUrl="+currLoginID.userImgUrl)



      const msgData = new MsgLocalStorageClass();
      const msgInboxLs = new MsgInboxLsClass();
      const msgInbox = new MsgInboxClass();

