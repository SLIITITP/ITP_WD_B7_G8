import { useState } from "react"

const Pricea = () => {
    
    const [costp, setcost] = useState('')
    const [marginp, setmargin] = useState('')
    const [sellingp, setselling] = useState('')
    
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const pricetrack = {costp, marginp, sellingp}
        
        const response = await fetch('/api/pricetrack', {
            method: 'POST', 
            body: JSON.stringify(pricetrack),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setcost('')
            setmargin('')
            setselling('')
            
            setError(null)
            
            console.log('Prices Added', json)
            
        }
    }

    return(
        <form className="padd" onSubmit={handleSubmit}>
            <div className="form-head">
                <h3>ADD INVENTORY LEDGER</h3>
            </div>

            <div className="sub3">
                <h3>Add Price Details</h3>
            </div>

            <div className="pr1">
                <label>Cost Price</label>
                <input 
                    type="number"
                    onChange={(e) => setcost(e.target.value)}
                    value={costp}
                />
            </div>

            <div className="pr2">
                <label>Margin Price</label>
                <input 
                    type="number"
                    onChange={(e) => setmargin(e.target.value)}
                    value={marginp}
                />
            </div>
        
            <div className="pr3">
                <label>Selling Price</label>
                <input 
                    type="text"
                    onChange={(e) => setselling(e.target.value)}
                    value={sellingp}
                />
            </div>

            <button style={{position:"absolute", top:630, left:790}}>ADD</button>    
            {error && <div className="error">{error}</div>}
            
            <button className="just" style={{position:"absolute", top:690}}>A</button>

            
            
        </form>
    
        
    )
}

export default Pricea