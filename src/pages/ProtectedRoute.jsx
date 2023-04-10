import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useStateContext } from '../context/contextProvider';


const ProtectedRoute = () => {

    const {user} = useStateContext()
    if (!user) {
        return <Navigate to ='/'/>
    }
    return <Outlet/>
    
}

export default ProtectedRoute
