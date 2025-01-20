import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-and-earning-server.vercel.app'
})

const useAxios = () => {
     return axiosPublic
    }

export default useAxios;