const createHTMLList = (productid, ownerid, title, description, imageUrl1, imageUrl2, imageUrl3, defaultPic, price, dateUpdated, soldStatus, deleteStatus, ownerDisplayName, i) =>

`
<div class="item">
  <div class="card d-flex shadow p-3 mb-5 bg-body rounded" style="height: 800px;">

 
  <div id="carouselCard" class="carousel slide" data-bs-interval="false" style="margin-top: -50px;">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCard" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCard"  data-bs-slide-to="2" aria-label="Slide 3"></button>
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
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselCard" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselCard" data-bs-slide="next">
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
      
        <div  class="container d-flex flex-row"> 
      
        <small class="text-muted price" style="margin-left:-20px;">${price}</small>

            <i id="binoBtnId" type="button" class="bi bi-binoculars-fill ms-auto" onclick="memberPageCheck()"></i>
        </div> 

      

      <p class="card-text overflow-scroll" style="max-height: 5rem; margin-top: 30px;">${description}</p>

      <button type="button" id="moreBtnId" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        See full item details
      </button>

      <i class="btn">  <!--  <img src="products/message.svg" >-->
       
      <!-- send msg box  -->
        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sendboxmsgmodal"
        data-bs-item = '{
          "from":"this.currLoginID.displayName", "to":${ownerDisplayName}, "url":${imageUrl1},"productId":${productid},"productTitle":${title}, "price":${price}, "inboxUid":"this.currLoginID.userID",
        "fromUid":"this.currLoginID.userID",
        "toUid":${ownerid}
        }'
        data-bs-dismiss="modal">
        <img src="products/message_white.svg" >&nbspChat now</a>
      </i>
      </div>
      <div>
          
       <div  class="card-footer d-flex flex-row  justify-content-between">
        <div>
          <small class="text-muted">${dateUpdated}</small>
        </div>
        <div>
            <span><small class="text-muted">${ownerDisplayName}</small></span><img src="" width="30" height="30" class="rounded-circle" alt="img profile">
        </div>
      </div>
    </div> 
  </div> 
</div>
  `;



  function displayProductDetail(item) {
    
    document.querySelector("#title").innerHTML = item.title;
    document.querySelector("#imageUrl1").src = item.imageUrl1;
    document.querySelector("#imageUrl2").src = item.imageUrl2;
    document.querySelector("#ImageUrl3").src = item.imageUrl3;
    document.querySelector("#description").innerHTML = item.description;
    document.querySelector("#price").innerHTML = item.price;
 }




 class ProductsController
{
    constructor()
    {
        this._products = [];       //create an array to store the details of product items

        //this.currLoginID =  msgUtilLoginId();
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
                    formData.append('imagefile',imageObject);

                   fetch('http://localhost:8080/product/add', {
                         method: 'POST',
                         body: formData
                         })
                         .then(function(response) {
                             console.log(response.status); // Will show you the status
                             if (response.ok) {
                                 console.log("Successfully Added Product!");
                             }
                         })
                         .catch((error) => {
                             console.error('Error:', error);
                             console.log("Error adding item to Product");
                         });
    }


    displayProduct()
    {
        let productController = this;
        productController._products = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://127.0.0.1:8080/product/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                if(index <= 5) {
                    const itemObj = {
                        productid: item.productid,
                        ownerid: item.ownerid,
                        title: item.title,
                        description: item.description,
                        imageUrl1: item.imageUrl1,
                        imageUrl2: item.imageUrl2,
                        imageUrl3: item.imageUrl3,
                        defaultPic: item.defaultPic,
                        price: item.price,
                        dateUpdated: item.dateUpdated,
                        soldStatus: item.soldStatus,
                        deleteStatus: item.deleteStatus
                   }

                    productController._products.push(itemObj);
                   };
              });

              productController.renderProductPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    getAllProduct()
    {
        let productController = this;
        productController._products = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://127.0.0.1:8080/product/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
//                console.log(data);
                data.forEach(function (item, index) {

//                if(index <= 5) { // this will limit the number of product displayed to 6
                    const itemObj = {
                        productid: item.productid,
                        ownerid: item.ownerid,
                        title: item.title,
                        description: item.description,
                        imageUrl1: item.imageUrl1,
                        imageUrl2: item.imageUrl2,
                        imageUrl3: item.imageUrl3,
                        defaultPic: item.defaultPic,
                        price: item.price,
                        dateUpdated: item.dateUpdated,
                        soldStatus: item.soldStatus,
                        deleteStatus: item.deleteStatus
                   }

                    productController._products.push(itemObj);
//                   };
              });
              productController.displayMemberProduct();
                //return true;
            })
            .catch(function(error) {
                console.log(error);
                //return false;
            });
    }



    renderProductPage()
    {
        let productHTMLList = [];

        for (let i=0; i<this._products.length; i++)
        {
            const item = this._products[i];            //assign the individual item to the variable

            const productHTML = createHTMLList(item.productid, item.ownerid, item.title, item.description, item.imageUrl1, item.imageUrl2, item.imageUrl3, item.defaultPic, item.price, item.dateUpdated, item.soldStatus, item.deleteStatus, item.ownerDisplayName);

            productHTMLList.push(productHTML);
        }

        //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('.row').innerHTML = pHTML;

         for (let j=0; j<this._products.length; j++)
                {
                    const item = this._products[j];
                    document.getElementById(j).addEventListener("click", function() { displayProductDetail(item);} );
                }

    }

    whenUpdated(updateDate) {
      const mth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const uDate = new Date(updateDate);
      const todayDate = new Date();

      // console.log(uDate);
      let dispString = "";
      if ( (dispString = diff_seconds(todayDate, uDate)) != -1) {
          return(dispString +" sec ago");
      }
      else if ( (dispString = diff_minutes(todayDate, uDate)) != -1) {
          return(dispString + " min ago");
      }
      else if ( (dispString = diff_hours(todayDate, uDate)) != -1) {
          return(dispString + " hour ago");
      }
      else if ( (dispString = diff_days(todayDate, uDate)) != -1) {
          return(dispString + " day(s) ago");
      }
      else {
          return("since " + uDate.getFullYear() + " " + mth[uDate.getMonth()] + " " + uDate.getDate());
      }
    }

    displayMemberProduct() {
      //
      //let products = productList;
//      console.log(products);
      let showProductItem = "";
      let moreBtnId = "";
//      let editBtnId = "";
//      let soldBtnId = "";
//      let delBtnId = "";

      productList._products.forEach ((item, index) => {

//          editBtnId = "btn-edit" + index;
//          soldBtnId = "btn-sold" + index;
//          delBtnId = "btn-del" + index;
          const price = item.price;  // purpose of const price use for formatting to 2 decimal point
          const wUpdated = this.whenUpdated(item.dateUpdated);
          showProductItem +=
          `
  <div class="item">
      <div class="card d-flex shadow p-3 mb-5 bg-body rounded" style="height: 800px;">
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
            <i class="bi bi-binoculars-fill ms-auto"></i>&nbsp;XXX
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
          document.getElementById(moreBtnId).addEventListener("click", function(){ editItem(index, item) });
        });

      // setup markItemSold button
      productList._products.forEach ((item, index) => {
          moreBtnId = "btn-sold" + index;
          document.getElementById(moreBtnId).addEventListener("click", function(){ markItemSold(index, item) });
          document.getElementById("soldIcon" + index).style.display = "none";

          // document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item) });
        });

        // setup deleteItem button
        productList._products.forEach ((item, index) => {
          moreBtnId = "btn-del" + index;
          document.getElementById(moreBtnId).addEventListener("click", function(){ deleteItem(item) });
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


function diff_days(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  if ( Math.abs(Math.round(diff)) > 30)
    return -1; // show actual time
  return Math.abs(Math.round(diff));

 }

function diff_hours(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  if (Math.abs(Math.round(diff)) > 24)
    return -1; // check for days
  return Math.abs(Math.round(diff));

 }


function diff_minutes(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60);
  if (Math.abs(Math.round(diff)) > 60)
    return -1; // check for hours to display
  return Math.abs(Math.round(diff));

 }

function diff_seconds(dt2, dt1)
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    if (Math.abs(Math.round(diff)) > 60)
        return -1; // check for minutes to display
    else
        return Math.abs(Math.round(diff));
 }

