import { useRef } from "react"
import { Link } from "react-router-dom"

import { useInventoryContext } from "../hooks/useInventoryContext"
import MyImg from "../images/A106bcd.jpg"
import mycd from "../images/A106.jpeg"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import {useReactToPrint} from "react-to-print"

const Iteml = ({ inventory }) => {
    const { dispatch } = useInventoryContext()   

    const componentPDF = useRef()

    const handleClick = async () => {
        const response = await fetch('/api/inventory/' + inventory._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_INVENTORY', payload: json})
        }
    }

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current, 
        documentTitle: "AutoForce Inventory Log",
        onAfterPrint: () => alert("Data Saved to PDF")
    });

    return (
        
        <div className="item-list">

        <div ref={componentPDF} >
                <h5>{inventory.itemid}</h5>
                <div className="timage">
                    <p><strong>Image:</strong></p>
                    <img src={MyImg} alt="Uploade"/>
                </div>
                <p><strong>Brand:</strong>{inventory.brand}</p>
                <p><strong>Category:</strong>{inventory.category}</p>
                <p><strong>Description:</strong>{inventory.description}</p>
                <div className="bimage">
                    <p><strong>Barcode:</strong></p>
                    <img src={mycd} alt="Uploaded"/>
                </div>
                
                <p>{formatDistanceToNow(new Date(inventory.createdAt), { addSuffix: true })}</p>
        </div>  

            <div>
                <button className="pdfgen" onClick={ generatePDF } style={{width: 150, position:"absolute", top: 510, right:50, borderRadius: 5}}>Get PDF</button>
            </div>  

                <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
                <Link to={"/update/"+inventory._id}><span className="material-symbols-outlined" style={{position:"absolute", top:80, right:20}}>edit</span></Link>
               

        </div>
    )

    
}

export default Iteml