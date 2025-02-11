/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const basicUser = {
        name: 'John Doe',
        email: 'test@mail.com',
        role: 'customer'
    }
    const [user, setUser] = useState(basicUser);
    const [loading, setLoading] = useState(false)
    const value = {
        user,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;