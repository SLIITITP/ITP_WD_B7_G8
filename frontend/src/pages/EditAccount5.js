import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

const EditAccount=()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nic, setNIC] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    
  const [error, setError] = useState();

  const params = useParams();

  const getSelectedDetails = () => {
    axios.get(`http://localhost:5000/partners/${params.id}`)

      .then((response) => {
        console.log(response.data);
        
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setNIC(response.data.nic);
          setContactNo(response.data.contactNo);
          setGender(response.data.gender);
          setDateOfBirth(response.data.dateOfBirth);
          setEmail(response.data.email);
          
      })
    }

    useEffect(()=>{
      getSelectedDetails();
    },[]);

  const updatePartnerDetails = (e) => {
    e.preventDefault();

    let updateData = {
      firstName: firstName,
      lastName: lastName,
      nic: nic,
      contactNo: contactNo,
      gender: gender,
      dateOfBirth: dateOfBirth,
      email: email,
    }

    axios.put(`http://localhost:5000/partners/${params.id}`, updateData)
      .then(() => {
        alert("Partner details updated")
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }


  return(
    
    <div className ="box" style={{marginLeft: '28%'}}>
        <div class="title">UPDATE PARTNER</div>
        <form>

            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" onChange={(e)=>

                    setFirstName(e.target.value)}
                    value={firstName}

                 />
                </div>
                <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" onChange={(e)=>

                    setLastName(e.target.value)}
                    value={lastName}

                 />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="nic">NIC</label>
                <input type="text" class="form-control" id="nic" onChange={(e)=>

                    setNIC(e.target.value)}
                    value={nic}

                 />
                </div>
                <div class="form-group col-md-6">
                <label for="contactNo">Contact Number</label>
                <input type="text" class="form-control" id="contactNo" onChange={(e)=>

                setContactNo(e.target.value)}
                value={contactNo}

                 />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="gender">Gender</label>
                <input type="text" class="form-control" id="gender" onChange={(e)=>

                setGender(e.target.value)}
                value={gender}

                 />
                </div>
                <div class="form-group col-md-6">
                <label for="date">Date Of Birth</label>
                <input type="date" class="form-control" id="dateOfBirth" onChange={(e)=>

                setDateOfBirth(e.target.value)}
                value={dateOfBirth}

                 />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="email" onChange={(e)=>

                setEmail(e.target.value)}
                value={email}

                />
            </div>
            </div>

            <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
            <button className="u" onClick={updatePartnerDetails} style={{width:'300px', height:'40px', background:'#1AB1E0', border:'#1AB1E0', color:'white'}}>Update</button> 
            <a href = "/Profiles"><button type="button" class="" style={{width:'300px', height:'40px', background:'#1AB1E0',border:'#1AB1E0', color:'white', marginLeft:'70%'}}>Back</button></a>
            </div>   
            {error && <div className="error">{error}</div>}

        </form> 
    </div>
  )
}

export default EditAccount;