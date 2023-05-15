import React from "react";
import axios from "axios";


const Updatebutton5 = ({ id, onUpdate }) => {
    const handleUpdate = () => {
      axios.put(`http://localhost:5000/partners/${id}`)
        .then(res => {
          onUpdate();
        })
        .catch(err => {
          console.error(err);
        });
    };

    return (
        <button onClick={handleUpdate} className="btn btn-primary" style={{marginLeft:'100%'}}>Update</button>
      );
    };
    
    export default Updatebutton5;
    
