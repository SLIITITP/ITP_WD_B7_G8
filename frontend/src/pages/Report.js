import { useRef } from "react";
import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import axios from "axios";
import  {useReactToPrint} from 'react-to-print'

export default function Report(){


  const[users, setUsers] = useState([]);

  const componentPDF = useRef()

  useEffect(()=>{
    function getUsers(){
      axios.get("http://localhost:5000/users").then((res)=>{
      setUsers(res.data);
    }).catch((err)=>{
      alert(err.message);
    })
    }
    getUsers();
  },[])

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current, 
    documentTitle: "AutoForce Customer Log",
    onAfterPrint: () => alert("Data Saved to PDF")
})

    return(
        <>
        <Header/>
        
      <div className="container" style={{width:1000,height:500,backgroundColor:"white"}}>
        <div ref = {componentPDF} style={{backgroundColor:"gray"}}>
        <h3 style={{color:"white"}}>Customer Details Final Report</h3>
        <div>
      {users.map(user => (
          <div key={user._id}>
            <br></br>
            <br></br>
            
                <ul className="list-group" style={{width:400,marginLeft:280}}>
                  <li className="list-group-item">FirstName:{user.firstname}</li>
                  <li className="list-group-item">LastName:{user.lastname}</li>
                  <li className="list-group-item">PhoneNumber:{user.phoneNumber}</li>
                  <li className="list-group-item">Email:{user.email}</li>
                  <li className="list-group-item">Address:{user.address}</li>
                  <li className="list-group-item">NIC:{user.NIC}</li>
                  <div className="btn-group" role="group" aria-label="Basic example" style={{marginTop:-20}}>
                </div>
                </ul>  
                
              </div>
        ))}
    </div>
    <br></br>
    <br></br>
    </div>
    <br></br>
    <button className="pdfgen" onClick={ generatePDF } style={{width: 150, borderRadius: 5,color:"white",backgroundColor:"#0D296F"}}>Get PDF</button>
      </div>
        
        </>
    )
}