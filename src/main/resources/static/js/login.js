// login functions

// this variable is used across different .html but is local to each html
// value is updated using session information
let currLoginID = { userID:"", displayName:"", email:""}; 

function checkBrowserSupport() {
  console.log(typeof(Storage));
  if (typeof(Storage) == "undefined") {
    // browser don't support Web Storage
    return false;
  }
  return true;
}

/*function handleLoginLink() {
  if (checkBrowserSupport()) {
    debugger;
    currLoginID = window.sessionStorage.getItem("loginDetails"); // check if user is already login
    console.log("logindetails", currLoginID);
  }
  if (userName != ""){
    document.querySelector("#loginLink > a").style.display = "none";
    document.querySelector("#navbarDropdown").style.display = "block";
    document.querySelector("#navbarDropdown").innerHTML = userName;
  }
  else {
    // document.querySelector("#loginLink > a").style.display = "block";
    document.querySelector("#navbarDropdown").style.display = "none";
    document.querySelector("#navbarDropdown").innerHTML = "Username";
    document.location.href = "./login.html";
  }
  console.log("executed here.");
}
handleLoginLink();*/

function logout() {
  // perform session cleanup

  document.location.href = "./login.html";
  window.sessionStorage.clear();
}

function ValidateEmail(inputText, pw) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  console.log("id", inputText);
  console.log("ValidateEmail", pw);
  if(inputText.match(mailformat)) {
      console.log("Valid email address!");
      if ( checkLogin(inputText, pw) ) {
        location.href = "./member";
        //document.form1.text1.focus();
        //console.log("validate email" + datastr);
        return true;
      }
      else {
        alert("Login failed.");
        return false;
      }
  }
  else {
      alert("You have entered an invalid email address!");
      //document.form1.text1.focus();
      return false;
  }
}

function checkLogin(email, pw) {
  const userDetail = userList.findUser(email, pw);

  // console.log(currLoginID);
  if (userDetail == null) {
    // console.log("isnull");
    return false;
  }
  else {
    currLoginID.userID = userDetail.userID;
    currLoginID.displayName = userDetail.displayName;
    currLoginID.email = userDetail.email;
    // console.log("notnull");
    if (checkBrowserSupport()) {
      //debugger;
      window.sessionStorage.setItem("loginDetails", JSON.stringify(currLoginID) ); // check if user is already login
      console.log("logindetails", currLoginID);
      return true;
    }
    else {
      alert("Browser does not support session storage. Cannot proceed.");
      return false;
    }
  }
}

function memberPageCheck() {
// this function is used to check if a user have accessed this page via proper login
// as this is a member only page, the user should be redirected to index.html if they didn't do a login
  let tmpLoginDetails = [];

  if (checkBrowserSupport()) {
    tmpLoginDetails = window.sessionStorage.getItem("loginDetails"); // check if user is already login
    if (tmpLoginDetails == null) {
      // user access this webpage without going through a login, by default redirect user to index.html
      location.href = "./login.html";
    }
    else {
      console.log("tmpLoginDetails", tmpLoginDetails);

      currLoginID = JSON.parse(tmpLoginDetails); // now can access custDetailObject as an array of object
      if (currLoginID == null) {
        console.log("loginDetails is null");
        location.href = "./login.html";
        return;
      }

      // console.log("memberPageCheck() -", currLoginID.displayName, currLoginID.userID, currLoginID.email);
      document.querySelector("#loginLink > a").style.display = "none";
      document.querySelector("#navbarDropdown").style.display = "block";
      document.querySelector("#navbarDropdown").innerHTML = currLoginID.displayName;
    }
  }
  else {
    alert("Browser does not support session storage. Cannot proceed.");
  }
}

function publicPageCheck() {
  // as this is a public page, the navbar will change to display Login if the user has not login
  // or display the user's display name if they had previously login
    let tmpLoginDetails = [];
  
    if (checkBrowserSupport()) {
      tmpLoginDetails = window.sessionStorage.getItem("loginDetails"); // check if user is already login
      if (tmpLoginDetails == null) {
        // user access this webpage without going through a login
        document.querySelector("#loginLink > a").style.display = "block";
        document.querySelector("#navbarDropdown").style.display = "none";
        //document.querySelector("#navbarDropdown").innerHTML = "Username";
      }
      else {
        let currLoginID = JSON.parse(tmpLoginDetails); // now can access custDetailObject as an array of object
        if (currLoginID == null) {
          console.log("loginDetails is null");
          location.href = "./login.html";
          return;
        }
        // console.log("logindetails", currLoginID.displayName);
        document.querySelector("#loginLink > a").style.display = "none";
        document.querySelector("#navbarDropdown").style.display = "block";
        document.querySelector("#navbarDropdown").innerHTML = currLoginID.displayName;
      }
    }
    else {
      alert("Browser does not support session storage. Cannot proceed.");
    }
}

//document.addEventListener("DOMContentLoaded", memberPageCheck);
//userList.sortUserByEmail();
/*
const loginID = "";
const loginName = "";
let datastr = "";

fetch('./login.data')
.then(res=>res.text())
.then(data=>{
    datastr = String(data);
    console.log("inside " + data);
    datastr = data.toString();
    console.log("inside'" + datastr + "'");
})
console.log("outside [" + datastr + "]");
*/