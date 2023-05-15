import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import CustomerSidebar from "../components/CustomerSidebar";

export default function Review(){
  const[details,setDetails] = useState("");

  function sendData(e){
    e.preventDefault();

    const newReview = {
      details
    }


    axios.post("http://localhost:5000/reviews/add",newReview).then(()=>{
            alert("New Review Added")

        }).catch((err)=>{
            alert(err)
        })

  }



    return(
        <>
        <Header/>
        
        <table class="table table-borderless">
        <tr>
      <th scope="row" style={{marginLeft:-1}}>       
       <CustomerSidebar/>
       </th>
      <td>
      <div className="container" style={{backgroundColor:"#D3D9CA",width:500,marginTop:20,height:500,marginBottom:20,marginLeft:-20}}>
        <form onSubmit={sendData}>
            <br></br>        
        <img src="images/customer-satisfaction.png" style={{width:100,height:100,marginLeft:-10}}/><br></br><br></br>
  <div class="mb-3">
    <label for="review" class="form-label" style={{marginLeft:-140}}><b>Add Your Review here</b></label>
    <input type="text" class="form-control" id="review" style={{width:300,marginLeft:90,height:200}} required onChange={(e)=>{
      setDetails(e.target.value);
    }}
     />
  </div>
  <br></br>
  <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
    <button type="submit" class="btn btn-primary " style={{backgroundColor:"#002D62",width:100,marginLeft:0}}>Submit</button>

    </div>
</form>
        </div>
      </td>
      
    </tr>
</table>
        <Footer/>
        </>
    )
}