const Ledgerl = ({pledger}) => {

    let color;
    if (pledger) {
        const transactionType = pledger.transaction.split('/')[1];
        switch (transactionType) {
        case 'REC':
            color = 'red';
            break;
        case 'DAM':
            color = 'mediumPurple';
            break;
        case 'RET':
            color = 'LawnGreen';
            break;
        case 'INV':
            color = 'yellow';
            break;
        default:
            color = 'white';
            break;
    }
    }
    return (
        
        <div className='ledview'>
                <div className="tb1">

                <div className="mth" >

                    <table className="mtable">
                        <tbody>
                        
                        <th>Year</th>
                                <th>January</th>
                                <th>February</th>
                                <th>March</th>
                                <th>April</th>
                                <th>May</th>
                                <th>June</th>
                                <th>July</th>
                                <th>August</th>
                                <th>September</th>
                                <th>October</th>
                                <th>November</th>
                                <th>December</th>

                                <tr >
                                <td>{pledger && pledger.year}</td>
                                <td>{pledger && pledger.jan}</td>
                                <td>{pledger && pledger.feb}</td>
                                <td>{pledger && pledger.march}</td>
                                <td>{pledger && pledger.apr}</td>
                                <td>{pledger && pledger.may}</td>
                                <td>{pledger && pledger.jun}</td>
                                <td>{pledger && pledger.jul}</td>
                                <td>{pledger && pledger.aug}</td>
                                <td>{pledger && pledger.sep}</td>
                                <td>{pledger && pledger.oct}</td>
                                <td>{pledger && pledger.nov}</td>
                                <td>{pledger && pledger.dec}</td>
                                
                            </tr>
               
                        </tbody>
                    </table>
                    </div>

                    <div>
                        <table className="ptable">
                        <tbody>

                            <tr >
                                <th>Cost Price</th>
                                <th>Margin Price</th>
                                <th>Selling Price</th>
                                
                            </tr>
                            <tr >
                                <td>{pledger && pledger.costp}</td>
                                <td>{pledger && pledger.marginp}</td>
                                <td>{pledger && pledger.sellingp}</td>
                                
                                
                            </tr>
</tbody>
                        </table>
                    </div>
                    <table className="table">
                        
                        <tbody >

                                <th>Brand</th>
                                <th>Description</th>
                                <th>Location</th>
                                <th>Re-order Qty</th>
                                <th>Re-order Level</th>
                                <th>Transaction Date</th>
                                <th>Transaction</th>
                                <th>Item Qty</th>
                                <th>Item Balance</th>
                    <tr >
                                <td >{pledger && pledger.brand}</td>
                                <td >{pledger && pledger.description}</td>
                                <td >{pledger && pledger.location}</td>
                                <td >{pledger && pledger.reorderqty}</td>
                                <td >{pledger && pledger.reorderlvl}</td>
                                <td >{pledger && pledger.tdate}</td>
                                <td style={{ color }}>{pledger && pledger.transaction}</td>
                                <td >{pledger && pledger.iqty}</td>
                                <td >{pledger && pledger.ibalance}</td>
                            </tr>

                        

                            
                    
                        </tbody>
                    </table>
                </div>

                

                <button className="just" style={{position:"absolute", top:2910}}>A</button>

               
        </div>
    )
}

export default Ledgerl