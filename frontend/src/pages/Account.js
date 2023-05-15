import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import { Link } from "react-router-dom";

export default function Account(){


  const[users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


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


  const handleDelete = () => {
    axios.delete('http://localhost:5000/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredUsers = users.filter((user) =>
    user.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
        <>
        <Header/>
        
        <table class="table table-borderless">
        <tr>
      <th scope="row" style={{marginLeft:-1}}>       
       </th>
      <td>
      <div className="container" style={{width:1000,height:500,backgroundColor:"white"}}>
        <div>
      <form class="row g-3" style={{width:900,backgroundColor:"white",height:560}}>
        <h3 style={{marginLeft:40}}><b>All Customers</b></h3>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleSearch} />
        <a href = "/report"><button type="button" class="btn btn-primary" style={{marginLeft:30,backgroundColor:"#002D62"}}>Finalize Report</button></a>

      </form>
        <div>
      {filteredUsers.length === 0 ? (
        <p style={{marginLeft:80}}>No users found.</p>
      ) : (
        filteredUsers.map(user => (
          <div key={user._id}>
            <br></br>
            <br></br>
                <ul className="list-group" style={{width:400,marginLeft:280}}>
                <li className="list-group-item">UserType:{user.userType}</li>
                  <li className="list-group-item">FirstName:{user.firstname}</li>
                  <li className="list-group-item">LastName:{user.lastname}</li>
                  <li className="list-group-item">PhoneNumber:{user.phoneNumber}</li>
                  <li className="list-group-item">Email:{user.email}</li>
                  <li className="list-group-item">Address:{user.address}</li>
                  <li className="list-group-item">NIC:{user.NIC}</li>
                </ul>  
                <br/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="btn-group" role="group" aria-label="Basic example" style={{padding:20}}>
                  <Link to={"/edit/"+user._id}><button type="button" style={{backgroundColor:"blue",width:200,marginLeft:80}}>Edit</button></Link>
                  <DeleteButton id={user._id} onDelete={handleDelete} />
                  <div>
            </div>
                </div>
              </div>
        ))
      )}
    </div>
    <br></br>
    <br></br>
    </form>
    </div>
      </div>
      </td>
      
    </tr>
</table>
        
        </>
    )
}