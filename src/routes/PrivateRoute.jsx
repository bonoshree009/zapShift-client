import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading) {
        return <div><span className="loading loading-bars loading-xl"></span></div>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children
        
    ;
};

export default PrivateRoute;