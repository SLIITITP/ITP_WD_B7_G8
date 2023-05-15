import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

import Footer from "../components/Footer";

const EditPay=()=>{
  const [nameoncard, setnameoncard] = useState("");
  const [numberoncard, setnumberoncard] = useState("");
  const [expmonth, setexpmonth] = useState("");
  const [expyear, setexpyear] = useState("");
  const [cvv, setcvv] = useState("");
  
  const [error, setError] = useState();

  const params = useParams();

  const getSelectedPayment = () => {
    axios.get(`http://localhost:5000/payments/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setnameoncard(response.data.nameoncard);
        setnumberoncard(response.data.numberoncard);
        setexpmonth(response.data.expmonth);
        setexpyear(response.data.expyear);
        setcvv(response.data.cvv);
      })
    }

    useEffect(()=>{
      getSelectedPayment();
    },[]);

  const updatePaymentDetails = (e) => {
    e.preventDefault();

    let updateData = {
      nameoncard: nameoncard,
      numberoncard: numberoncard,
      expmonth: expmonth,
      expyear: expyear,
      cvv: cvv,
    }

    axios.put(`http://localhost:5000/payments/${params.id}`, updateData)
      .then(() => {
        alert("Payment details updated")
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }

    return(
      <>
      
      <div className="container" style={{backgroundColor:"#0A063D",width:1000,marginBottom:-11,height:650}}>
        <form className="createUpdate"  class="row g-3" style={{width:800,marginLeft:90,backgroundColor:"#D3D9CA",marginTop:-33,height:590}}>

            <div className='headbox'>
            </div>

            <div className="form-head">
                <h3>Update Payment Details</h3>
            </div>

                
            <div class="col-md-6">
                <label for="nameoncard" class="form-label">Name on card</label>
                <input type="text" class="form-control" onChange={(e)=>
                    setnameoncard(e.target.value)}
                    value={nameoncard}
                />
                </div>

                <div class="col-md-6">
                <label for="numberoncard" class="form-label">Number on card</label>
                <input type="text" class="form-control" onChange={(e)=>
                    setnumberoncard(e.target.value)}
                    value={numberoncard}
                />
                </div>
                  
                <div class="col-md-6">
                <label for="expmonth" class="form-label">Exp Month</label>
                <input type="text" class="form-control" onChange={(e)=>
                    setexpmonth(e.target.value)}
                    value={expmonth}
                />
                </div>

                <div class="col-md-6">
                <label for="expyear" class="form-label">Exp Year</label>
                <input type="text" class="form-control" onChange={(e)=>
                    setexpyear(e.target.value)}
                    value={expyear} 
                />
                </div>

                <div class="col-md-6">
                <label for="cvv" class="form-label">CVV</label>
                <input type="number" class="form-control" onChange={(e)=>
                    setcvv(e.target.value)}
                    value={cvv} 
                />
                </div>

               

                
            <div class="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
            <button  onClick={updatePaymentDetails} style={{marginLeft:300,backgroundColor:"#002D62",color:"white",height:40}}>Update</button> 
            <a href = "/Paydetails"><button type="button" class="btn btn-primary" style={{marginLeft:30,backgroundColor:"#002D62"}}>Back</button></a>
            </div>   
            {error && <div className="error">{error}</div>}
            
            
        </form>
        </div>
        <Footer/>
        </>
    )
}
export default EditPay;