const productList = new ProductsController();
const uploadImages = []; // array to hold all the pictures to be uploaded
let memberProducts = []; // array to hold subset of productList, to be used by member.html only
let storeImage = [];
let currLoginIDx;
let curritem = []; // temp variable to hold edited product item, to pass to backend functions for item.id
//let storeImage = []; // for multiple image upload

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    let btnFunction = document.getElementById('btnSellUpdate').innerHTML;
//    if (btnFunction=="Update") {
        // file0 can be 0
        // url can be not updated
//    }
//    else {
        // file0 must be at least 1
        // url must be at least 1
//    }
    const file = document.getElementById('file0');
    const newItemTitleInput = document.querySelector('#newItemTitleInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemPrice = document.querySelector('#newItemPrice');

    let resultMessage = document.getElementById("addResult");
    resultMessage.style.display = "none";

    // Get the values of the inputs - variable names to be same as MySQL columns
//    const imageUrl1 = file.value.replace("C:\\fakepath\\", "");

    if (file.files.length == 0 && btnFunction=="Sell") {
    // if btnFunction=Sell, must have at least 1 picture
        resultMessage.innerHTML = "Choose an image for upload.";
        resultMessage.style.display = "block";
        return;
    }
    let imageUrl = [ "", "", ""];
<<<<<<< HEAD
    if (btnFunction == "Update") {
        console.log("frame0 " + frame0.src);
        console.log("frame1 " + frame1.src);
        console.log("frame2 " + frame2.src);
        imageUrl[0]=frame0.src.replace( (activeURL + "products/"), "");
        imageUrl[1]=frame1.src.replace( (activeURL + "products/"), "");;
        imageUrl[2]=frame2.src.replace( (activeURL + "products/"), "");;
        if (imageUrl[0] == "placeholder.gif") // remove placeholder image before writing to DB
            imageUrl[0] = "";
        if (imageUrl[1] == "placeholder.gif")
            imageUrl[1] = "";
        if (imageUrl[2] == "placeholder.gif")
            imageUrl[2] = "";
    }

    console.log("Form Event");
    console.log("[" + imageUrl[0] + "]");
    console.log("[" + imageUrl[1] + "]");
    console.log("[" + imageUrl[2] + "]");
    console.log("Form Event");

=======
//    console.log("getting url names");
>>>>>>> aea429b6d2e779480dcf72e92c415adeec902463
    for (let i=0; i<file.files.length; i++) {
//        console.log("filename " + file.files[i].name);
//        imageUrl[i] = file.files[i].name.replace("C:\\fakepath\\", "");
//        console.log(imageUrl[i]);
        imageUrl[i] = file.files[i].name;
    }
    /*
        Do the Validation code here
    */

    const title = newItemTitleInput.value;
    const description = newItemDescription.value;
    const price = newItemPrice.value;
    if (title == "") {
//        alert("Enter title information.");
        resultMessage.innerHTML = "Enter title information.";
        resultMessage.style.display = "block";
        return;
    }

    if (description == "") {
//        alert("Enter a description.");
        resultMessage.innerHTML = "Enter a description.";
        resultMessage.style.display = "block";
        return;
    }

    if (price == "") {
//        alert("Enter a price value.");
        resultMessage.innerHTML = "Enter a price value.";
        resultMessage.style.display = "block";
        return;
    }
    else {
        if (isNaN(Number(price))) {
            resultMessage.innerHTML = "Invalid price value.";
            resultMessage.style.display = "block";
            return;
        }
    }
    // Clear the form
    file.value = '';
    newItemTitleInput.value = '';
    newItemDescription.value = '';
    newItemPrice.value = '';


    const dateUpdated = getTimeStamp(); //"2022/06/21 10:53:54"; // hardcode for testing
//    console.log(dateUpdated);

//    console.log("*!*!*!*!*!*!" + currLoginID.userId);
    // Add the task to the task manager
//    productList.addItem(ownerid, title, description, imageUrl1, imageUrl2, imageUrl3, defaultPic, price, dateUpdated, storeImage);
    // need to hardcode ownerid until we can retrieve this from the login id
    // defaultPic hardcode to 1, until we can manage the selection of picture as a defaultPic better
//    productList.addItem(3, title, description, imageUrl[0], imageUrl[1], imageUrl[2], 1, price, dateUpdated, storeImage); for multiple file upload
    // fetch returns a promise, return result is undefined
    if (btnFunction=="Sell") {
        productList.addItem(currLoginID.userId, title, description, imageUrl[0], imageUrl[1], imageUrl[2], 1, price, dateUpdated, storeImage);
    }
    else {
        productList.updateItem(curritem, title, description, imageUrl[0], imageUrl[1], imageUrl[2], price, storeImage);
    }
    document.location.reload(true);
});



// select file input
const input = document.getElementById('file0');
input.addEventListener('change', () => {
    for (let i=0; i<input.files.length; i++)
        storeImage[i] = input.files[i];
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
//        console.log("length" + event.target.files.length);
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

/* this function is deprecated, function provided in productController.js - productController.additem() */
//function addProductItem() {
//    if (uploadImages.length == 0)
//    {
//        alert("Please add some photos of the item to be sold.");
//        return;
//    }
//    const title = document.getElementById("newItemTitleInput").value;
//    if (title == "")
//        alert("Enter title information.");
//
//    const description = document.getElementById("newItemDescription").value;
//    if (description == "")
//        alert("Enter a description.");
//
//    const price = document.getElementById("newItemPrice").value;
//    if (price = "")
//        alert("Enter a price value.");
//
//    const imageUrl1 = uploadImages[0];
//    const imageUrl2 = uploadImages[1];
//    const imageUrl3 = uploadImages[2];
//
//    productList.addProduct(title, description, imageUrl1, imageUrl2, imageUrl3, price, new Date().toString());
//}

function editItem(idx, item) {
//     console.log("editItem..............");
    // todo edit function
//    console.log("edititem [" + item.imageUrl1 +"]");
//    console.log("edititem [" + item.imageUrl2 +"]");
//    console.log("edititem [" + item.imageUrl3 +"]");

    if (item.imageUrl1 == "") {
//        console.log("img1 blank");
        document.getElementById("frame0").src = "products/placeholder.gif";
    }
    else {
//        console.log("img1 not blank [" + item.imageUrl1 + "]");
        document.getElementById("frame0").src = item.imageUrl1;
    }
    if (item.imageUrl2 == "") {
//        console.log("img2 blank");
        document.getElementById("frame1").src = "products/placeholder.gif"
    }
    else {
//        console.log("img2 not blank [" + item.imageUrl2 + "]");
        document.getElementById("frame1").src = item.imageUrl2;
    }
    if (item.imageUrl3 == "") {
//        console.log("img3 blank");
        document.getElementById("frame2").src = "products/placeholder.gif"
    }
    else {
//        console.log("img3 not blank [" + item.imageUrl3 + "]");
        document.getElementById("frame2").src = item.imageUrl3;
    }
    document.getElementById("newItemTitleInput").value = item.title;
    document.getElementById("newItemDescription").value = item.description;
    document.getElementById("newItemPrice").value = item.price;

    document.getElementById("btnSellUpdate").textContent = "Update";
    curritem = item; // save item to curritem for api call
    location.href = "#newProductForm";

//    console.log(item.productid);
//    document.getElementById("btnSellUpdate").addEventListener("click", function(){ updateItem(index, item.productid) });
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
//    console.log("position " + idx + " " + productItem.productid);
//    console.log("inside markItemSold()" + idx);
    document.getElementById("btn-edit" + idx).style.display = "none";
    document.getElementById("btn-sold" + idx).style.display = "none";
    document.getElementById("soldIcon" + idx).style.display = "block";

    productList.setItemSold(productItem);
}

function deleteItem(idx, item) {
//    console.log(item.description);
    document.getElementById("carditem" + idx).style.display = "none"; // hide card item until page is refresh

    productList.setItemDeleted(item);
}

function test() {
    document.getElementById("btn-sold0").style.display = "none";
    document.getElementById("soldIcon0").style.display = "block";
}

function onloadInitMember() {
    //currLoginIDx  =  loginUserInfo();
    productList.getAllProduct(currLoginID.userId);
    document.getElementById("addResult").style.display = "none"; // hide result message area
}

function checkPrice() {
    let price = Number(document.getElementById('newItemPrice').value);
    let msg = document.getElementById('priceMessage');
    msg.style.display = "none";

    console.log(price);
    if( !isNaN(price) ) {
        msg.innerHTML = "";
        msg.style.display = "none";
    }
    else {
        msg.innerHTML = "not number";
        msg.style.display = "block";
    }
}


