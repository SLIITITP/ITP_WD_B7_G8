import {useRef} from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton5 from'../components/DeleteButton5';
import {Link} from "react-router-dom";


import  {useReactToPrint} from 'react-to-print';



export default function Profiles(){


    const [details, setDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const componentPDF = useRef()

        useEffect(() => {
                function getDetails() {
                    axios
                        .get('http://localhost:5000/partners')
                        .then((res) => {
                            console.log(res)
                            setDetails(res.data)
                        }).catch((err) => {
                            alert(err.message)
                        });
                }
            getDetails();
        },[])
  
    

    const handleDelete =() => {
        axios.delete('http://localhost:5000/partners')
        .then(res => {
            setDetails(res.data);
        })
        .catch(err => {
            alert();
        });
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        };
      const filteredUsers = details.filter((detail) =>
        detail.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        detail.firstName.toUpperCase().includes(searchTerm.toUpperCase())
    );


    const generatePDF = useReactToPrint({
        content: () => componentPDF.current, 
        documentTitle: "AutoForce Delivery Log",
        onAfterPrint: () => alert("Data Saved to PDF")
})
   

    return(

    
        <div className="box">

            <div ref = {componentPDF}>
                <div className="container1">
                    <div class="title1">Delivery Partner Profiles</div>
                </div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleSearch} style={{marginLeft:'10%'}}/>
                </form>

                <br></br><br></br>
                <table class="table" style={{ marginLeft:'10%', background:'#cacaca'}}>
                    <thead>
                        <tr>
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Contact NO</th>
                        <th scope="col">NIC</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        filteredUsers.map((detail) => (
                            
                            <tr>
                                {/*<th>{detail._id}</th>*/}
                                <td>{detail.firstName}</td>
                                <td>{detail.lastName}</td>
                                <td>{detail.contactNo}</td>
                                <td>{detail.nic}</td>
                                <td>{detail.dateOfBirth}</td>
                                <td>{detail.gender}</td>
                                <td>{detail.email}</td>
                                <td>
                                    <Link to={"/edit/"+detail._id}><button type='button' style={{width: 80, height: 30, backgroundColor: 'green', color: 'white', border: 'green'}}>Edit</button></Link> <br></br><br></br>
                                    <DeleteButton5 id={detail._id} onDelete={handleDelete} />
                                    <div>
                                        <button className="pdfgen" onClick={ generatePDF } style={{width: 90, height:40, position:"absolute", top: 240, right:'14%', borderRadius: 5}}>Get PDF</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}