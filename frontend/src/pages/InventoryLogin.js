import { useState } from 'react'
import { useInventoryLogin } from '../hooks/useInventoryLogin'
import { Link } from 'react-router-dom'

import { useInventoryLogout } from '../hooks/useInventoryLogout'


const InventoryLogin = () => {

    const { logout } = useInventoryLogout()

    const handleClick = () => {
        logout()
    }

    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading} = useInventoryLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(role, email, password)
    }

    return (
        <form className="inventoryLogin" onSubmit={handleSubmit}>

            <nav>
                <div className='buttonl'>
                    <button onClick={handleClick}>Log Out</button>
                </div>
            </nav>

            <nav>
                <div className='lslink'>
                    
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav> 
            <h3>Login</h3>
            
            <label>Job Role:</label>
            <select 
                onChange={(e) => setRole(e.target.value)}
                value={role}>
                <option value="admin">Admin</option>
                <option value="inventory manager">Inventory Manager</option>
            </select>

            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <div className='loginb'>
                <button disabled={isLoading}>Login</button>
            </div>
            
            {error && <div className='error'>{error}</div>}

            <h5 class="signup-link">Don't have an account? <span>Sign Up</span></h5>

        </form>
    )
}

export default InventoryLogin