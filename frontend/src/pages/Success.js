import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Success(){
    return(
        <>
        <Header/>
        <img src="img/Thankyou.png" style={{width:550,height:400,marginLeft:400}}/>
        <h6 style={{color:"#0D296F",marginLeft:600}}>Payment Successful</h6>
        <h5 style={{color:"0D296F",marginLeft:450}}>Thank you for your payment an automated receipt<br></br> 
        will be sent to your registered email.</h5>
        <br></br>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150,marginLeft:600}}>Back to LogIn</button>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150,marginLeft:600}}>Print</button>
        
        <Footer/>
        </>
    )
}