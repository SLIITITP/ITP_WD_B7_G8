import React from 'react';
import axios from 'axios';

const DeleteButton5 = ({ id, onDelete }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/partners/${id}`)
      .then(res => {
        onDelete();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    
    <button onClick={handleDelete} ClassName="btn btn-primary" style={{width: 80, height: 30, backgroundColor: '#c80000', color: 'white', border: 'red'}}>Delete</button>
  );
};

export default DeleteButton5;
