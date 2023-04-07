import React from 'react';
import { Navigate } from 'react-router-dom';

import { useStateContext } from '../context/contextProvider';


const ProtectedRoute = ({children}) => {

    const {user} = useStateContext()
    if (!user) {
        return <Navigate to ='/'/>
    }
    return <>
    {children}
    
    </>
}

export default ProtectedRoute
