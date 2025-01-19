import React from 'react';
import useRole from '../Hooks/useRole';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const WorkerRoute = ({children}) => {
   
    const {role,isLoading} = useRole();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    if(role.role === 'worker') return children;
    return <Navigate to='/dashboard' replace='true' />

};

export default WorkerRoute;