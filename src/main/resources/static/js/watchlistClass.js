class WatchListClass {

    constructor ()
    {
        //Configuration of dev and prod URL - usually fetch a JSON file at API in the dev or prod environment
        this.domainURL_Dev = "http://localhost:8090/";
        this.domainURL_Prod = "https://deswebproject.herokuapp.com/";

        this.addItemAPI = this.domainURL_Prod + "watchlist/add";
        this.allItemAPI = this.domainURL_Prod + "watchlist/all";

        this.allWatchList = [];
        this.watchListProduct = [];
    }
  
    addWatchList(watchListID, userID, productID, dateUpdated) {
        const watchItem = {
            watchListID : watchListID,
            userID : userID,
            productID : productID,
            dateUpdated : dateUpdated
        }
  
        this.allWatchList.push(watchItem);
    }
  
    getProductList(userID) {
      // get the list of watchlist items based on loginid
      let watchListTemp = this.allWatchList.filter(currlist => (
        currlist.userID == userID
      ));

      // from this watch list, get the list of product items based on product id
      //let productsByID = [];
      for (let i=0; i< watchListTemp.length; i++) {
        const pos = productList.allProducts.findIndex(curr => 
          curr.productID === watchListTemp[i].productID
        );
        console.log("getProductList pos" + pos);
        if (pos != null) {
          // watchlist item found in allproducts
          //productsByID.push(productList.allProducts[pos]);
          this.watchListProduct.push(productList.allProducts[pos]);
        }
      }
      //return productsByID;
    }
  
    displayMyProduct() {
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
      else {
        for (let i=0; i<products.length; i++) {
  
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
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            `;
          count++;
          if (count > 6)
            break; // manage page counting limit items to 6
        } // end of for loop
      } // if else
  
      document.querySelector("#rowproductList").innerHTML = showProductItem;
      console.log(showProductItem);
  
      for (let i=0; i<products.length; i++) {
        moreBtnId = "item" + i;
        unwatchBtnId = "UnWatchItem" + i;
  
        let item = products[i];
        document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item)  });
        document.getElementById(unwatchBtnId).addEventListener("click", function(){ removeProduct(item)  });
      }
    } // end of displayWatchList

    removeWatchList(itemId) {
      //remove from watch list and display watchlist again
      let removeItem = this.allWatchList.findIndex(item => {
        return item.productID == itemId;
      });

      this.allWatchList.splice(removeItem, 1);
      this.watchListProduct.splice(removeItem, 1);
      console.log(this.watchListProduct);
      this.displayMyProduct();
    }
  } // end of WatchListClass

function displayItemDetail(item) {
  //handle each 'More' button to show the prodcut details
  document.querySelector("#itemTitle").innerHTML = item.title;
  document.querySelector("#itemImage").src = item.imageURL1;
  document.querySelector("#itemDescription").innerHTML = item.description;
  document.querySelector("#itemPrice").innerHTML = "$" + item.price;
  }

function removeProduct(item) {
  localStorage.setItem("unwatchedItemId", item.productID);
  document.querySelector("#itemTitle1").innerHTML = "Do you want to remove " + item.title + "?";
  document.querySelector("#itemTitle1").style.color="red";
}