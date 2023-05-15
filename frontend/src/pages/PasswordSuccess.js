import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PasswordSuccess(){
    return(
        <>
        <Header/>
        <img src="images/thankyou.png" style={{width:550,height:400}}/>
        <h6 style={{color:"#0D296F"}}>Password Changed Successfully</h6>
        <br></br>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#002D62",width:150}}>Back to LogIn</button>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
        </>
    )
}