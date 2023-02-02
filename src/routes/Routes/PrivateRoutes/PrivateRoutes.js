import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation()


    if(loading){
        return <p>Loading...</p>
    }
    
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;