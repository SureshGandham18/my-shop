import React,{createContext,useContext, useState,useEffect} from 'react';
import {auth} from './firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [currentUser,setCurrentUser] = useState(null);
    async function signUp(email,password){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            return userCredential;
        }catch(error){
            console.error('Signup error',error);
            throw error;
        }
        
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        });
        
        return () =>{
            unsubscribe();
        }
    },[])
    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext);
}