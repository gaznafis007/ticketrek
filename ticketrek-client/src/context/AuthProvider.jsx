/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const basicUser = {
        name: 'John Doe',
        email: 'test@mail.com',
        role: 'admin'
    }
    const auth = getAuth(app);
    const [user, setUser] = useState(basicUser);
    const [loading, setLoading] = useState(true);
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const getProfile = (displayName) =>{
        return updateProfile(auth.currentUser, {displayName})
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const value = {
        user,
        setUser,
        loading,
        setLoading,
        register,
        login,
        getProfile,
        logOut
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setLoading(false)
            }
        })
        return () => unsubscribe()
    },[])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;