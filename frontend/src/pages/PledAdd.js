// component
import Pleda from "../components/Pleda"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

const PledAdd = () => {

    return (
        <div className="home4">

            <div className='headbox'>
                <h3>Inventory Management</h3>
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

            <Pleda/>
        </div>
    )
}

export default PledAdd