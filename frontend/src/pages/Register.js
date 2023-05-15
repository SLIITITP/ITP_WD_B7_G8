import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function Register(){

    const[username,setName] = useState("");
    const[password,setPassword] = useState("");
    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[email,setEmail] = useState("");
    const[address,setAddress] = useState("");
    const[phoneNumber,setPhonenumber] = useState("");
    const[NIC,setNIC] = useState("");
    const[userType, setUserType] = useState("");
    const[secretkey,setSecretkey] = useState("");


    // Regular expressions for validation
    const passwordRegex = /^[a-zA-Z\d]{8,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const nicRegex = /^[0-9]{12}$/;

    function sendData(e){
        if(userType=="Admin" && secretkey!="pass@123"){
            e.preventDefault();
            alert("Invalid Admin")
        }else{
            e.preventDefault();

        const newUser ={
            username,
            password,
            firstname,
            lastname,
            email,
            address,
            phoneNumber,
            NIC,
            userType
        }

        // Validation for password
        if (!passwordRegex.test(password)) {
            alert("Password must contain at 8 characters.");
            return;
        }

        // Validation for phone number
        if (!phoneRegex.test(phoneNumber)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Validation for NIC
        if (!nicRegex.test(NIC)) {
            alert("Please enter a valid NIC number.");
            return;
        }

        axios.post("http://localhost:5000/users/add",newUser).then(()=>{
            alert("New User Added to the system")

        }).catch((err)=>{
            alert(err)
        })

        }
        
      
    }

    return(
        <>
        <Header/>
    <div className="container"style={{backgroundColor:"#0A063D",width:1000,marginBottom:-10}}>
        <h3 style={{color:"white"}}>Register</h3>
    <br></br>
    <br></br>
    <form onSubmit={sendData} class="row g-3" style={{width:800,marginLeft:90,backgroundColor:"#D3D9CA",marginTop:-33}}>

    
    <div class="col-md-6">
    <label for="username" class="form-label">User Name</label>
    <input type="text" class="form-control" id="username" required onChange={(e)=>{
       
       setName(e.target.value);

    }}/>
    </div>
    <div class="col-md-6">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"required onChange={(e)=>{

        setPassword(e.target.value);
    }}/>
    </div>
    
    <div class="col-md-6">
    <label for="firstname" class="form-label">First Name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="firstname"required onChange={(e)=>{
        setFirstname(e.target.value);
    }}/>
    </div>

    <div class="col-md-6">
    <label for="lastname" class="form-label">Lastname</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="lastname"required onChange={(e)=>{
        setLastname(e.target.value);
    }}/>
    </div>

    <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="xxxxx@gmail.com"required onChange={(e)=>{
        setEmail(e.target.value);
    }}/>
    </div>

    <div class="col-md-6">
    <label for="address" class="form-label">Address</label>
    <input type="text" class="form-control" id="address" placeholder="enter your address here"required onChange={(e)=>{
        setAddress(e.target.value);
    }}/>
    </div>
    <div class="col-md-6">
    <label for="phoneNumber" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="phoneNumber"required onChange={(e)=>{
        setPhonenumber(e.target.value);
    }}/>
    </div>
    <div class="col-md-6">
    <label for="NIC" class="form-label">NIC</label>
    <input type="number" class="form-control" id="NIC"required onChange={(e)=>{
        setNIC(e.target.value);
    }}/>
    </div>
    <br></br>
    <br></br>
    <div class="col-md-6">
      <ul>
        <div class="col-md-6">
        <tr><input type="radio" name="UserType" value="User" onChange={(e)=>{
       
       setUserType(e.target.value);

    }}/><label for="user" class="form-label"> User</label><br></br></tr>
    </div>
    <div class="col-md-6">
    <tr><input type="radio" name="UserType" value="Admin" onChange={(e)=>{
       
       setUserType(e.target.value);

    }}/><label for="admin" class="form-label">Admin</label></tr>
    </div>
    </ul>
       </div>
    {userType=="Admin"?<div class="col-md-6">
    <label for="key" class="form-label">Secret Key</label>
    <input type="text" class="form-control" placeholder="Admin secret key" aria-label="Key" id="key" onChange={(e)=>{
        setSecretkey(e.target.value);
    }}/>
    </div>:null}
    
    <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
    <a href = "#"><button type="submit" class="btn btn-primary " style={{marginLeft:250,backgroundColor:"#002D62"}}>Sign in</button></a>
    <a href = "/register"><button type="button" class="btn btn-primary" style={{marginLeft:30,backgroundColor:"#002D62"}}>Reset</button></a>
    <a href = "/login"><button type="button" class="btn btn-primary" style={{marginLeft:30,backgroundColor:"#002D62"}}>Back</button></a>
    </div>

    <br></br>
    <br></br>
    </form>

    <br></br>
    <br></br>
    </div>
    <Footer/>
    </>
    )
}