import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const MyTasks = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: tasks=[],refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h3 className="font-bold text-center text-3xl py-6">My Tasks : {tasks.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Title</th>
        <th>Task Details</th>
        <th>Submission Details</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.map((task,index)=><tr key={task._id} task={task}>
            <th>{index + 1}</th>
            <td>{task.title}</td>
            <td>{task.details}</td>
            <td>{task.info}</td>
            <td><button className="btn btn-xs mr-2 text-green-500">Update</button> <button className="btn btn-xs text-red-500">Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyTasks;