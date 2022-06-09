
let watchList = new WatchListClass();

// start of watchlist
watchList.addWatchList(1, 101, 102010, "2022-05-01 08:00:00");
watchList.addWatchList(2, 101, 102011, "2022-05-01 08:05:00");
watchList.addWatchList(3, 101, 102012, "2022-05-01 08:11:00");
watchList.addWatchList(4, 101, 102013, "2022-05-01 08:14:00");
watchList.addWatchList(5, 101, 102014, "2022-05-01 08:18:00");
watchList.addWatchList(6, 101, 102015, "2022-05-01 08:25:00");

function onloadInitWatchList()
{
    memberPageCheck(); // handle login and navbar display

    // filter watchlist based on login ID and get the user's productlist items to display
    const products = watchList.getProductList(currLoginID.userID);
    for (let i=0; i<products.length; i++) {
        console.log("onloadInitWatchList() " + products[i].productID);
    }
    watchList.displayMyProduct();
}

function removeWatchItem() {
    watchList.removeWatchList(localStorage.getItem("unwatchedItemId"));
}