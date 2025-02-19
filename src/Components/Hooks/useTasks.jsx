import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useTasks = () => {

    const axiosPublic = useAxios();
    const {data: tasks = [],refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/tasks')
            return res.data
        }
    })


    return [tasks,refetch]
};

export default useTasks;