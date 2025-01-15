import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useRole = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: role = null,refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/${user.email}`)
            return res.data
        }
    })

    return {role,refetch}
};

export default useRole;