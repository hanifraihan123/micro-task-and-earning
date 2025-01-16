import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MySubmission = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: submits = []} = useQuery({
        queryKey: ['submits'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/submissions/${user?.email}`)
            return res.data
        }
    })

  return (
    <div>
      <h3 className="font-bold text-3xl text-center py-6">My Submission: {submits.length}</h3>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Worker Name</th>
        <th>Worker Email</th>
        <th>Task Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        submits.map((submit,index)=><tr key={submit._id} submit={submit}>
            <th>{index + 1}</th>
            <td>{submit.workerName}</td>
            <td>{submit.workerEmail}</td>
            <td>{submit.taskTitle}</td>
            <td className="text-blue-500">{submit.status}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MySubmission;
