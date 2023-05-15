import { useState } from "react"

const Ledgera = () => {
    const [description, setdescript] = useState('')
    const [year, setyear] = useState('')
    const [jan, setj] = useState('')
    const [feb, setf] = useState('')
    const [march, setma] = useState('')
    const [apr, seta] = useState('')
    const [may, setm] = useState('')
    const [jun, setjn] = useState('')
    const [jul, setjl] = useState('')
    const [aug, setag] = useState('')
    const [sep, sets] = useState('')
    const [oct, seto] = useState('')
    const [nov, setn] = useState('')
    const [dec, setd] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const monthqty = {description, year, jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec}
        
        const response = await fetch('/api/monthqty', {
            method: 'POST', 
            body: JSON.stringify(monthqty),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setdescript('')
            setyear('')
            setj('')
            setf('')
            setma('')
            seta('')
            setm('')
            setjn('')
            setjl('')
            setag('')
            sets('')
            seto('')
            setn('')
            setd('')
            setError(null)
            
            console.log('New Month Qunatities Added', json)
            
        }
    }

    return(
        <form className="ladd" onSubmit={handleSubmit}>
            <div className="form-head">
                <h3>ADD INVENTORY LEDGER</h3>
            </div>

            <div className="sub1">
                <h3>Add Monthly Qunatities</h3>
            </div>
            
            <div className="l0">
                <label>Description</label>
                <input
                    type="text"
                    onChange={(e) => setdescript(e.target.value)}
                    value={description}
                />
            </div>
                
            <div className="l1">
                <label>Year</label>
                <input
                    type="number"
                    onChange={(e) => setyear(e.target.value)}
                    value={year}
                />
            </div>
            
            <div className="m1">
                <label>Jan</label>
                <input 
                    type="number"
                    onChange={(e) => setj(e.target.value)}
                    value={jan}
                />
            </div>

            <div className="m2">
                <label>Feb</label>
                <input 
                    type="number"
                    onChange={(e) => setf(e.target.value)}
                    value={feb}
                />
            </div>
        
            <div className="m3">
                <label>March</label>
                <input 
                    type="number"
                    onChange={(e) => setma(e.target.value)}
                    value={march}
                />
            </div>

            <div className="m4">
                <label>April</label>
                <input 
                    type="number"
                    onChange={(e) => seta(e.target.value)}
                    value={apr}
                />
            </div>

            <div className="m5">
                <label>May</label>
                <input 
                    type="number"
                    onChange={(e) => setm(e.target.value)}
                    value={may}
                />
            </div>

            <div className="m6">
                <label>June</label>
                <input 
                    type="number"
                    onChange={(e) => setjn(e.target.value)}
                    value={jun}
                />
            </div>

            <div className="m7">
                <label>July</label>
                <input 
                    type="number"
                    onChange={(e) => setjl(e.target.value)}
                    value={jul}
                />
            </div>

            <div className="m8">
                <label>Aug</label>
                <input 
                    type="number"
                    onChange={(e) => setag(e.target.value)}
                    value={aug}
                />
            </div>

            <div className="m9">
                <label>Sep</label>
                <input 
                    type="number"
                    onChange={(e) => sets(e.target.value)}
                    value={sep}
                />
            </div>

            <div className="m10">
                <label>Oct</label>
                <input 
                    type="number"
                    onChange={(e) => seto(e.target.value)}
                    value={oct}
                />
            </div>

            <div className="m11">
                <label>Nov</label>
                <input 
                    type="number"
                    onChange={(e) => setn(e.target.value)}
                    value={nov}
                />
            </div>

            <div className="m12">
                <label>Dec</label>
                <input 
                    type="number"
                    onChange={(e) => setd(e.target.value)}
                    value={dec}
                />
            </div>

            
            

            <button style={{position:"absolute", top:920, left:790}}>ADD</button>    
            {error && <div className="error">{error}</div>}
            
            <button className="just" style={{position:"absolute", top:960}}>A</button>

            
            
        </form>
    
        
    )
}

export default Ledgera