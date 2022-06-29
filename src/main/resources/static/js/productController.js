const createHTMLList = (index, productid ,ownerid, title, description, imageUrl1, imageUrl2, imageUrl3, defaultPic, price, dateUpdated, soldStatus, deleteStatus, watchListCount, userName, userImgUrl, ownerDisplayName, currLoginID_displayName, currLoginID_userId) =>

`

<div class="item${index}"  id="${ownerid}">
  <div class="card d-flex shadow p-3 mb-5 bg-body rounded h-100" style="height: 800px;">


  <div id="carouselCard${index}" class="carousel slide" data-bs-interval="false" style="margin-top: -50px;">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCard${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCard${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCard${index}"  data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${imageUrl1}" class="card-img-top" alt="item1">
    </div>

    <div class="carousel-item">
      <img src="${imageUrl2}" class="card-img-top" alt="item2">
    </div>

    <div class="carousel-item">
      <img src="${imageUrl3}" class="card-img-top" alt="item3">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselCard${index}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselCard${index}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>


    <div class="card-body">

<div class="container-flex d-flex flex-row">

      <h5 class="card-title">${title}</h5>


        <div class="container-star d-flex flex-row-reverse ms-auto">
          <i class="bi1 bi-star-fill"></i>
          <i class="bi2 bi-star-fill"></i>
          <i class="bi3 bi-star-fill"></i>
          <i class="bi4 bi-star-fill"></i>
          <i class="bi5 bi-star-fill"></i>

        </div>
</div>

        <div  class="container d-flex flex-row my-2">

        <small class="text-muted price" style="margin-left:-20px;">${formatPrice(price)}</small>

            <div id="binoBtnId${index}" type="button" class="bi bi-binoculars-fill ms-auto">&nbsp;${formatWatchlistCount("binoBtnId${index}", watchListCount)}</div>

        </div>


     <!--    <p class="mt-1 card-text overflow-scroll " style="max-height: 15rem; margin-top: 30px;">${description}</p>
-->
          <p class="mt-3 p-3 border border-2 card-text overflow-scroll">${description}</p>


     <!--  <button type="button" id="moreBtnId" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        See full item details
      </button>-->

       <button type="button" id="item${index}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         See full item details
       </button>

      <i class="btn">  <!--  <img src="products/message.svg" >-->

      <!-- send msg box  -->
       <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sendboxmsgmodal"
        data-bs-item = '{"from":"${currLoginID_displayName}", "to":"${ownerDisplayName}", "url":"${imageUrl1}","productId":"${productid}","productTitle":"${title}", "price":"${price}", "inboxUid":"${currLoginID_userId}","fromUid":"${currLoginID_userId}","toUid":"${ownerid}"}'
        data-bs-dismiss="modal">
        <img src="products/message_white.svg" >&nbspChat now</a>

      </i>
      </div>
      <div>

       <div  class="card-footer d-flex flex-row  justify-content-between">
        <div>
          <small class="text-muted">${whenUpdated(dateUpdated)}</small>
        </div>
        <div  id="pOwner${index}" >
          <!-- <span><small class="text-muted">${ownerDisplayName}</small></span><img src="${userImgUrl}" width="30" height="30" class="rounded-circle" alt="img profile"> -->
          <span><small class="text-muted">${userName}</small></span><img src="${userImgUrl}" width="30" height="30" class="rounded-circle" alt=".">
        </div>
      </div>
    </div>
  </div>
</div>
  `;


function formatWatchlistCount(binoBtnId, watchListCount) {

     if (watchListCount > 1) {
      document.getElementById(binoBtnId).style.color = "orange"; // (this.style.color==="orange")?"black":"orange";
     }
     else {
        watchListCount = ""
       //this.style.color = "orange"; // (this.style.color==="orange")?"black":"orange";
     }

    return(watchListCount)
}

function addNumber(binoBtnId,item  ) {
    if(currLoginID.userId == null ) {
        alert("Please log in before adding to watchlist!");
        location.href = "./login";
    } else  {
//        alert("Item added to watchlist!  " + item.title);
      //  watchlistAdd(item);
     //   document.location.reload(true);

     if (item.watchListCount > 1) {
      document.getElementById(binoBtnId).style.color = "orange"; // (this.style.color==="orange")?"black":"orange";
     }
     else {
       watchlistAdd(item);
       document.getElementById(binoBtnId).style.color = "orange"; // (this.style.color==="orange")?"black":"orange";
     }
    }
}

function displayProductDetail(item) {
    document.querySelector("#title").innerHTML = item.title;
    document.querySelector("#description").innerHTML = item.description;
    document.querySelector("#price").innerHTML = formatPrice(item.price);

    document.querySelector("#imageUrl1").src = item.imageUrl1;
    document.querySelector("#imageUrl2").src = item.imageUrl2;
    // document.querySelector("#ImageUrl3").src = item.imageUrl3;
    document.querySelector("#imageUrl3").src = item.imageUrl2;
}

class ProductsController
{
    constructor()
    {
   // this.domainURL_Dev = "http://localhost:8080/";
   // this.domainURL_Prod = "https://smartfinds.herokuapp.com/";

   // this.addItemAPI = this.domainURL_Prod + "product/add";
   // this.allItemAPI = this.domainURL_Prod + "product/pagination?page=0&size=6";

    this.nowActiveURL = activeURL + "product/add"
    this.nowActiveURL2 = activeURL + "product/pagination?page=0&size=6"
        this._products = [];       //create an array to store the details of product items

        //this.currLoginID =  msgUtilLoginId();
    }

    // method to set item as marked as deleted
    setItemDeleted(item) {
        const formData = new FormData();
        formData.append('deleteStatus', true);
        fetch(activeURL + "product/delete/" + item.productid, {
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

    // method to set item as marked as sold
    setItemSold(item) {
        const formData = new FormData();
        formData.append('soldStatus', true);
        fetch(activeURL + "product/sold/" + item.productid, {
            method: 'PUT',
            body: formData
        })
        .then(function(response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                console.log("Successfully sold product!");
            }
            else {
                console.log("Fail to upload file!");
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }
    // method to update product item
    // no changes to pictures or url is possible
    updateItem(item, title, description, imageUrl1, imageUrl2, imageUrl3, price, imageObject) {
        if (imageUrl1 == activeURL + "products/placeholder.gif")
            imageUrl1 = "";
        if (imageUrl2 == activeURL + "products/placeholder.gif")
            imageUrl2 = "";
        if (imageUrl3 == activeURL + "products/placeholder.gif")
            imageUrl3 = "";
        console.log("updateItem[" + imageUrl1 + "][" + imageUrl2 + "][" + imageUrl3 + "]");

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('imageUrl1', imageUrl1);
        formData.append('imageUrl2', imageUrl2);
        formData.append('imageUrl3', imageUrl3);
        formData.append('price', price);
        formData.append('imagefile1',imageObject[0]);
        formData.append('imagefile2',imageObject[1]);
        formData.append('imagefile3',imageObject[2]);

        console.log("updateItem " + item.productid);
        fetch(activeURL + "product/update/" + item.productid, {
            method: 'PUT',
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

    //method to add the items into the array
    addItem(ownerid, title, description, imageUrl1, imageUrl2, imageUrl3, defaultPic, price, dateUpdated, imageObject)
    {
            let productController = this;
            const formData = new FormData();
            formData.append('ownerid', ownerid);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('imageUrl1', imageUrl1);
            formData.append('imageUrl2', imageUrl2);
            formData.append('imageUrl3', imageUrl3);
            formData.append('defaultPic', defaultPic);
            formData.append('price', price);
            formData.append('dateUpdated', dateUpdated);
            formData.append('imagefile1',imageObject[0]);
            formData.append('imagefile2',imageObject[1]);
            formData.append('imagefile3',imageObject[2]);

                // activeURL contains http://url/ defined in domain.js
                fetch(activeURL + "product/add", {
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


    displayProduct(currid)
    {
    console.log("*****" + currid);

        let productController = this;
        productController._products = [];

          msgUtilloginUserInfo()

          //const _remoteHost  =  RemoteHostURL();
          //const _remoteAPI = _remoteHost + "/product/pagination?page=0&size=6"

        const _notOwner = "/pwnotowner/" + currid;
        const _all = "/pwall";

         let API = activeURL + "product";

         if(currid == null) {
                 API = API + _all;
         } else {
            API = API + _notOwner;
         }
        //fetch data from database using the REST API endpoint from Spring Boot
          console.log("******" + API);
         fetch(API)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {


                    const itemObj = {
                        productid: item.product.productid,
                        ownerid: item.product.ownerid,
                        title: item.product.title,
                        description: item.product.description,
                        imageUrl1: item.product.imageUrl1,
                        imageUrl2: item.product.imageUrl2,
                        imageUrl3: item.product.imageUrl3,
                        defaultPic: item.product.defaultPic,
                        price: item.product.price,
                        dateUpdated: item.product.dateUpdated,
                        soldStatus: item.product.soldStatus,
                        deleteStatus: item.product.deleteStatus,
                        userName: item.userName,
                        userImgUrl: item.userImgUrl,
                        watchListCount: item.watchListCount

                   }

                    productController._products.push(itemObj);

              });

              productController.renderProductPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getAllProduct(currid)
    {
        let productController = this;
        productController._products = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        // activeURL contains http://url/ defined in domain.js
       fetch(activeURL + "product/pwuser/" + currid)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
//                console.log(data);
                data.forEach(function (item, index) {

//                if(index <= 5) { // this will limit the number of product displayed to 6
                    const itemObj = {
                        productid: item.product.productid,
                        ownerid: item.product.ownerid,
                        title: item.product.title,
                        description: item.product.description,
                        imageUrl1: item.product.imageUrl1,
                        imageUrl2: item.product.imageUrl2,
                        imageUrl3: item.product.imageUrl3,
                        defaultPic: item.product.defaultPic,
                        price: item.product.price,
                        dateUpdated: item.product.dateUpdated,
                        soldStatus: item.product.soldStatus,
                        deleteStatus: item.product.deleteStatus,
                        userName: item.userName,
                        userImgUrl: item.userImgUrl,
                        watchListCount: item.watchListCount
                   }
//                    console.log(itemObj);
                    productController._products.push(itemObj);
//                   }; //if(index <= 5) {
              });
              productController.displayMemberProduct();
            })
            .catch(function(error) {
                console.log(error);
            });
    }



    renderProductPage()
    {
        this.currLoginID =  msgUtilLoginId();
        let productHTMLList = [];

        for (let i=0; i<this._products.length; i++)
        {
            const item = this._products[i];            //assign the individual item to the variable


            let ownerDisplayName = ""
            const productHTML = createHTMLList(i, item.productid, item.ownerid, item.title, item.description, item.imageUrl1, item.imageUrl2, item.imageUrl3, item.defaultPic, item.price, item.dateUpdated, item.soldStatus, item.deleteStatus, item.watchListCount, item.userName, item.userImgUrl,
                                ownerDisplayName, this.currLoginID.displayName, this.currLoginID.userId);


            productHTMLList.push(productHTML);
        }

        //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('.row').innerHTML = pHTML;

       for (let j=0; j<this._products.length; j++)
                {
                    const item = this._products[j];

                    document.getElementById(`item${j}`).addEventListener("click", function() { displayProductDetail(item);} );

//                (async () => {
//
//                    let  ownerD = await msgUtilUserDisplay(item.ownerid);
//                    let pOwner =  document.getElementById(`pOwner${j}`)
//                     pOwner.innerHTML = `
//                        <span><small class="text-muted">${ownerD.displayName}</small></span><img src="${ownerD.userImgUrl}" width="30" height="30" class="rounded-circle" alt="i">
//                         `
//                 })();


                }

                for(let o = 0; o<this._products.length; o++) {

                      const item = this._products[o];

                    console.log("*******" + item.title);
                    document.getElementById("binoBtnId" + o).addEventListener("click", function () {addNumber("binoBtnId"+o, item  )});

                }



    }

    displayMemberProduct() {
        let showProductItem = "";
        let moreBtnId = "";

        productList._products.forEach ((item, index) => {
            const price = item.price;  // purpose of const price use for formatting to 2 decimal point
            const wUpdated = whenUpdated(item.dateUpdated);
            showProductItem +=
            `
  <div class="item" id="carditem${index}">
      <div class="card d-flex shadow p-3 mb-5 bg-body rounded h-100" style="height: 800px;">
        <div id="carouselCard${index}" class="carousel slide" data-bs-interval="false" style="margin-top: -50px;">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselCard${index}"" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselCard${index}"" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselCard${index}""  data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${item.imageUrl1}" class="card-img-top" alt="item1">
            </div>

            <div class="carousel-item">
              <img src="${item.imageUrl2}" class="card-img-top" alt="item2">
            </div>

            <div class="carousel-item">
              <img src="${item.imageUrl3}" class="card-img-top" alt="item3">
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselCard${index}"" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselCard${index}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>


        <div class="card-body">
          <div class="container-flex d-flex flex-row">

                <h5 class="card-title">${item.title}</h5>
          </div>

          <div  class="container d-flex flex-row">
            <small class="text-muted price" style="margin-left:-20px;">Price: $${price.toFixed(2)}</small>
            <i class="bi bi-binoculars-fill ms-auto"></i>&nbsp;${item.watchListCount}
          </div>
          <p class="card-text overflow-scroll" style="max-height: 5rem; margin-top: 30px;">${item.description}</p>

          <button type="button" id="btn-edit${index}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Edit
          </button>

          <button type="button" id="btn-sold${index}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Mark As Sold!</button><img src="./products/sold.svg" id="soldIcon${index}" />
          <button type="button" id="btn-del${index}" + index class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
          </button>

        </div>
        <div>
          <div  class="card-footer d-flex flex-row  justify-content-between">
            <div>
              <small class="text-muted">Last updated ${wUpdated}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
          `
      });

      document.querySelector("#productList").innerHTML =  showProductItem;

//        console.log(showProductItem);
        // setup edititem button
        productList._products.forEach ((item, index) => {
            moreBtnId = "btn-edit" + index;
            if (item.soldStatus==true) {
                // if item is sold, don't set click event for edit button & hide button
                document.getElementById(moreBtnId).style.display = "none";
            }
            else {
                document.getElementById(moreBtnId).addEventListener("click", function(){ editItem(index, item) });
            }
        });

        // setup markItemSold button
        productList._products.forEach ((item, index) => {
            moreBtnId = "btn-sold" + index;
            if (item.soldStatus == true) {
                // if item is sold, don't set click event for sold button & hide button
                document.getElementById(moreBtnId).style.display = "none";
                document.getElementById("soldIcon" + index).style.display = "block";
            }
            else {
                document.getElementById(moreBtnId).addEventListener("click", function(){ markItemSold(index, item) });
                document.getElementById("soldIcon" + index).style.display = "none";
            }
        });

        // setup deleteItem button
        productList._products.forEach ((item, index) => {
          moreBtnId = "btn-del" + index;
          document.getElementById(moreBtnId).addEventListener("click", function(){ deleteItem(index, item) });
          // document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item) });
        });

        /* products.forEach ((item, index) => {
        binoBtnId = "btn-bino" + index;
        document.getElementById(binoBtnId).addEventListener("click", function(){
          //alert("watched "+item.name);
          this.style.color =  (this.style.color==="orange")?"black":"orange";
         })
      });*/
    } // end of member displayproduct
}   //End of ProductsController class

function getWatchCount(productid) {
    console.log("getWatchCount");
    let count = [];
    fetch(activeURL + "watch/getcount/" + productid)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log("2. receive data")
            console.log(data);
            data.forEach(function (item, index) {
                const itemObj = {
                    count: count
                }
                console.log("api " + itemObj);
                count.push(itemObj);
            });
        })
        .catch(function(error) {
            console.log(error);
        });

    console.log("count " + productid + " " + count[0].count);
}
