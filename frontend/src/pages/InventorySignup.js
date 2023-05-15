import { useInventorySignup } from "../hooks/useInventorySignup"
import { Link } from 'react-router-dom'

import { useInventoryLogout } from '../hooks/useInventoryLogout'

const { useState } = require("react")

const InventorySignup = () => {

    const { logout } = useInventoryLogout()

    const handleClick = () => {
        logout()
    }

    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useInventorySignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(role, email, password)
    }

    return (
        <form className="inventorySignup" onSubmit={handleSubmit}>

            <nav>
                <div>
                    <button onClick={handleClick}>Log Out</button>
                </div>
            </nav>

            <h3>Sign Up</h3>
            
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
                <button disabled={isLoading}>Sign Up</button>
            </div>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default InventorySignup