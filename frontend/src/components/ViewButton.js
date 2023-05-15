import React from 'react';
import axios from 'axios';

const ViewButton = ({ id, onView }) => {
    const fetchUserDetails = () => {
        axios.get(`http://localhost:5000/users/${id}`)
          .then((res) => {
            onView();
          })
          .catch((err) => {
            console.error(err);
        });
      };

  return (
    <button onClick={fetchUserDetails} style={{marginLeft:20,width:200,backgroundColor:"red"}}>View</button>
  );
};

export default ViewButton;
