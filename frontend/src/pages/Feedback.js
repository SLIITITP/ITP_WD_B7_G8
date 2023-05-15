import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Feedback(){
    return(
        <>
        <Header/>
        <div className="container" style={{backgroundColor:"#D3D9CA",width:500,marginTop:20,height:500,marginBottom:20}}>
        <form>
            <br></br>
        <h2>Feedback</h2>
        <br></br>
        <br></br>
        <img src="images/feedback.png" style={{width:150,height:150,marginLeft:-60}}/>
  <div class="mb-3">
    <label for="feed" class="form-label"></label>
    <input type="text" class="form-control" id="feed" aria-describedby="feedHelp" required/>
    <div id="feedHelp" class="form-text">We appriciate your every FeedBack.</div>
  </div>
  <br></br>
  <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
    <button type="submit" class="btn btn-primary " style={{backgroundColor:"#002D62",marginLeft:-10}}>Submit</button>
    <a href = "/home"><button type="button" class="btn btn-primary" style={{backgroundColor:"#002D62",marginLeft:30,width:70}}>Back</button></a>
    </div>
</form>
        </div>
        <Footer/>
        </>
        
    )
}

