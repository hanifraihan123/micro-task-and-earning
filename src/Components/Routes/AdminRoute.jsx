import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import LoadingSpinner from "../Shared/LoadingSpinner";

const AdminRoute = ({children}) => {

    const {role,isLoading} = useRole();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    if(role.role === 'admin') return children;
    return <Navigate to='/dashboard' replace='true' />
};

export default AdminRoute;