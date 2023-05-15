import { Link } from "react-router-dom"
import SidebarImage from '../images/home5.png'
import SidebarImage1 from '../images/employee5.png'
import SidebarImage2 from '../images/inventory5.png'
import SidebarImage3 from '../images/delivery5.png'
import SidebarImage4 from '../images/res5.png'

const Sidebar5 = () => {

    return (
        <header>
            <div className="container">
                    <Link>
                    <div className="cname">
                        <h3>AutoForce</h3>
                    </div>

                    <div className="sb">
                        <div className="nav-optionoption1">
                            <img src={SidebarImage} alt="home"/>
                        </div>

                        <div className="nav-optionoption2">
                            <img src={SidebarImage1} alt="emp"/>
                        </div>

                        <div className="nav-optionoption3">
                            <img src={SidebarImage2} alt="inv"/>
                        </div>

                        <div className="nav-optionoption4">
                            <img src={SidebarImage3} alt="del"/>
                        </div>

                        <div className="nav-optionoption5">
                            <img src={SidebarImage4} alt="res"/>
                        </div>
                    </div>

                    <div class="sb1">
                        <div class="sbmenu1">
                            <ul>
                                <li><a href="/">Home</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="sb2">
                        <div class="sbmenu2">
                            <ul>
                                <li><a href="/">Employee Mgt. System</a></li>          
                            </ul>
                        </div>
                    </div>

                    <div class="sb3">
                        <div class="sbmenu3">
                            <ul>
                            <li className="active"><a href="/">Inventory Mgt. System</a></li>          
                            </ul>
                        </div>
                    </div>

                    <div class="sb4">
                        <div class="sbmenu4">
                            <ul>
                            <li><a href="/">Delivery Mgt. System</a></li>          
                            </ul>
                        </div>
                    </div>

                    <div class="sb5">
                        <div class="sbmenu5">
                            <ul>
                                <li><a href="/">Status & Resource Mgt. System</a></li>          
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    )

    
}



export default Sidebar5