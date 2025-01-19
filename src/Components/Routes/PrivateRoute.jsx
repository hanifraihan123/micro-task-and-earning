import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner";


const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth();
    const location = useLocation();


    if(loading) return <LoadingSpinner></LoadingSpinner>

    if(user){
        return children
    }
    else{
        <Navigate to="/login" state={location?.pathname} replace='true'></Navigate>
    }

};

export default PrivateRoute;