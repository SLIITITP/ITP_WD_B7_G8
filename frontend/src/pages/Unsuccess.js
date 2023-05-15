import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Unsuccess(){
    return(
        <>
        <Header/>
        <img src="img/Sorry.png" style={{width:550,height:400,marginLeft:400}}/>
        <h6 style={{color:"#0D296F",marginLeft:600}}>Payment Successful</h6>
        <h5 style={{color:"0D296F",marginLeft:400}}>Unfortunately we have an issue with your payment, try again later</h5>
        <br></br>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150,marginLeft:600}}>Back to LogIn</button>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150,marginLeft:600}}>Try again</button>
        <br></br>
        <br></br>
        <Footer/>
        </>
    )
}