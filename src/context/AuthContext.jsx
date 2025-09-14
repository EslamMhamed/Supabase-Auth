import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase_client";

const AuthContext = createContext(undefined)

export function AuthContextProvider ({children}){

    const [session, setSession] = useState(undefined)

    async function signUpNewUser(email, password) {
        const {data,error} = await supabase.auth.signUp({email, password})

        if(error){
            console.error("there was a problem signup :",error)

            return {success: false, error}
        }

            return {success: true, data}
    }

    async function signInUser(email, password) {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({email, password})

            if(error){
                console.error("there was a problem signin", error.message)
            return {success: false, data}
        }
        return {success: true , data}

        } catch (error) {
        console.error("an error occurred", error)
        }

    }

    async function signOut(){
        const {data, error} = await supabase.auth.signOut()

        if(error){
            console.error("there was a problem signout", error)
            return {success: false, data}
        }
        return {success: true , data}
    }



    useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
    });
}, []);


    return (
        <AuthContext.Provider value={{session, signUpNewUser, signInUser, signOut}} >
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
} 