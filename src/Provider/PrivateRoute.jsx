import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,load} = useContext(AuthContext)
    if(load){
        return <span className="loading loading-dots loading-lg"></span>

    }
    if(user){
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default PrivateRoute;