import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const BuyerHome = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: tasks = []} = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/submits/${user?.email}`)
            return res.data
        }
    })

    return (
        <div>
            <h3 className="font-bold text-3xl text-center py-6">Home</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Worker Name</th>
        <th>Task Title</th>
        <th>Payable Amount</th>
        <th>View</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.map((task,index)=><tr key={task._id} task={task}>
            <th>{index + 1}</th>
            <td>{task.workerName}</td>
            <td>{task.taskTitle}</td>
            <td>{task.amount}</td>
            <td><button className="btn btn-xs text-blue-500">View Submission</button></td>
            <td><button className="btn btn-xs text-green-500 mr-2">Approve</button> <button className="btn btn-xs text-red-500">Reject</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default BuyerHome;