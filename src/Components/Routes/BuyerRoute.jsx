import React from 'react';
import useRole from '../Hooks/useRole';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const BuyerRoute = ({children}) => {

    const {role,isLoading} = useRole();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    if(role.role === 'buyer') return children;
    return <Navigate to='/dashboard' replace='true' />

};

export default BuyerRoute;