import { useState } from "react"

const Pleda = () => {
    
    const [brand, setb] = useState('')
    const [description, setds] = useState('')
    const [location, setl] = useState('')
    const [reorderqty, setroqty] = useState('')
    const [reorderlvl, setrol] = useState('')
    const [tdate, setdate] = useState('')
    const [transaction, settrans] = useState('')
    const [iqty, setiqty] = useState('')
    const [ibalance, setibal] = useState('')
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
    const [costp, setcost] = useState('')
    const [marginp, setmargin] = useState('')
    const [sellingp, setselling] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const pledger = {brand, description, location, reorderqty, reorderlvl, tdate, transaction, iqty, ibalance, year, jan, feb, march, apr, may, jun, jul, aug, sep, oct, nov, dec, costp, marginp, sellingp}
        
        const response = await fetch('/api/pledger', {
            method: 'POST', 
            body: JSON.stringify(pledger),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setb('')
            setds('')
            setl('')
            setroqty('')
            setrol('')
            setdate('')
            settrans('')
            setiqty('')
            setibal('')
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
            setcost('')
            setmargin('')
            setselling('')
            
            setError(null)
            
            console.log('New Item Transaction Added', json)
            
        }
    }

    return(
        <form className="tadd" onSubmit={handleSubmit}>
            <div className="form-head">
                <h3>ADD INVENTORY LEDGER</h3>
            </div>

            <div className="sub1">
                <h3>Add Transaction Details</h3>
            </div>

            <div className="dtail1">
                <label>Brand</label>
                <input 
                    type="text"
                    onChange={(e) => setb(e.target.value)}
                    value={brand}
                />
            </div>

            <div className="dtail2">
                <label>Description</label>
                <input 
                    type="text"
                    onChange={(e) => setds(e.target.value)}
                    value={description}
                />
            </div>
        
            <div className="dtail3">
                <label>Location</label>
                <input 
                    type="text"
                    onChange={(e) => setl(e.target.value)}
                    value={location}
                />
            </div>

            <div className="dtail4">
                <label>Re-order Quantity</label>
                <input 
                    type="number"
                    onChange={(e) => setroqty(e.target.value)}
                    value={reorderqty}
                />
            </div>

            <div className="dtail5">
                <label>Re-order Level</label>
                <input 
                    type="number"
                    onChange={(e) => setrol(e.target.value)}
                    value={reorderlvl}
                />
            </div>

            <div className="dtail6">
                <label>Transaction Date</label>
                <input 
                    type="date"
                    onChange={(e) => setdate(e.target.value)}
                    value={tdate}
                />
            </div>

            <div className="dtail7">
                <label>Transaction</label>
                <input 
                    type="text"
                    onChange={(e) => settrans(e.target.value)}
                    value={transaction}
                />
            </div>

            <div className="dtail8">
                <label>Inventory Qunatitiy</label>
                <input 
                    type="number"
                    onChange={(e) => setiqty(e.target.value)}
                    value={iqty}
                />
            </div>

            <div className="dtail9">
                <label>Inventory Balance</label>
                <input 
                    type="number"
                    onChange={(e) => setibal(e.target.value)}
                    value={ibalance}
                />
            </div>

            <div className="sub2">
                <h3>Add Monthly Qunatities</h3>
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

            <button style={{position:"absolute", top:3250, left:790}}>ADD</button>    
            {error && <div className="error">{error}</div>}
            
            <button className="just" style={{position:"absolute", top:4310}}>A</button>

            
            
        </form>
    
        
    )
}

export default Pleda