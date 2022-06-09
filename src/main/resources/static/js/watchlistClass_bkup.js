class wlProducts {

    constructor () {
        this.wlallProducts = [];
    }

    addProduct(ownerID, productID, title, description, imageURL1, imageURL2, imageURL3, price, dateUpdated, soldStatus, deleteStatus) {
        const wlproductItem = {
            ownerID : ownerID,
            productID : productID,
            title : title,
            description : description,
            imageURL1 : imageURL1,
            imageURL2 : imageURL2,
            imageURL3 : imageURL3,
            price : price,
            dateUPdated : dateUpdated,
            soldStatus : soldStatus,
            deleteStatus : deleteStatus
        }

        this.wlallProducts.push(wlproductItem);
        //console.log("add product-" + this.allProducts);
        //this.displayMyProduct();
    }

    displayMyProduct() {
      // shows all the products that i am trying to transact
      // console.log(this.allProducts);
      let showProductItem = "";
      let moreBtnId = "";
      let unwatchBtnId = "";
      let count = 1;

      if (this.wlallProducts.length == 0)
      {
      showProductItem += `
      <div class="container fluid" align="center">
        <h2>Nothing to display at the moment.</h2><br>
        <h4>Start selling your items to view them here.</h4>
      </div>
      `
    }
    else {
      for (let i=0; i<this.wlallProducts.length; i++) {

        moreBtnId = "item" + i;
        unwatchBtnId = "item" + i;
        //okBtnId = "item" + i;

        let item = this.wlallProducts[i];
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
                  <a href="msgDetail.html" class="btn">Chat now<img src="images/message.svg"></a>
                  <button type="button" id="${unwatchBtnId}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#unwatchModal" >
                  <img src="./images/remove_red_eye_black_24dp.svg" />
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
      //console.log(showProductItem);

    for (let i=0; i<this.wlallProducts.length; i++) {
      moreBtnId = "item" + i;
      unwatchBtnId = "item" + i;
      //okBtnId = "item" + i;

      let item = this.wlallProducts[i];
      document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item)  });
      //document.getElementById(unwatchBtnId).addEventListener("click", function(){ unwatchMyProduct(item)  });
      document.getElementById(unwatchBtnId).addEventListener("click", function(){ removeProduct(item)  });
      //document.getElementById(okBtnId).addEventListener("click", function(){ removeProduct(item)  });
    }
  }
}
//------------------------------------------
/*unwatchMyProduct() {
  // shows all the products that i am trying to transact
  let unshowProductItem = "";
  let moreBtnId = "";
  let unwatchBtnId = "";
  let okBtnId = "";
  let count = 1;

  if (this.wlallProducts.length == 0)
  {
    for (let i=0; i<this.wlallProducts.length; i++) {

      moreBtnId = "item" + i;
      unwatchBtnId = "item" + i;
      okBtnId = "item" + i;

      let item = this.wlallProducts[i];
      unshowProductItem += `
      <div class="modal fade" class="modal-dialog-scrollable" id="unwatchModal" tabindex="-1" aria-labelledby="unwatchModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="unwatchModalLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <h5 id="itemTitle1" class="card-title"></h5>
          </div>
          <div class="modal-footer">
              <button type="button" id="${okBtnId}" class="btn btn-secondary" data-bs-dismiss="modal" data-bs-target="#unwatchModal">OK</button>
          </div>
        </div>
      </div>
  </div> 
  
        `;
      count++;
      if (count > 6)
        break; // manage page counting limit items to 6
    } // end of for loop
  } // if else
 for (let i=0; i<this.wlallProducts.length; i++) {
    moreBtnId = "item" + i;
    unwatchBtnId = "item" + i;
    okBtnId = "item" + i;

    let item = this.wlallProducts[i];
    document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item)  });
    document.getElementById(unwatchBtnId).addEventListener("click", function(){ unwatchMyProduct(item)  });
    document.getElementById(okBtnId).addEventListener("click", function(){ removeProduct(item)  });
 }*/
//--------------------------
// }
//}

function displayItemDetail(item) {
//handle each 'More' button to show the prodcut details
document.querySelector("#itemTitle").innerHTML = item.title;
document.querySelector("#itemImage").src = item.imageURL1;
document.querySelector("#itemDescription").innerHTML = item.description;
document.querySelector("#itemPrice").innerHTML = "$" + item.price;
document.querySelector("#itemTitle1").innerHTML = "Unwatch " + item.title + "!!!";
document.querySelector("#itemTitle1").style.color="red";
}
//-------------------------
/*function removeProduct(item) {
  for (let i = 0; i<wlallProducts.length; i++) {
   // let item = this.wlallProducts[i];
    if (this.wlallProducts[i] === item) {
      this.wlallProducts.splice(i, 1)
      return
    }
  }
}*/