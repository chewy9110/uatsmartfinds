const uploadImages = []; // array to hold all the pictures to be uploaded
let memberProducts = []; // array to hold subset of productList, to be used by member.html only

function preview() {
 
    const filename = document.getElementById('newItemImageUrl').value;
    switch (uploadImages.length)
    {
    case 0:
        frame0.src = URL.createObjectURL(event.target.files[0]);
        document.getElementById('btnRemove0').style.display = "block";
        break;
    case 1:
        frame1.src = URL.createObjectURL(event.target.files[0]);
        document.getElementById('btnRemove1').style.display = "block";
        break;
    case 2:
        frame2.src = URL.createObjectURL(event.target.files[0]);
        document.getElementById('btnRemove2').style.display = "block";
        break;
    }
    uploadImages.push(filename);
    console.log("filename " + filename);
    //console.log("filename2 " + document.getElementById('formFile').files[0].name);
    document.getElementById('newItemImageUrl').files[0].path // this will return filename
    document.getElementById('newItemImageUrl').value = null;
}

function clearImage(position) {
    document.getElementById('newItemImageUrl').value = null;

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
    const description = document.getElementById("newItemDescription").value;
    const price = document.getElementById("newItemPrice").value;
    const imageUrl1 = uploadImages[0];
    const imageUrl2 = uploadImages[1];
    const imageUrl3 = uploadImages[2];

    productList.addProduct(title, description, imageUrl1, imageUrl2, imageUrl3, price, new Date().toString());

}

function editItem() {
    alert("editItem");
}

function markItemSold(idx, productItem) {
    // console.log("position " + idx + " " + productItem.description);

    // document.getElementById("btn-edit" + idx).setAttribute("class", "btn btn-primary disabled");
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
    const pos = memberProducts.findIndex(curr => 
        curr == item
    );
    memberProducts.splice(pos, 1);
    console.log(pos);
    // memberProducts = tmpArr;
    productList.displayYTProduct(memberProducts);   
}

function test() {
    document.getElementById("btn-sold0").style.display = "none";
    document.getElementById("soldIcon0").style.display = "block";
}

function onloadInitMember() {
    memberPageCheck(); // handle login and navbar display

    // productList.sortByOwnerID();
    memberProducts = productList.filterByOwnerID(currLoginID.userID);
    // const products = productList.filterExcludeOwnerID(currLoginID.userID);
    //productList.displayMyProduct(products); // display filtered list, Old method
    productList.displayYTProduct(memberProducts); // display filtered list, using YT's design

    // testing watchlist filter to get productlist items
    // const watchlist = watchList.getProductList(currLoginID.userID);
    // for (let i=0; i<watchlist.length; i++) {
    //     console.log("testing" + watchlist[i].productID);
    // }
    // productList.displayMyProduct(watchlist);
}

  currLoginIDx  =  loginUserInfo()
