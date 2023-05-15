import React from "react";


function Navbar(){
    return(
 <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#002D62"}} >
 <div className="container-fluid" style={{backgroundColor:"#0A063D",height:100,width:1500,marginTop:-17,marginBottom:-10}}>
   <a className="navbar-brand" href="#"></a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNav" >
     <ul className="navbar-nav">
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/home" style={{color:"white",marginLeft:300}}>|Home </a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/customeraccount" style={{color:"white"}}>|Account</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#" style={{color:"white"}}>|Order</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/about" style={{color:"white"}}>|About</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/feedback" style={{color:"white"}}>|Feedback</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#" style={{color:"white"}}>|Appointment</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#" style={{color:"white"}}>|Assist </a>
       </li>
       <li className="nav-item">
       <img src="images/profile.png" style={{width:60,height:60,marginLeft:195,marginTop:-10}}/>
       <a href = "/login"><button type="button" class="btn btn-primary " style={{width:110,height:30,marginLeft:187,textAlign:'center',backgroundColor:"#0A063D"}}> LogOut</button></a>
       </li>
     </ul>
   </div>
 </div>
</nav>
    )
}
export default Navbar;