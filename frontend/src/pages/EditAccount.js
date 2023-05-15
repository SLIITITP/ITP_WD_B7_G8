import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditAccount=()=>{
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [NIC, setNIC] = useState("");

  const [error, setError] = useState();

  const params = useParams();

  const getSelectedUser = () => {
    axios.get(`http://localhost:5000/users/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setPhonenumber(response.data.phoneNumber);
        setNIC(response.data.NIC);
      })
    }

    useEffect(()=>{
      getSelectedUser();
    },[]);

  const updateUserDetails = (e) => {
    e.preventDefault();

    let updateData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      NIC: NIC,
    }

    axios.put(`http://localhost:5000/users/${params.id}`, updateData)
      .then(() => {
        alert("Customer details updated")
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }

    return(
      <>
      <Header/>
      <div className="container" style={{backgroundColor:"#0A063D",width:1000,marginBottom:-10,height:600}}>
        <form className="createUpdate"  class="row g-3" style={{width:800,marginLeft:90,backgroundColor:"#D3D9CA",marginTop:-33,height:590}}>

            <div className='headbox'>
            </div>

            <div className="form-head">
                <h3>Update Customer</h3>
            </div>

                
            <div class="col-md-6">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" onChange={(e)=>
                    setFirstname(e.target.value)}
                    value={firstname}
                />
                </div>

                <div class="col-md-6">
                <label for="lastname" class="form-label">Lastname</label>
                <input type="text" class="form-control" onChange={(e)=>
                    setLastname(e.target.value)}
                    value={lastname}
                />
                </div>
                  
                <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" onChange={(e)=>
                    setEmail(e.target.value)}
                    value={email}
                />
                </div>

                <div class="col-md-6">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" onChange={(e)=>
                    setAddress(e.target.value)}
                    value={address} 
                />
                </div>

                <div class="col-md-6">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <input type="number" class="form-control" onChange={(e)=>
                    setPhonenumber(e.target.value)}
                    value={phoneNumber} 
                />
                </div>

                <div class="col-md-6">
                <label for="NIC" class="form-label">NIC</label>
                <input type="number" class="form-control" onChange={(e)=>
                    setNIC(e.target.value)}
                    value={NIC}
                />
                </div>

                
            <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
            <button className="u" onClick={updateUserDetails} style={{marginLeft:300,backgroundColor:"#002D62",color:"white",height:40}}>Update</button> 
            <a href = "/account"><button type="button" class="btn btn-primary" style={{marginLeft:30,backgroundColor:"#002D62"}}>Back</button></a>
            </div>   
            {error && <div className="error">{error}</div>}
            
            
        </form>
        </div>
        <Footer/>
        </>
    )
}
export default EditAccount;