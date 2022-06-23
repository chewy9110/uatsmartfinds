class WatchListClass {

    constructor ()
    {
        //Configuration of dev and prod URL - usually fetch a JSON file at API in the dev or prod environment
        this.domainURL_Dev = "http://localhost:8080/";
        this.domainURL_Prod = "https://.herokuapp.com/";

        this.addWatchListAPI = this.domainURL_Prod + "watchlist/add";
        this.allWatchListAPI = this.domainURL_Prod + "watchlist/all";

        this.allWatchList = [];
        this.watchListProduct = [];
    }
    //method to add the watchlist into the database
    addWatchList(watchlistid, userid, productid, dateUpdated, deleteStatus)
    {
        const watchItem =
        {
            watchlistid : watchlistid,
            userid : userid,
            productid : productid,
            dateUpdated : dateUpdated,
            deleteStatus: deleteStatus
        }
        this.allWatchList.push(watchItem);
    }

    getProductList(userid)
    {
      // get the list of watchlist items based on loginid
      let watchListTemp = this.allWatchList.filter(currlist => (
        currlist.userid == userid
      ));

      // from this watch list, get the list of product items based on product id
      //let productsByID = [];
      for (let i=0; i< watchListTemp.length; i++) {
        const pos = productList.allProducts.findIndex(curr => 
          curr.productid === watchListTemp[i].productid
        );
        console.log("getProductList pos" + pos);
        if (pos != null) {
          // watchlist item found in allproducts
          //productsByID.push(productList.allProducts[pos]);
          this.watchListProduct.push(productList.allProducts[pos]);
        }
      }
      //return productsByID;
    } //end of getProductList
  
    displayMyProduct()
    {
      let watchlistClass = this;
      watchlistClass.watchListProduct = [];

                    fetch('http://127.0.0.1:8080/watchlist/all')
                                .then((resp) => resp.json())    //default is get HTTP method
                                .then(function(data) {
                                    console.log("2. receive data")
                                    console.log(data);
                                    data.forEach(function (watchlist, index)
                                    {
                                        const watchlistObj = {
                                            watchlistid: watchlist.watchlistid,
                                            userid: watchlist.userid,
                                            productid: watchlist.productid,
                                            dateUpdated: watchlist.dateUpdated,
                                            deleteStatus: watchlist.deleteStatus,
                                       };
                                        watchlistClass.watchListProduct.push(watchlistObj);
                                  });

                                  watchlistClass.renderProductPage();

                                })
                                .catch(function(error) {
                                    console.log(error);
                                });
    } // end of displayMyProduct

    //based on the item fetched from the displayItem() method and show the products product page
    renderProductPage()
    {
      // shows all the products that i am trying to transact
      // console.log(this.allProducts);
      let showProductItem = "";
      let moreBtnId = "";
      let unwatchBtnId = "";
      let count = 1;

      let products = this.watchListProduct;

      if (products.length == 0)
      {
      showProductItem += `
      <div class="container fluid" align="center">
      <h4>Save your favorite listings</h4>
      </div>
      `
      }
      else
      {
        for (let i=0; i<products.length; i++)
        {
          moreBtnId = "item" + i;
          unwatchBtnId = "UnWatchItem" + i;
  
          let item = products[i];
          showProductItem += `
            <div class="${ "item" + count.toString() }">
              <div class="card h-90 shadow p-3 mb-5 bg-body rounded">
                <img src="${item.imageURL1}" class="card-img-top" alt="item1" >
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <div class="container-star d-flex flex-row-reverse">
                    <i class="bi1 bi-star-fill"></i>
                    <i class="bi2 bi-star-fill"></i>
                    <i class="bi3 bi-star-fill"></i>
                  </div>
                  <small class="text-muted price">$${item.price}</small>
                  <p class="card-text overflow-scroll" style="max-height: 3rem;">${item.description}</p>
                  <div class="d-flex flex-row justify-content-between">
                    <button type="button" id="${moreBtnId}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">See full item details</button>
                    <a href="msgDetail.html" class="btn">Chat now<img src="products/message.svg"></a>
                    <button type="button" id="${unwatchBtnId}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#unwatchModal" >
                    <img src="./products/remove_red_eye_black_24dp.svg" />
                    </button>
                  </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${dateUpdated}</small>
                </div>
              </div>
            </div>
            `;
          count++;
          if (count > 6)
            break; // manage page counting limit items to 6
        } // end of for loop
      } // end of if else

      document.querySelector("#rowproductList").innerHTML = showProductItem;
      console.log(showProductItem);

      for (let i=0; i<products.length; i++) {
        moreBtnId = "item" + i;
        unwatchBtnId = "UnWatchItem" + i;
  
        let item = products[i];
        document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item)  });
        document.getElementById(unwatchBtnId).addEventListener("click", function(){ removeProduct(item)  });
      } // end of for loop
    } //end of renderProductPage

    removeWatchList(itemid)
    {
      //remove from watch list and display watchlist again
      let removeItem = this.allWatchList.findIndex(item => {
        return item.productid == itemid;
      });

      this.allWatchList.splice(removeItem, 1);
      this.watchListProduct.splice(removeItem, 1);
      console.log(this.watchListProduct);
      this.displayMyProduct();
    } // end of removeWatchList
  } // end of WatchListClass

function displayItemDetail(item) {
  //handle each 'More' button to show the product details
  document.querySelector("#itemTitle").innerHTML = item.title;
  document.querySelector("#itemImage").src = item.imageURL1;
  document.querySelector("#itemDescription").innerHTML = item.description;
  document.querySelector("#itemPrice").innerHTML = "$" + item.price;
  }

function removeProduct(item) {
  localStorage.setItem("unwatchedItemId", item.productid);
  document.querySelector("#itemTitle1").innerHTML = "Do you want to remove " + item.title + "?";
  document.querySelector("#itemTitle1").style.color="red";
}