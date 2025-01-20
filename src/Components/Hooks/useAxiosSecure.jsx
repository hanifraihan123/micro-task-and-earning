import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://task-and-earning-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const {userLogout} = useAuth();
    const navigate = useNavigate();

    axiosInstance.interceptors.response.use(response=>{
        return response;
    },error=>{
        if(error.status == 401 || error.status == 403){
            userLogout()
            .then(()=>{
                navigate('/login')
            })
            .catch(error=>{
                console.log(error)
            })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;