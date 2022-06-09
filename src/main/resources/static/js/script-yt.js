// const nav = document.querySelector('.navbar')
// fetch('./navbar.html')
// .then(res=>res.text())
// .then(data=>{
//     nav.innerHTML=data
// })
const navContent = `
 
<div class="container-fluid navbar-index">
   
<a class="navbar-brand" href="index.html" style="background-color: #eee8d0; border-radius: 8px;margin: 5px;">
      <img src="images/smartfindminilogo.png" type="button" width="50" height="50">
</a>

<div class="container-flex d-flex d-none d-md-block d-lg-none d-xl-flex d-lg-none d-xl-flex d-xl-none d-xxl-none" style="align-content: center;">
  <form class="d-flex mx-auto">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</div>


<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <form class="d-flex ms-auto d-sm-flex d-lg-flex d-md-none">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit" onclick="alert('This will search for the item.')">Search</button>
  </form>
  <div class="container d-none">
    <form class="d-flex mx-auto">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
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
          <div class="dropdown-menu  dropdown navbarDropdown" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="member.html">Member's page</a>
            <a class="dropdown-item" href="watchlist.html">My Watchlist</a>
            <a class="dropdown-item" href="msgInbox.html">My Messages</a>
            <a class="dropdown-item" href="javascript:alert('Future enhancement feature.');">Profile</a>
            <a class="dropdown-item" href="javascript:alert('Future enhancement feature.');">Setting...</a>
            <hr class="dropdown-divider">
            <a class="dropdown-item" onclick="logout()">Logout</a>
          </div> 
    </li>

</ul>

</div>
</div>        
</div>
 

`;
document.querySelector(".navbar").innerHTML = navContent;
