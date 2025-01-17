import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const WorkerHome = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: submissions = []} = useQuery({
        queryKey: ['submissions'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/submissions/${user.email}`)
            return res.data
        }
    })

    const actualData = submissions.filter(submit=>submit.status === 'approved')
    const pendingData = submissions.filter(submit=>submit.status === 'pending')
    const rejectedData = submissions.filter(submit=>submit.status === 'rejected')

    return (
        <div>
            <h3 className="font-bold text-3xl text-center py-6">Total Submissions: {submissions?.length}</h3>
            <div className="flex gap-3 justify-between px-4 pb-4">
            <span className="font-bold text-xl text-center text-blue-500">Pending Submissions: {pendingData?.length}</span>
            <span className="font-bold text-xl text-center text-red-500">Rejected Submissions: {rejectedData?.length}</span>
            <span className="font-bold text-xl text-center text-green-500">Approved Submissions: {actualData?.length}</span>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Task Title</th>
        <th>Payable Amount</th>
        <th>Buyer Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        actualData.map((submit,index)=><tr key={submit._id}>
            <th>{index + 1}</th>
            <td>{submit.taskTitle}</td>
            <td>{submit.amount}</td>
            <td>{submit.buyerName}</td>
            <td>{submit.status}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default WorkerHome;