import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomerSidebar from '../components/CustomerSidebar';

function CrudComponent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setUser(response.data);
    });
  }, [id]);

  const handleViewUser = (id) => {
    navigate.push(`/users/${id}`);
  };

  return (
    <>
    <div>
        <Header/>
        <table class="table table-borderless">
        <tr>
      <th scope="row" style={{marginLeft:-1}}>   
    <CustomerSidebar/>
       </th>
       <th>
        <div className='container' style={{width:200,marginLeft:-650}}>
      <h2>User Details</h2>
      <p>FirstName: {user.firstname}</p>
      <p>LastName: {user.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Address: {user.address}</p>
      <p>NIC: {user.NIC}</p>

      <button onClick={() => handleViewUser(user._id)} style={{width:200,height:50}}>View</button>
      </div>
      </th>
      </tr>
      </table>
    </div>
    <Footer/>
    </>
  );
}

export default CrudComponent;
