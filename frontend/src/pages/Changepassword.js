import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Changepassword(){
    return(
        <>
        <Header/>
        <div className="container" style={{backgroundColor:"#D3D9CA",width:500,marginTop:20,height:500,marginBottom:20}}>
        <form>
            <br></br>
            <h2>Change Password</h2>
        
        <img src="images/lock.png" style={{width:100,height:100,marginLeft:-10}}/><br></br>
  <div class="mb-3">
    <label for="npass" class="form-label" ></label>
    <input type="password" class="form-control" id="npass"style={{width:200,marginLeft:130}} placeholder="New Password" required/>
  </div><br></br>
  <div class="mb-3">
    <label for="ncpass" class="form-label"></label>
    <input type="password" class="form-control" id="ncpass" style={{width:200,marginLeft:130}} placeholder="Confirm Password" required/>
  </div>
  <br></br>
  <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
    <button type="submit" class="btn btn-primary " style={{backgroundColor:"#002D62",marginLeft:-10,width:100}}>Submit</button>
    </div>
</form>
        </div>
        <Footer/>
        </>
    )
}