import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";


export default function Payment(){

    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [nameoncard, setnameoncard] = useState("");
    const [numberoncard, setnumberoncard] = useState("");
    const [expmonth, setexpmonth] = useState("");
    const [expyear, setexpyear] = useState("");
    const [cvv, setcvv] = useState("");

    function sendData(e){
      e.preventDefault();
      
      const newPayment={

        fullname,
        email,
        address,
        city,
        state,
        zipcode,
        nameoncard,
        numberoncard,
        expmonth,
        expyear,
        cvv
      }

      axios.post("http://localhost:5000/payments/add",newPayment).then(()=>{
        alert("Payment Added")
        window.location.href='http://localhost:3000/Success';
      }).catch((err)=>{
        alert(err)
        window.location.href='http://localhost:3000/Unsuccess';
      })

    }

    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#002D62"}} >
 <div className="container-fluid" style={{backgroundColor:"#0A063D",height:600,width:1500,marginTop:-17,marginBottom:-10}}>
   <a className="navbar-brand" href="#"></a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNav" >
   <img src="img/LOGO.png" style={{width:260,height:260,marginTop:-100,marginLeft:-10}}/>
   <div className="container" style={{backgroundColor:"#D3D9CA",width:600,height:550,marginLeft:100}}>
   <form onSubmit={sendData} class="row g-3">
  <div class="col-md-6">
    <label for="userdetails" class="form-label" ><b>User Details</b></label>
  </div>
  <div className="col-md-6">
    <label for="payment" class="form-label"><b>Payment</b></label>
  </div>
  <div className="col-md-6">
    <label for="fullname" class="form-label" style={{}}>FullName</label>
    <input type="text" class="form-control" id="fullname"
    onChange={(e)=>{

     setfullname(e.target.value);

    }}/>
  </div>
  <div className="col-md-6">
    <label for="card" class="form-label" style={{marginLeft:6}}>Cards Accepted</label><br></br>
    <img src="img/card.png" style={{width:230,height:35,marginLeft:6}}/>
  </div>
  <div className="col-md-6">
    <label for="email" class="form-label" style={{}}>Email</label>
    <input type="email" class="form-control" id="email"
    onChange={(e)=>{

      setemail(e.target.value);
 
     }}required/>
  </div>
  <div className="col-md-6">
    <label for="nameoncard" class="form-label" style={{marginLeft:5}}>Name on Card</label>
    <input type="text" class="form-control" id="nameoncard"
      onChange={(e)=>{

        setnameoncard(e.target.value);
   
       }} required/>
  </div>
  <div className="col-md-6">
    <label for="address" class="form-label" style={{}}>Address</label>
    <input type="text" class="form-control" id="address"
    onChange={(e)=>{

      setaddress(e.target.value);
 
     }}required/>
  </div>
  <div className="col-md-6">
    <label for="numberoncard" class="form-label" style={{marginLeft:6}}>Number on card</label>
    <input type="number" class="form-control" id="numberoncard"
    onChange={(e)=>{

      setnumberoncard(e.target.value);
 
     }}required/>
  </div>
  <div className="col-md-6">
    <label for="city" class="form-label" style={{marginLeft:4}}>City</label>
    <input type="text" class="form-control" id="city"
        onChange={(e)=>{

          setcity(e.target.value);
     
         }}required/>
  </div>
  <div className="col-md-6">
    <label for="expmonth" class="form-label" style={{marginLeft:6}}>Exp Month</label>
    <input type="text" class="form-control" id="expmonth"
     onChange={(e)=>{

      setexpmonth(e.target.value);
 
     }}required/>
  </div>
  <div className="col-md-2" style={{width:150}}>
    <label for="state" class="form-label" style={{marginLeft:5}}>State</label>
    <input type="text" class="form-control" id="state"
     onChange={(e)=>{

      setstate(e.target.value);
 
     }}required/>
  </div>
  <div className="col-md-2" style={{marginLeft:-1,width:150}}>
    <label for="zipcode" class="form-label" style={{marginLeft:5}}>Zip Code</label>
    <input type="number" class="form-control" id="zipcode"
     onChange={(e)=>{

      setzipcode(e.target.value);
 
     }}required/>
  </div>
  <div className="col-md-2" style={{width:150}}>
    <label for="expyear" class="form-label" style={{marginLeft:5}}>Exp Year</label>
    <input type="number" class="form-control" id="expyear"
     onChange={(e)=>{

      setexpyear(e.target.value);
 
     }}required/>
  </div>
  <div className="col-md-2" style={{width:130,marginLeft:10}}>
    <label for="cvv" class="form-label" style={{marginLeft:5}}>CVV</label>
    <input type="number" class="form-control" id="cvv"
    onChange={(e)=>{

      setcvv(e.target.value);
 
     }}required/>
  </div>
  <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
    <button type="button" class="btn btn-primary " style={{marginLeft:30,backgroundColor:"#002D62"}}>Cash on delivery</button>
    <button type="submit" class="btn btn-primary" style={{marginLeft:110,backgroundColor:"#002D62"}}>Proceed to Payment</button>
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
