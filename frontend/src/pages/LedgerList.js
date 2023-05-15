import { useEffect, useState } from "react"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

// components
import Ledgerl from '../components/Ledgerl'

const LedgerList = () => {

    const [pledger, setPledger] = useState(null)
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPledger = async () => {
            const response = await fetch('/api/pledger/')
            const json = await response.json()

            if (response.ok){
                json.sort((a, b) => a.description.localeCompare(b.description))    
                setPledger(json)
            }
        }

        fetchPledger()
    }, [])

    if (!pledger) {
        return <div>Loading...</div>;
      }

    const filteredPledger = pledger.filter(item => {
        return item.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
    
      // Group pledger array by description property
        const groupedPledger = filteredPledger.reduce((groups, item) => {
        const group = groups[item.description] || [];
        group.push(item);
        groups[item.description] = group;
        return groups;
      }, {});
    
    return (
        <div className="home6">

            <div className='headbox'>
                <h3>Inventory Management</h3>
            </div>

            <div className="plog">
                <h3>Inventory Ledger</h3>
            </div>

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
            <div className="searchb">
                <input style={{top: 170, borderRadius:34}} type="text" placeholder="Search by Description" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            

            {Object.entries(groupedPledger).map(([description, group]) => (
                <div key={description}>
                    <h3>.</h3>
                <div className="pledger">
                    {group.map((item) => (
                    <Ledgerl key={item._id} pledger={item} />
                    ))}
                </div>
                </div>
            ))}

           

            
        </div>
    )
}

export default LedgerList