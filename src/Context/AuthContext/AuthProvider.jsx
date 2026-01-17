import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    
    const registeruser =(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const signInUser =(email,password) =>{
        return signInWithEmailAndPassword (auth,email,password)
    }

    const authinfo= {registeruser,signInUser}
    return (
      
            
        </AuthContext>
    );
};

export default AuthProvider;