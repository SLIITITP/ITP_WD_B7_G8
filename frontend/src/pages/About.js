import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About(){
    return(
        <>
        <Header/>
        <div className="container" style={{backgroundColor:"#D3D9CA",width:500,marginTop:20,height:500,marginBottom:20}}>
        <form>
            <br></br>
        <h2>About Us</h2>
        <img src="images/about.jpg" style={{width:150,height:150,marginLeft:-10}}/>
  <div class="mb-3">
    <label for="feed" class="form-label"></label>
    <p>A leading tyre supplier, in the initial stage, Our Tyres aims to make perfect tyre selections available for the local customers by marketing two reputed tyre brands; namely Aoteli & RoadX tyres.Aoteli and RoadX tyres are marketed across the island though a powerful dealer network of tyre suppliers and tyre wholesalers who make it easy for customers to access the right kind of radial tyres in Sri Lanka at the best value for their money.</p>
  </div>
  <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
    <a href = "/home"><button type="button" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150,marginLeft:-10}}>Back to Home</button></a>
    </div>
</form>
        </div>
        <Footer/>
        </>
        
    )
}

