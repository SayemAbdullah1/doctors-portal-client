import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../../firebase/Firebase.config';

export const authContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password) 
    }

    const logout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setLoading(false)
            setUser(currentUser)
        })
        return ()=> unsubscribe()
    } ,[])

const authInfo = {
    createUser,
    login,
    user,
    loading,
    logout
}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;