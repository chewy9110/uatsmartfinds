 
///////////////////////////////////////////////////////
//  date function 
///////////////////////////////////////////////////////
function currentDate(){
    // let msgTimestamp="01/05/22 13:44";
   //let msgTimestamp= new Date('2022', '2', '28').toLocaleDateString('en-GB');
    var today = new Date();
    let currentDate = ('0' + today.getDate()).slice(-2) + '/' +('0' + (today.getMonth()+1)).slice(-2)+ '/' +  ('0' + today.getFullYear()).slice(-2) + ' '+today.getHours()+ ':'+('0' + (today.getMinutes())).slice(-2)+ ':'+ ('0' + today.getSeconds()).slice(-2)  ;  
    return currentDate;
}

///////////////////////////////////////////
// current login id
///////////////////////////////////////////
function msgUtilLoginId() {

    let  currLoginID =  { userID:"", displayName : "", email : "", pw : ""};

    let  sesslogin = window.sessionStorage.getItem("loginDetails");
     

    if (  sesslogin  != null) {
         
         currLoginID = JSON.parse(sesslogin);
    }
 
        
    return currLoginID
}

///////////////////////////////////////////
// Profile Url image
///////////////////////////////////////////
function msgUtilUserImgUrl(uid) {
    const userList = [];
    let user = {userId:"", userDisplayName:"", userImgUrl:""};

     user = {userId:"100", userDisplayName:"Cheong Yuen Thye", userImgUrl:"products/z01_male_placeholder.png"};
     userList.push(user);

    user = {userId:"101", userDisplayName:"Desmond Chia", userImgUrl:"products/smartfindweblogo.jpg"};
    userList.push(user);

    user = {userId:"102", userDisplayName:"Andrew Sim", userImgUrl:"products/z03_male_placeholder.png"};
    userList.push(user);
  
    user = {userId:"103", userDisplayName:"Chew Kim Beng", userImgUrl:"products/placeholder.gif"};
    userList.push(user);

    user = {userId:"104", userDisplayName:"Buyer1", userImgUrl:"products/salestag.jpg"};
    userList.push(user);

    user = {userId:"105", userDisplayName:"Seller1", userImgUrl:"products/z03_male_placeholder.png"};
    userList.push(user);

    
    let item = userList.find((user)=>(user.userId==uid) )
 
    return (item.userImgUrl)

}

function msgUtilUser(userID){
    //userList from test.js
 
   let item = userList.allUsers.find((id)=>(id.userID== userID ) )

  return(item)
}
 
 

function msgUtilProduct(productID){
  //productList from smartFindsClass.js and smartFindsOps.js
 
   let item = productList.allProducts.find((id)=>(id.productID== productID ) )
return(item)
}

