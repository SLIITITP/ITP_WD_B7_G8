import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";



const UpdateComponent = () => {

  
    const [itemid, setItemid] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setcat] = useState('')
    const [description, setdes] = useState('')
  

    const [error, setError] = useState(null)

    const params = useParams();

    const getSelectedInventory = () => {
        axios.get(`/api/inventory/${params.id}`)
          .then((response) => {
            console.log(response.data);
          // setValues(response.data.data);
          // setItemimg(response.data.data.itemimg);
          setItemid(response.data.itemid);
          setBrand(response.data.brand);
          setcat(response.data.category);
          setdes(response.data.description);
          //setbcode(response.data.bcode);
      
          })
      }

      useEffect(() => {
        getSelectedInventory();
      },[]);

      const updateInventoryDetails = (e) => {
        e.preventDefault();
    
        let updateData = {
          
          itemid: itemid,
          brand: brand,
          category: category,
          description: description,
          
        }
    
        axios.put(`/api/inventory/${params.id}`,updateData)
          .then((response) => {
            console.log("updated successfully");
            
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          })
      }

    return(
        <form className="createUpdate" >

            <div className='headbox'>
                <h3>Inventory Management</h3>
            </div>

            <div className="form-head">
                <h3>UPDATE PRODUCT</h3>
            </div>

                

                <label>Product ID</label>
                <input 
                    type="text"
                    onChange={(e) => setItemid(e.target.value)}
                    value={itemid}
                    
                />
            
                <label>Brand</label>
                <input 
                    type="text"
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                    
                />

                <label>Category</label>
                <input 
                    type="text"
                    onChange={(e) => setcat(e.target.value)}
                    value={category}
                    
                />

                <label>Description</label>
                <input 
                    type="text"
                    onChange={(e) => setdes(e.target.value)}
                    value={description}
                    
                />

                

            <button className="u" onClick={updateInventoryDetails}>UPDATE</button>    
            {error && <div className="error">{error}</div>}
            
            <button className="just">A</button>
            
        </form>
        
    )
}

export default UpdateComponent