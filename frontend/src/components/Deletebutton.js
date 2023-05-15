import React from 'react';
import axios from 'axios';

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/payments/${id}`)
      .then(res => {
        onDelete();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <button onClick={handleDelete} className="btn btn-primary">Delete</button>
  );
};

export default DeleteButton;
