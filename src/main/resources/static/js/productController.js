const createHTMLList = (productId, ownerId, title, description, imageUrl1, imageUrl2, imageUrl3, defaultPic, price, dateUpdated, soldStatus, deleteStatus, ownerDisplayName, i) =>

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
          "from":"this.currLoginID.displayName", "to":${ownerDisplayName}, "url":${imageUrl1},"productId":${productId},"productTitle":${title}, "price":${price}, "inboxUid":"this.currLoginID.userID",
        "fromUid":"this.currLoginID.userID",
        "toUid":${ownerId}
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




 class IndexController 
{
    constructor()
    {
        this._products = [];       //create an array to store the details of product items

        this.currLoginID =  msgUtilLoginId();
    }

    //method to add the items into the array
    addItem(productId, ownerId, title, description, imageUrl1, imageUrl2, imageUrl3, price, dateUpdated, soldStatus, deleteStatus, ownerDisplayName)
    {
        const itemObj = {
            productId: productId,
            ownerId: ownerId,
            title: title,
            description: description,
            imageUrl1: imageUrl1,
            imageUrl2: imageUrl2,
            imageUrl3, imageUrl3,
            price: price,
            dateUpdated: dateUpdated,
            ownerDisplayName: ownerDisplayName,
            soldStatus: soldStatus,
            deleteStatus: deleteStatus

        };

        this._products.push(itemObj);
    }


    displayProduct()
    {
        let indexController = this;
        indexController._products = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://127.0.0.1:8080/product/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                if(index <= 5) {
                    const itemObj = {
                        productId: item.productId,
                        ownerId: item.ownerId,
                        title: item.title,
                        description: item.description,
                        imageUrl1: item.imageUrl1,
                        imageUrl2: item.imageUrl2,
                        imageUrl3: item.imageUrl3,
                        defaultPic: item.defaultPic,
                        price: item.price,
                        dateUpdated: item.dateUpdated,
                        ownerDisplayName: item.ownerDisplayName,
                        soldStatus: item.soldStatus,
                        deleteStatus: item.deleteStatus
                   }

                    indexController._products.push(itemObj);
                   };
              });

              indexController.renderProductPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }






    renderProductPage()
    {
        let productHTMLList = [];

        for (let i=0; i<this._products.length; i++)
        {
            const item = this._products[i];            //assign the individual item to the variable

            const productHTML = createHTMLList(item.productId, item.ownerId, item.title, item.description, item.imageUrl1, item.imageUrl2, item.imageUrl3, item.defaultPic, item.price, item.dateUpdated, item.soldStatus, item.deleteStatus, item.ownerDisplayName);

            productHTMLList.push(productHTML);
        }

        //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('.row').innerHTML = pHTML;

    }


}   //End of ProductsController class
