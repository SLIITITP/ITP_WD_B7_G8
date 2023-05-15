import React,{useState} from "react";
import Footer from "../components/Footer";
export default function Payment(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#002D62"}} >
 <div className="container-fluid" style={{backgroundColor:"#0A063D",height:600,width:1500,marginTop:-17,marginBottom:-10}}>
   <a className="navbar-brand" href="#"></a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNav" >
   <img src="images/LOGO.png" style={{width:260,height:260,marginTop:-100,marginLeft:-10}}/>
   <div className="container" style={{backgroundColor:"#D3D9CA",width:600,height:550,marginLeft:100}}>
   <form class="row g-3">
  <div class="col-md-6">
    <label for="userdetails" class="form-label" ><b>User Details</b></label>
  </div>
  <div class="col-md-6">
    <label for="payment" class="form-label"><b>Payment</b></label>
  </div>
  <div class="col-md-6">
    <label for="fullname" class="form-label" style={{marginLeft:-210}}>FullName</label>
    <input type="text" class="form-control" id="fullname"/>
  </div>
  <div class="col-md-6">
    <label for="card" class="form-label" style={{marginLeft:-170}}>Cards Accepted</label><br></br>
    <img src="images/card.png" style={{width:230,height:35,marginLeft:-50}}/>
  </div>
  <div class="col-md-6">
    <label for="email" class="form-label" style={{marginLeft:-240}}>Email</label>
    <input type="email" class="form-control" id="email"/>
  </div>
  <div class="col-md-6">
    <label for="name" class="form-label" style={{marginLeft:-170}}>Name on Card</label>
    <input type="text" class="form-control" id="name"/>
  </div>
  <div class="col-md-6">
    <label for="address" class="form-label" style={{marginLeft:-220}}>Address</label>
    <input type="text" class="form-control" id="address"/>
  </div>
  <div class="col-md-6">
    <label for="cardnumber" class="form-label" style={{marginLeft:-150}}>Number On Card</label>
    <input type="number" class="form-control" id="cardnumber"/>
  </div>
  <div class="col-md-6">
    <label for="city" class="form-label" style={{marginLeft:-250}}>City</label>
    <input type="text" class="form-control" id="city"/>
  </div>
  <div class="col-md-6">
    <label for="month" class="form-label" style={{marginLeft:-200}}>Exp Month</label>
    <input type="text" class="form-control" id="month"/>
  </div>
  <div class="col-md-2" style={{width:150}}>
    <label for="state" class="form-label" style={{marginLeft:-95}}>State</label>
    <input type="text" class="form-control" id="state"/>
  </div>
  <div class="col-md-2" style={{marginLeft:-1,width:150}}>
    <label for="zip" class="form-label" style={{marginLeft:-60}}>Zip Code</label>
    <input type="number" class="form-control" id="zip"/>
  </div>
  <div class="col-md-2" style={{width:150}}>
    <label for="year" class="form-label" style={{marginLeft:-70}}>Exp Year</label>
    <input type="number" class="form-control" id="year"/>
  </div>
  <div class="col-md-2" style={{width:130,marginLeft:10}}>
    <label for="cvv" class="form-label" style={{marginLeft:-80}}>CVV</label>
    <input type="number" class="form-control" id="cvv"/>
  </div>
  <br></br>
  <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
    <button type="submit" class="btn btn-primary " style={{marginLeft:30,backgroundColor:"#002D62"}}>Cash on delivery</button>
    <button type="button" class="btn btn-primary" style={{marginLeft:110,backgroundColor:"#002D62"}}>Proceed to Payment</button>
    </div>
</form>
        </div>
   </div>
 </div>
</nav>
        <Footer/>
        </>
    )
}
