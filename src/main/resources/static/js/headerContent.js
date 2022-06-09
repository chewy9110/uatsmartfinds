// const nav = document.querySelector('.navbar')
// fetch('./navbar.html')
// .then(res=>res.text())
// .then(data=>{
//     nav.innerHTML=data
// })
const navContent = `
 <nav th:fragment="navbar" class="container-fluid navbar-index fixed-top p-0">
     <div class="navbar navbar-expand-lg navbar-dark">
       <a class="navbar-brand me-5" href="index.html" style="background-color: #eee8d0; border-radius: 8px; margin-left: 10px;">
           <img src="images/smartfindminilogo.png" type="button" width="50" height="50">
       </a>


       <div class="input-group w-50 mx-auto d-flex d-none d-md-flex d-lg-none d-xl-flex d-lg-none d-xl-flex d-xl-none d-xxl-none" style="align-content: center;"">
         <input type="text" class="form-control mx-auto" placeholder="Search" aria-label="Search" aria-describedby="Search"  title="Future enhancement feature.."  data-bs-toggle="popover" data-bs-boundary="window" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="Under Construction">
         <button class="btn btn-dark" type="button" id="button-addon1" title="Future enhancement feature.."  data-bs-toggle="popover" data-bs-boundary="window" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="Under Construction">Search</button>
       </div>

       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="margin-right: 10px;">
           <span class="navbar-toggler-icon"></span>
       </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">

             <div class="input-group w-50 mx-auto  d-sm-flex d-lg-flex d-md-none">
                 <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="Search"  title="Future enhancement feature.."  data-bs-toggle="popover" data-bs-boundary="window" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="Under Construction">
                 <button class="btn btn-dark" type="button" id="button-addon1" title="Future enhancement feature.."  data-bs-toggle="popover" data-bs-boundary="window" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="Under Construction">Search</button>
             </div>

             <ul class="navbar-nav ms-auto">
                 <li class="home">
                     <a class="nav-link" href="index.html" aria-current="page">Home</a>
                 </li>

                 <li class="aboutus">
                     <a class="nav-link" href="aboutus.html">About Us</a>
                 </li>

                 <li class="login" id="loginLink">
                     <a class="nav-link" href="login.html">Login</a>
                 </li>

                 <li class="nav-item dropstart">
                       <a class="btn dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbarDropdown">
                       </a>
                       <div class="dropdown-menu  dropdown navbarDropdown  " aria-labelledby="navbarDropdownMenuLink">
                         <a class="dropdown-item" href="member.html">Member's page</a>
                         <a class="dropdown-item" href="watchlist.html">My Watchlist</a>
                         <a class="dropdown-item" href="msgInbox.html">My Messages</a>
                         <div class="dropdown-divider"></div>
                         <h6 class="dropdown-header text-center"  >Future enhancement</h6>
                         <a class="dropdown-item" title="Future enhancement feature.."  data-bs-toggle="popover" data-bs-boundary="window" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="Under Construction">Profile</a>
                         <a class="dropdown-item" title="Future enhancement feature.."  data-bs-toggle="popover" data-bs-boundary="window" data-bs-placement="left" data-bs-trigger="hover" data-bs-content="Under Construction">Setting...</a>
                         <hr class="dropdown-divider">
                         <a class="dropdown-item" onclick="logout()">Logout</a>
                       </div>
                 </li>

             </ul>

         </div>
     </nav>
 </nav>
`;

document.querySelector(".headerContent").innerHTML = navContent;

// dismiss popover quick fix  
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl);
});
//


publicPageCheck();
