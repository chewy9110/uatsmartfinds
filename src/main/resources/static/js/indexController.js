class ProductController {

    constructor() {
        this.products = [];
        
            
       // this session
       this.currLoginID =  msgUtilLoginId();
    }

       filterExcludeOwnerID(id) {
          // this function will filter allProducts and return an array of objects
          // which DOES NOT BELONG to id
          // console.log("Current login *****", id);
          const productsExcludeID = this.products.filter(currlist => (
              currlist.ownerID != id
          ));

           console.log(productsExcludeID);
          return productsExcludeID;
        }

    addProduct(ownerId, productId, name, description, imageURL1, imageURL2, imageURL3, price, ownerDisplayName, soldStatus, watchListCount,itemNum) {

      let imageURL = {imageURL1, imageURL2, imageURL3};

      const productItem = {
          ownerId: ownerId,
          productId: productId,
          name: name,
          description: description,
          imageURL : imageURL,
          price: price,
          ownerDisplayName:ownerDisplayName,
          soldStatus : soldStatus,
          watchListCount:watchListCount,
          itemNum: itemNum

      }
      this.products.push(productItem);
      products.displayProduct();
  }
    

    displayProduct() {
   
         
        //  
        let showProductItem = "";
        let moreBtnId = "";
        let binoBtnId = "";
       

        this.products.forEach ((item, index) => { 
          
          
            
            moreBtnId = "item" + index;
            binoBtnId = "btn-bino" +index;
        
          if(item.itemNum <= 6) {  

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
                <img src="${item.imageURL.imageURL1}" class="card-img-top" alt="item1">
              </div>
    
              <div class="carousel-item">
                <img src="${item.imageURL.imageURL2}" class="card-img-top" alt="item2">
              </div>
    
              <div class="carousel-item">
                <img src="${item.imageURL.imageURL3}" class="card-img-top" alt="item3">
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

                <h5 class="card-title">${item.name}</h5>
              

                  <div class="container-star d-flex flex-row-reverse ms-auto">
                    <i class="bi1 bi-star-fill"></i>
                    <i class="bi2 bi-star-fill"></i>
                    <i class="bi3 bi-star-fill"></i>
                    <i class="bi4 bi-star-fill"></i>
                    <i class="bi5 bi-star-fill"></i>
                  
                  </div>
          </div>
                
                  <div  class="container d-flex flex-row"> 
                
                  <small class="text-muted price" style="margin-left:-20px;">${item.price}</small>

                      <i id="${binoBtnId}" type="button" class="bi bi-binoculars-fill ms-auto" onclick="memberPageCheck()"></i>
                  </div> 

                

                <p class="card-text overflow-scroll" style="max-height: 5rem; margin-top: 30px;">${item.description}</p>

                <button type="button" id="${moreBtnId}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  See full item details
                </button>

                <i class="btn">  <!--  <img src="products/message.svg" >-->
                 
                <!-- send msg box  -->
                  <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sendboxmsgmodal"
                  data-bs-item = '{
                    "from":"${this.currLoginID.displayName}", "to":"${item.ownerDisplayName}", "url":"${item.imageURL.imageURL1}","productId":"${item.productId}","productTitle":"${item.name}", "price":"${item.price}", "inboxUid":"${this.currLoginID.userID}",
                  "fromUid":"${this.currLoginID.userID}",
                  "toUid":"${item.ownerId}"
                  }'
                  data-bs-dismiss="modal">
                  <img src="products/message_white.svg" >&nbspChat now</a>
                </i>
                </div>
                <div>
                    
                 <div  class="card-footer d-flex flex-row  justify-content-between">
                  <div>
                    <small class="text-muted">Last updated 3 mins ago</small>  
                  </div>
                  <div>
                      <span><small class="text-muted">${item.ownerDisplayName}</small></span><img src="${msgUtilUserImgUrl(item.ownerId)}" width="30" height="30" class="rounded-circle" alt="img profile">
                  </div>
                </div>
              </div> 
            </div> 
          </div>
            `
                }
                
              // products.displayProduct();

                
        });

        
       
        document.querySelector(".row").innerHTML =  showProductItem;

        
        this.products.forEach ((item, index) => {
            moreBtnId = "item" + index;
            document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item) });
        });

        this.products.forEach ((item, index) => {
          binoBtnId = "btn-bino" + index;
          document.getElementById(binoBtnId).addEventListener("click", function(){ 
            //alert("watched "+item.name);
            

            
            
            this.style.color =  (this.style.color==="orange")?"black":"orange";
           })
       });

    } 
} 



function displayItemDetail(item) {
    
   document.querySelector(".itemTitle").innerHTML = item.name;
   document.querySelector(".itemImage").src = item.imageURL.imageURL1;
   document.querySelector(".itemImage2").src = item.imageURL.imageURL2;
   document.querySelector(".itemImage3").src = item.imageURL.imageURL3;
   document.querySelector(".itemDescription").innerHTML = item.description;
   document.querySelector(".itemPrice").innerHTML = item.price;
}


function carouselIndicator() {
  if (item.imageURL3 != item.imageURL3) {
    document.querySelector('#item3').style.display = "none";
  }
}



function filter() {
  publicPageCheck();
  //memberPageCheck();

 const prod = products.filterExcludeOwnerID(currlist => (
    currlist.ownerID != id));
console.log(prod);
products.displayProduct(prod);

}


