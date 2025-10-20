import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.init';

export const AuthContext=createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const creatUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubScrib=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubScrib();
        }
    },[])
    const AuthData={
        user,
        setUser,
        creatUser,
        logOut,
        signIn,
        loading,
        setLoading
    }
    return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;