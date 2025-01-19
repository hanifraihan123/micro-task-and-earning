import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayments = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: payments = [], refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })

    return [payments,refetch]
};

export default usePayments;