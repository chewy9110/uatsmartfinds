// const footer = document.querySelector('.footerContent')
// fetch('./footerContent.html')
// .then(res=>res.text())
// .then(data=>{
//     footer.innerHTML=data
// })
const footerContent = `
<div class="container-fluid">
    <nav class="navbar navbar-expand-lg fixed-bottom bg-footer">
      <div class="d-flex mx-auto align-items-center">
          &copy;Copyright 2022 SmarTFinds - Singapore
      </div>
    </nav>
</div>
`;
document.querySelector(".footerContent").innerHTML = footerContent;