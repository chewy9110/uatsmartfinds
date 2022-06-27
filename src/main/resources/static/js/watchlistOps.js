
let watchList = new WatchListClass();

// start of watchlist
/*
watchList.addWatchList(1, 2, 4, "2022-05-01 08:00:00");
watchList.addWatchList(2, 2, 5, "2022-05-01 08:05:00");
watchList.addWatchList(3, 2, 6, "2022-05-01 08:11:00");
watchList.addWatchList(4, 2, 7, "2022-05-01 08:14:00");
watchList.addWatchList(5, 2, 8, "2022-05-01 08:18:00");
watchList.addWatchList(6, 2, 9, "2022-05-01 08:25:00");
*/
function onloadInitWatchList()
{
//AS    memberPageCheck(); // handle login and navbar display

    // filter watchlist based on login ID and get the user's productlist items to display
/* AS    const products = watchList.getProductList(currLoginID.userID);
    for (let i=0; i<products.length; i++) {
        console.log("onloadInitWatchList() " + products[i].productID);
    }*/
    watchList.displayMyProduct();
    restoreSessionInfo();
    console.log("onloadInitWatchList");
    console.log(currLoginID);
}

function removeWatchItem() {
    watchList.removeWatchList(localStorage.getItem("unwatchedItemId"));
}