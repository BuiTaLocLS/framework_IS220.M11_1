import React, { createContext, useState, useEffect, useReducer } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setAuthentication] = useState(false)
    const [name, setName] = useState("")
    const handleSetAuth = (b) => {
        if (b === -1) {
            setAuthentication(false)
        }
        else {
            setAuthentication(true)
        }
    }

    const authContextData = {
        isAuthenticated,
        handleSetAuth,
        name,
        setName
    }

    // return
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider