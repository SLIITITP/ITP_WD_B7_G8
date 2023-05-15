import { useEffect, useState } from "react"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

// components
import Iteml from '../components/Iteml'

const ItemList = () => {

    const [inventory, setInventory] = useState(null)

    useEffect(() => {
        const fetchInventory = async () => {
            const response = await fetch('/api/inventory/')
            const json = await response.json()

            if (response.ok){
                setInventory(json)
            }
        }

        fetchInventory()
    }, [])

    const searchHandle = async(event) => {

        let key = event.target.value;
        if(key){
            let result = await fetch(`/api/inventory/${key}`);
            result = await result.json();
            if(result){
                setInventory(result)
            }
        }
        
    }


    return (
        <div className="home1">

            <div className='headbox'>
                <h3>Inventory Management</h3>
            </div>

            <div className="plog">
                <h3>PRODUCT LOG</h3>
            </div>

            <input type="text" className="search-product-box" placeholder="Search Item"
                onChange={searchHandle}
            />

            

            <div class="profile">
                <div class="avatar">
                    <img src={profile} alt="avatar"/>
                </div>
                <div class="dropdown">
                    <button class="dropbtn"><img src={droparrow} alt="darrow"/></button>
                    <div class="dropdown-content">
                        <a href="/">Employee Name</a>
                        <a href="/">Settings</a>
                        <a href="/">Logout</a>
                    </div>
                </div>
            </div>

            <div className="inventory">
                { Array.isArray(inventory) && inventory.map((inventory) => (
                    <Iteml key={inventory._id} inventory={inventory} />
                )) }
            </div>
        </div>
    )
}

export default ItemList