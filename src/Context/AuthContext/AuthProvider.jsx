import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from './AuthContext';




const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setuser] =useState(null)
const [loading, setloading] = useState(true)

    const registeruser =(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const signInUser =(email,password) =>{
         setloading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    

    const googlelogin =()=>{
         setloading(true)
        return signInWithPopup(auth,provider)
    }
    const logout =()=>{
        setloading(true)
        return signOut(auth)
    }


  
    const updateuserprofile = (profile) => {
  return updateProfile(auth.currentUser, profile);
};

    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (currentuser)=>{

            setuser(currentuser)
            setloading(false)
        })
        return () => unSubscribe();
    },
    
  


     [])

    const authinfo= { user, loading, registeruser,signInUser, googlelogin,logout, updateuserprofile}
    return (
        <AuthContext value={authinfo}> {children}
        </AuthContext>
    );
};

export default AuthProvider;