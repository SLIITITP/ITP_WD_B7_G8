import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { iusers: action.payload }
        case 'LOGOUT':
            return { iusers: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        iusers: null
    })

    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}