import React,{useState} from "react";


export default function Sidebar(){
    return(
        <>
       <div class="" style={{width:180,height:590,backgroundColor:"#404040"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4"></span>
    </a>
    <div class="dropdown" style={{marginLeft:48,marginTop:20}}>
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">        <img src="images/profile.png" alt="" style={{width:80,height:80}} class="rounded-circle me-2"/>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="/login">Signout</a></li>
      </ul>
    </div>
        <br></br>
        <br></br>
    <ul class="nav nav-pills flex-column mb-auto">
      <li style={{backgroundColor:"#404040"}}>
      <a href="#" class="nav-link py-3 border-bottom" title="Profie">
      <h6 style={{color:"white"}}>Profile</h6>
        </a>
      </li>
      <li>
      <a href="#" class="nav-link py-3 border-bottom" title="Password">
      <h6 style={{color:"white"}}>Password</h6>
        </a>
      </li>
      <li>
      <a href="#" class="nav-link py-3 border-bottom" title="Reviews">
      <h6 style={{color:"white"}}>Reviews</h6>
        </a>
      </li>
      <li>
      <a href="#" class="nav-link py-3 border-bottom" title="Payment details">
      <h6 style={{color:"white"}}>Payment details</h6>
        </a>
      </li>
      <li>
      <a href="/home" class="nav-link py-3 border-bottom" title="Home">
      <h6 style={{color:"white"}}>Home</h6>
        </a>
      </li>
    </ul>
    <img src="images/LOGO.png" style={{width:160,height:160}}/>

    </div>
        </>
    )
}

