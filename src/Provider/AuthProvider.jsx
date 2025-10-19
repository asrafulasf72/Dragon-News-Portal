import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export const AuthContext=createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user)

    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubScrib=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubScrib();
        }
    },[])
    const AuthData={
        user,
        setUser,
        creatUser
    }
    return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;