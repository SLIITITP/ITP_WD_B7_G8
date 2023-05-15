import { useAuthContext } from "./useAuthContext"

export const useInventoryLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('iusers')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}