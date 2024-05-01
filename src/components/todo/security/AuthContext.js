import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { jwtDecode } from "jwt-decode";
//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

     function login(token) {
        let t = jwtDecode(token)
        try {

                const jwtToken = 'Bearer ' + token
                setAuthenticated(true)
                setUsername(t.given_name)
                setToken(jwtToken)

                

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )

                
        } catch(error) {
            logout()
            return false
        }
    }


    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token}  }>
            {children}
        </AuthContext.Provider>
    )
} 