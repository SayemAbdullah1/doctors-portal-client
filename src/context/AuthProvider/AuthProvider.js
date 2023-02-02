import React, { createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/Firebase.config';

export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{

    } ,[])

const authInfo = {
    createUser
}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;