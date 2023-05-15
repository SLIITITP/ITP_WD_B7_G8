import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useInventorySignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async(role, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/iusers/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({role, email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to loacal storage
            localStorage.setItem('iusers', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}