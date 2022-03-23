import React from 'react'
import {Link} from "react-router-dom"
import  authentication from "../../Services/Auth";

export default function Header() {
  let loginLayout;
  console.log(authentication.isLoggedIn);
  if(authentication.isLoggedIn){
    loginLayout=(  <ul class="navbar-nav me-auto mb-2 mb-lg-0 "><li class="nav-item">
    <Link to="/logout" class="nav-link " >Logout</Link>
    
  </li></ul>)}

  else{
    loginLayout=(  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">  <li class="nav-item">
    <Link to="/login" class="nav-link " >Login</Link>
    
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/register">Register</Link>
  </li>
  </ul>)

  }

    return (
      <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-testid="navidC">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NEWS ONLINE...</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/readLater">Read now</Link>
        </li>
       
       
      </ul>
      
      <form class="d-flex float-lg-end">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" data-testid="searchId" type="submit">Search</button>
      </form>
     
    {
      loginLayout
    }
       
       
       
     
   
    </div>
  </div>
</nav>
</div>
      
    );
}
