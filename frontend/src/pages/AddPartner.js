
import React, {useState} from "react"
import axios from "axios";

export default function AddPartner(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nic, setNIC] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordRegex = /^[a-zA-Z\d]{8,}$/;
    const confirmPasswordRegex = /^[a-zA-Z\d]{8,}$/;
    const contactNoRegex = /^[0-9]{10}$/;
    const nicRegex = /^[0-9]{12}$/;

    function sendData(e){
        e.preventDefault();
        
        const newPartner ={

            firstName,
            lastName,
            nic,
            contactNo,
            gender,
            dateOfBirth,
            email,
            userName,
            password,
            confirmPassword
        }

        if (!passwordRegex.test(password)){
            alert("Password must contain at 8 characters");
            return;
        }

        if (!confirmPasswordRegex.test(confirmPassword)){
            alert("Password must contain at 8 characters");
            return;
        }

        if (!contactNoRegex.test(contactNo)){
            alert("Please enter valid phone number");
            return;
        }

        if (!nicRegex.test(nic)){
            alert("Please enter valid NIC number");
            return;
        }




        axios.post("http://localhost:5000/partners/add", newPartner).then(()=>{
            alert("Partner Added")

            setFirstName("");
            setLastName("");
            setNIC("");
            setContactNo("");
            setGender("");
            setDateOfBirth("");
            setEmail("");
            setUserName("");
            setPassword("");
            setConfirmPassword("");

        }).catch((err)=>{
            alert(err)
        })

    }

    return(
        <div className ="box" style={{marginLeft: '28%'}} >
            <div class="title">REGISRATION</div>
            
            <form onSubmit={sendData}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="Enter First Name" required onChange={(e)=>{

                            setFirstName(e.target.value);

                        }} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name" required onChange={(e)=>{

                            setLastName(e.target.value);

                        }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nic">NIC</label>
                        <input type="text" class="form-control" id="nic" placeholder="Enter Your NIC" required onChange={(e)=>{

                            setNIC(e.target.value);

                        }} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="contactNo">Contact Number</label>
                        <input type="text" class="form-control" id="contactNo" placeholder="Enter Contact Number" required onChange={(e)=>{

                        setContactNo(e.target.value);

                        }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="gender">Gender</label>
                        <input type="text" class="form-control" id="gender" placeholder="Select Your Gender" required onChange={(e)=>{

                        setGender(e.target.value);

                        }} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="date">Date Of Birth</label>
                        <input type="date" class="form-control" id="dateOfBirth" placeholder="Select Date" required onChange={(e)=>{

                        setDateOfBirth(e.target.value);

                        }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter Your Email" required onChange={(e)=>{

                        setEmail(e.target.value);

                        }} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="userName">User Name</label>
                        <input type="text" class="form-control" id="userName" placeholder="Enter User Name" required onChange={(e)=>{

                        setUserName(e.target.value);

                        }} />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="inputPassword" placeholder="Enter Password" required onChange={(e)=>{

                        setPassword(e.target.value);

                        }} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputRe-EnterPassword">Confirm Password</label>
                        <input type="password" class="form-control" id="inputRe-EnterPassword" placeholder="Re-Enter Your Password" required onChange={(e)=>{

                        setConfirmPassword(e.target.value);

                        }} />
                    </div>
                </div>
                <br></br>
                <div class= "" >
                    <a href="/Success"><button type="submit" class="button">SUBMIT</button></a>
                </div>

            </form>
            
        </div>
    )

}

