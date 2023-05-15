import { useState } from "react"
import { useInventoryContext } from "../hooks/useInventoryContext"


const Itema = () => {
    const { dispatch } = useInventoryContext()

    const [itemimg, setItemimg] = useState('')
    const [itemid, setItemid] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setcat] = useState('')
    const [description, setdes] = useState('')
    const [bcode, setbcode] = useState('')

    const [error, setError] = useState(null)

    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const inventory = {itemimg, itemid, brand, category, description, bcode}

        const response = await fetch('/api/inventory', {
            method: 'POST', 
            body: JSON.stringify(inventory),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setItemimg('')
            setItemid('')
            setBrand('')
            setcat('')
            setdes('')
            setbcode('')
            setError(null)
            setEmptyFields([])
            console.log('New Item Added', json)
            dispatch({type: 'CREATE_INVENTORY', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <div className="form-head">
                <h3>ADD PRODUCT</h3>
            </div>

                <div className="label1">
                    <label>Product Image</label>
                    <input 
                        type="file"
                        onChange={(e) => setItemimg(e.target.value)}
                        value={itemimg}
                        className={emptyFields.includes('itemimg') ? 'error' : ''}
                    />
                </div>

                <label>Product ID</label>
                <input 
                    type="text"
                    onChange={(e) => setItemid(e.target.value)}
                    value={itemid}
                    className={emptyFields.includes('itemid') ? 'error' : ''}
                />
            
                <label>Brand</label>
                <input 
                    type="text"
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                    className={emptyFields.includes('brand') ? 'error' : ''}
                />

                <label>Category</label>
                <input 
                    type="text"
                    onChange={(e) => setcat(e.target.value)}
                    value={category}
                    className={emptyFields.includes('category') ? 'error' : ''}
                />

                <label>Description</label>
                <input 
                    type="text"
                    onChange={(e) => setdes(e.target.value)}
                    value={description}
                    className={emptyFields.includes('description') ? 'error' : ''}
                />

                <div className="label2">
                    <label>Barcode</label>
                    <input 
                        type="file"
                        onChange={(e) => setbcode(e.target.value)}
                        value={bcode}className={emptyFields.includes('bcode') ? 'error' : ''}
                    />
                </div>

            <button>ADD</button>    
            {error && <div className="error">{error}</div>}
            
            <button className="just">A</button>
            
        </form>
        
    )
}

export default Itema