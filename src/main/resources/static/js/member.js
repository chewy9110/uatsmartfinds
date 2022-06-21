const productList = new ProductsController();
const uploadImages = []; // array to hold all the pictures to be uploaded
let memberProducts = []; // array to hold subset of productList, to be used by member.html only
let storeImage = "";
let currLoginIDx;
//let storeImage = []; // for multiple image upload

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const file = document.getElementById('file0');
    const newItemTitleInput = document.querySelector('#newItemTitleInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemPrice = document.querySelector('#newItemPrice');

/* for multiple file upload
    const imageUrl = [];
    for (let i=0; i<file.files.length; i++) {
        console.log(i + file.files.item(i).name);
        imageUrl[i] = file.files.item(i).name;
    }
*/

    // Get the values of the inputs - variable names to be same as MySQL columns
    const imageUrl = file.value.replace("C:\\fakepath\\", "");

//    const imageUrl2 = frame1.src.replace("C:\\fakepath\\", "");
//    const imageUrl3 = frame2.src.replace("C:\\fakepath\\", "");
    /*
        Do the Validation code here
    */
    const title = newItemTitleInput.value;
    const description = newItemDescription.value;
    const price = newItemPrice.value;
    if (title == "") {
        alert("Enter title information.");
        return;
    }

    if (description == "") {
        alert("Enter a description.");
        return;
    }

    if (price == "") {
        alert("Enter a price value.");
        return;
    }
    // Clear the form
    file.value = '';
    newItemTitleInput.value = '';
    newItemDescription.value = '';
    newItemPrice.value = '';


    const dateUpdated = getTimeStamp(); //"2022/06/21 10:53:54"; // hardcode for testing
//    console.log(dateUpdated);

    console.log("*!*!*!*!*!*!" + currLoginID.userId);
    // Add the task to the task manager
//    productList.addItem(ownerid, title, description, imageUrl1, imageUrl2, imageUrl3, defaultPic, price, dateUpdated, storeImage);
    // need to hardcode ownerid until we can retrieve this from the login id
    // defaultPic hardcode to 1, until we can manage the selection of picture as a defaultPic better
//    productList.addItem(3, title, description, imageUrl[0], imageUrl[1], imageUrl[2], 1, price, dateUpdated, storeImage); for multiple file upload
    if (productList.addItem(currLoginID.userId, title, description, imageUrl, "", "", 1, price, dateUpdated, storeImage) == true) {
        document.location.reload(true);
    }
});

function getTimeStamp() {
// format time stamp in yyyy/mm/dd hh:mm:ss format for MySQL input
    const today = new Date();
    return (today.getFullYear() + "/" +
    String(today.getMonth() + 1).padStart(2,'0') + "/" +
    String(today.getDate()).padStart(2,'0') + " " +
    String(today.getHours()).padStart(2,'0') + ":" +
    String(today.getMinutes()).padStart(2,'0') + ":" +
    String(today.getSeconds()).padStart(2,'0')
    );
}

// select file input
const input1 = document.getElementById('file0');
input1.addEventListener('change', () => {
//    console.log("imageurl1 on change")

/* for multiple file upload
    if (input1.files.length > 3) {
        input1.value = null;
        return;
    }
*/
    storeImage = input1.files[0];
});

function preview(pos) {
    console.log(pos);
    frame0.src = "./products/placeholder.gif"
    frame1.src = "./products/placeholder.gif"
    frame2.src = "./products/placeholder.gif"
//    const filename = document.getElementById('file'+pos).value;
//    console.log("*****" + filename);
    if (event.target.files.length > 3) {
        alert("Maximum 3 files only.")
        return;
    }
        console.log("length" + event.target.files.length);
        for (let i=0; i<event.target.files.length; i++) {
            const frame = document.getElementById('frame' + i);
            frame.src = URL.createObjectURL(event.target.files[i]);
//            document.getElementById('btnRemove' + i).style.display = "block";
        }
}

function clearImage(position) {
    document.getElementById('').value = null;

    if (position == 0) {
        frame0.src = frame1.src;
        frame1.src = frame2.src;
        uploadImages.shift();
    } else if (position == 1) {
        frame1.src = frame2.src;
        uploadImages[1] = uploadImages[2];
        uploadImages.pop();
    }
    else if (position == 2) {
        uploadImages.pop();
    }
    switch (uploadImages.length)
    {
        case 0:
            frame0.src = "./products/placeholder.gif"
            frame1.src = "./products/placeholder.gif"
            frame2.src = "./products/placeholder.gif"
            document.getElementById('btnRemove0').style.display = "none";
            document.getElementById('btnRemove1').style.display = "none";
            document.getElementById('btnRemove2').style.display = "none";
            break;
        case 1:
            frame1.src = "./products/placeholder.gif"
            frame2.src = "./products/placeholder.gif"
            document.getElementById('btnRemove1').style.display = "none";
            document.getElementById('btnRemove2').style.display = "none";
            break;
        case 2:
            frame2.src = "./products/placeholder.gif"
            document.getElementById('btnRemove2').style.display = "none";
            break;
    }
    document.getElementById("frame0").style.border = "";
    document.getElementById("frame1").style.border = "";
    document.getElementById("frame2").style.border = "";    
}

function setDefaultImage(position) {
    return; // temporary not using this function, don't delete yet
    if (position == 0 && uploadImages[0] != "") {
        if (document.getElementById("frame0").style.border == "") {// toggle selection on/off
            document.getElementById("frame0").style.border = "5px solid #555";
        }
        else {
            document.getElementById("frame0").style.border = "";
        }
        document.getElementById("frame1").style.border = "";
        document.getElementById("frame2").style.border = "";    
    } else if (position == 1 && uploadImages[1] != "") {
        document.getElementById("frame0").style.border = "";

        if (document.getElementById("frame1").style.border == "") {
            document.getElementById("frame1").style.border = "5px solid #555";
        }
        else {
            document.getElementById("frame1").style.border = "";
        }

        document.getElementById("frame2").style.border = "";    
    } else if (position == 2 && uploadImages[2] != "") {
        document.getElementById("frame0").style.border = "";
        document.getElementById("frame1").style.border = "";

        if (document.getElementById("frame2").style.border == "") {
            document.getElementById("frame2").style.border = "5px solid #555";    
        }
        else {
            document.getElementById("frame2").style.border = "";
        }
    }
}

function addProductItem() {
    if (uploadImages.length == 0)
    {
        alert("Please add some photos of the item to be sold.");
        return;
    }
    const title = document.getElementById("newItemTitleInput").value;
    if (title == "")
        alert("Enter title information.");

    const description = document.getElementById("newItemDescription").value;
    if (description == "")
        alert("Enter a description.");

    const price = document.getElementById("newItemPrice").value;
    if (price = "")
        alert("Enter a price value.");

    const imageUrl1 = uploadImages[0];
    const imageUrl2 = uploadImages[1];
    const imageUrl3 = uploadImages[2];

    productList.addProduct(title, description, imageUrl1, imageUrl2, imageUrl3, price, new Date().toString());
}

function editItem(idx, item) {
    // console.log(item.description);
    // todo edit function
    document.getElementById("frame0").src = item.imageUrl1;
    document.getElementById("frame1").src = item.imageUrl2;
    document.getElementById("frame2").src = item.imageUrl3;

    document.getElementById("newItemTitleInput").value = item.title;
    document.getElementById("newItemDescription").value = item.description;
    document.getElementById("newItemPrice").value = item.price;

    document.getElementById("btnSellUpdate").textContent = "Update";
    console.log(item.productid);
    document.getElementById("btnSellUpdate").addEventListener("click", function(){ updateItem(index, item.productid) });
}

function clearItem() {
    document.getElementById("frame0").src = "./products/placeholder.gif";
    document.getElementById("frame1").src = "./products/placeholder.gif";
    document.getElementById("frame2").src = "./products/placeholder.gif";

    document.getElementById("newItemTitleInput").value = "";
    document.getElementById("newItemDescription").value = "";
    document.getElementById("newItemPrice").value = "";

    document.getElementById("btnSellUpdate").textContent = "Sell";
    console.log(item.productid);
    document.getElementById("btnSellUpdate").addEventListener("click", function(){ addProductItem() });
}

function markItemSold(idx, productItem) {
    // console.log("position " + idx + " " + productItem.description);

    // document.getElementById("btn-edit" + idx).setAttribute("class", "btn btn-primary disabled");
    console.log("inside markItemSold()" + idx);
    document.getElementById("btn-edit" + idx).style.display = "none";
    document.getElementById("btn-sold" + idx).style.display = "none";
    document.getElementById("soldIcon" + idx).style.display = "block";

    productItem.markItemSold = true;

    // const answer = prompt('You will not be able to edit the item anymore. Press "Y/y" to proceed');
    // if (answer != "Y" && answer != "y") {
    //     return;
    // }
    //alert("sold");
}

function deleteItem(item) {
    // alert("deleteItems");
    console.log(item.description);
    // todo delete function to mark DB as deleteStatus = true

//    const pos = memberProducts.findIndex(curr =>
//        curr == item
//    );
//    memberProducts.splice(pos, 1);
//    console.log(pos);
//    // memberProducts = tmpArr;
//    productList.displayYTProduct(memberProducts);
}

function test() {
    document.getElementById("btn-sold0").style.display = "none";
    document.getElementById("soldIcon0").style.display = "block";
}

function onloadInitMember() {
//    memberPageCheck(); // handle login and navbar display

    // productList.sortByOwnerID();
//    memberProducts = productList.filterByOwnerID(currLoginID.userID);
    // const products = productList.filterExcludeOwnerID(currLoginID.userID);
    //productList.displayMyProduct(products); // display filtered list, Old method
    currLoginIDx  =  loginUserInfo();
    getLoginSessionInfo(); // get login info from session storage
    console.log("inside onload " + currLoginID.userId);
    productList.getAllProduct();
//    if (  == true) {
    //    productList.displayYTProduct(); // display filtered list, using YT's design
//    }

    // testing watchlist filter to get productlist items
    // const watchlist = watchList.getProductList(currLoginID.userID);
    // for (let i=0; i<watchlist.length; i++) {
    //     console.log("testing" + watchlist[i].productID);
    // }
    // productList.displayMyProduct(watchlist);
}


