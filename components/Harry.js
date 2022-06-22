import React from 'react'
import Create from './Create'
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Harry(){
  
    // let navigateTo =useNavigate();
    return (

        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
         
        </li>
       
      </ul>
      

          <div className="nav-item dropdown">
        
          <Link to='/newuser'><button type="button" className="btn btn-success">Create New User</button></Link>
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Help ?
          </a>
          
        </div>

    </div>
  </div>
</nav>
    )
}
export default Harry