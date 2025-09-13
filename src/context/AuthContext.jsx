import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined)

export function AuthContextProvider ({children}){

    const [session, setSession] = useState(undefined)


    return (
        <AuthContext.Provider value={{session}} >
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
} 