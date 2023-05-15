// component
import Itema  from "../components/Itema"

import profile from '../images/avatar.png'
import droparrow from '../images/dropdown.png'

const ItemAdd = () => {

    return (
        <div className="home2">

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

            <Itema/>
        </div>
    )
}

export default ItemAdd