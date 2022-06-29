class WatchListClass {

    constructor ()
    {
        //Configuration of dev and prod URL - usually fetch a JSON file at API in the dev or prod environment
        //this.addWatchListAPI = activeUrl + "watchlist/add";
       // this.allWatchListAPI = activeUrl + "watchlist/all";

        this.allWatchList = [];
        this.watchListProduct = [];
    }
    //method to add the watchlist into the database
    addWatchList(userid, productid, dateUpdated)
    {
        let wlist = this;
        const formData = new FormData();
        formData.append('userid', userid);
        formData.append('productid', productid);
        formData.append('dateUpdated', dateUpdated);

        fetch(activeURL + "watch/add", {
            method: 'POST',
            body: formData
            })
            .then(function(response) {
                console.log(response.status); // Will show you the status
                if (response.ok) {
                    console.log("Successfully Added Product!");
                }
                else {
                    console.log("Fail to upload file!");
                }
            })
            .catch((error) => {
            console.log('Error:', error);
        });
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
  
    displayMyProduct(currid)
    {
      let watchlistClass = this;
      watchlistClass.watchListProduct = [];

                    fetch(activeURL + 'watch/getbyuser/' + currid)
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
                                            title: watchlist.title,
                                            description: watchlist.description,
                                            url1: watchlist.url1,
                                            url2: watchlist.url2,
                                            url3: watchlist.url3,
                                            price: watchlist.price,
                                            pdateUpdated: watchlist.pdateUpdated,
                                            ownerId: watchlist.ownerId
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
      let btnReplyId = "";

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

          btnReplyId = "btnReplyId" + i;

          let item = products[i];
          showProductItem += `
            <div class="${ "item" + count.toString() }">
              <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                <img src="${item.url1}" class="card-img-top" alt="item1" >
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <div class="container-star d-flex flex-row-reverse">
                    <i class="bi1 bi-star-fill"></i>
                    <i class="bi2 bi-star-fill"></i>
                    <i class="bi3 bi-star-fill"></i>
                  </div>
                  <small class="text-muted price">${formatPrice(item.price)}</small>
               <!--   <p class="card-text overflow-scroll" style="max-height: 3rem;">${item.description}</p> -->
                 <p class="mt-3 p-3 border border-2 card-text overflow-scroll">${item.description}</p>

               <div class="d-flex  justify-content-between g-2">
                    <button type="button" id="${moreBtnId}" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">See full item details</button>

                 <!--   <a href="msgDetail.html" class="btn">Chat now<img src="products/message.svg"></a> -->

                     <a id="${btnReplyId}" href="msgDetail?FromUid=${item.userid}&ToUid=${item.ownerId}&FromProductId=${item.productid}"
                        class="btn btn-primary"><img src="products/message_white.svg" >&nbspChat now</a>


                    <button type="button" id="${unwatchBtnId}" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#unwatchModal" >
                    <img src="./products/remove_red_eye_black_24dp.svg" />
                    </button>
                </div>
               </div>
                <div class="card-footer">
                    <small class="text-muted">${whenUpdated(item.pdateUpdated)}</small>
                </div>
              </div>
            </div>
            `;
          count++; // allow more than 6 products to be displayed
//          if (count > 6)
//            break; // manage page counting limit items to 6
        } // end of for loop
      } // end of if else

      document.querySelector("#rowproductList").innerHTML = showProductItem;
//      console.log("***************************" + showProductItem);

      for (let i=0; i<products.length; i++) {
        moreBtnId = "item" + i;
        unwatchBtnId = "UnWatchItem" + i;
  
        let item = products[i];
        document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item)  });
        document.getElementById(unwatchBtnId).addEventListener("click", function(){ removeWatchItem(item)  });
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

    setDeleteStatus(item) {
        const formData = new FormData();
        formData.append('deleteStatus', true);
        fetch(activeURL + "watch/delete/" + item.watchlistid, {
            method: 'PUT',
            body: formData
        })
        .then(function(response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                console.log("Successfully deleted item!");
            }
            else {
                console.log("Fail to upload file!");
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }
  } // end of WatchListClass

function displayItemDetail(item) {
  //handle each 'More' button to show the product details
  document.querySelector("#itemTitle").innerHTML = item.title;
  document.querySelector("#itemImage").src = item.url1;
  document.querySelector("#itemDescription").innerHTML = item.description;
  document.querySelector("#itemPrice").innerHTML = "$" + item.price;
  }

function removeWatchItem(item) {
//  localStorage.setItem("unwatchedItemId", item.productid);
  document.querySelector("#itemTitle1").innerHTML = "This will remove " + item.title + ".";
  document.querySelector("#itemTitle1").style.color="red";
  watchList.setDeleteStatus(item);
  document.location.reload(true);
}

function watchlistAdd(item) {
    const dateUpdated = getTimeStamp();
    const wItem = new WatchListClass();

//    console.log(dateUpdated);
//    console.log(currLoginID.userId);
//    console.log(item.productid);
    wItem.addWatchList(currLoginID.userId, item.productid, dateUpdated);
}