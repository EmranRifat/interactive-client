import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext=createContext()
const auth=getAuth(app)

export const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    const [loading ,setLoading]=useState(false)


 const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
 
 const logIn=(email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
    
 }


 
 useEffect(()=>{
   const unsubcribe= onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);

    });
    return ()=>{
        return unsubcribe();
    }
 },[])






    const authInfo= {user,loading,createUser,logIn}
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;