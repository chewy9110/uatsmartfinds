const productsControl = new ProductsController();
let storeImage = ""

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newItemImageUrl = document.querySelector('#newItemImageUrl');
    const newItemTitleInput = document.querySelector('#newItemTitleInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemPrice = document.querySelector('#newItemPrice');

    /*
        Do the Validation code here
    */

    // Get the values of the inputs - variable names to be same as MySQL columns
    const imageUrl1 = newItemImageUrl.value.replace("C:\\fakepath\\", "");
    const imageUrl2 = newItemImageUrl.value.replace("C:\\fakepath\\", "");
    const imageUrl3 = newItemImageUrl.value.replace("C:\\fakepath\\", "");
    const title = newItemTitleInput.value;
    const description = newItemDescription.value;
    const price = newItemPrice.value;

    // Clear the form
    newItemImageUrl.value = '';
    newItemTitleInput.value = '';
    newItemDescription.value = '';
    newItemPrice.value = '';

    // Add the task to the task manager
    productsControl.addItem(imageUrl1, imageUrl2, imageUrl3, title, description, price, storeImage);


});

// select file input
const input = document.querySelector('#newItemImageUrl');

// add event listener
input.addEventListener('change', () => {
    storeImage = input.files[0];
});

