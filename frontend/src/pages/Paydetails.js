import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import DeleteButton from '../components/Deletebutton';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';



export default function Paydetails(){

    const[payments,setPayments] = useState([]);
    
     useEffect(() => {
       function getPayments(){
        axios.get("http://localhost:5000/payments").then((res) =>{
           setPayments(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
       } 
       getPayments();
     },[])
    
      const handleDelete = () => {
        axios.delete('http://localhost:5000/payments')
          .then(res => {
            setPayments(res.data);
          })
          .catch(err => {
            alert();
          });
      };
return(
    <>
    <Header/>
        
    <div className="container">
        <div className="container1">
          <br></br>
            <div class="title1"><h4>Payment Details</h4></div>
        </div>
        <table class="table">
        <thead>
            <tr>
           <th scope="col">ID</th>
            <th scope="col">Name on card</th>
            <th scope="col">Number on card</th>
            <th scope="col">Expmonth</th>
            <th scope="col">Expyear</th>
            <th scope="col">CVV</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
             payments.map((payment) => (
                 <tr>
      
                 {<th>{payment._id}</th>}
                <td>{payment.nameoncard}</td>
                <td>{payment.numberoncard}</td>
                <td>{payment.expmonth}</td>
                <td>{payment.expyear}</td>
                <td>{payment.cvv}</td>
                <td>
                    <Link to={"/edit/"+payment._id}><button type="button" className="btn btn-primary">Update</button></Link>
                    <br></br>
                    <br></br>
                    <DeleteButton id={payment._id} onDelete={handleDelete} /> 

                </td>
                
                </tr>
                
                ))}
        </tbody>
        </table>
    </div>
    
</>
)
             }