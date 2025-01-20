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
    const payableAmount = actualData.reduce((total,item)=> total + item.amount,0)

    return (
        <div>
            <h3 className="font-bold text-2xl text-center py-6">Total Submissions: {submissions?.length}</h3>
            <div className="flex lg:flex-row md:flex-row flex-col gap-3 lg:justify-between justify-center lg:px-4 pb-4">
            <span className="font-bold text-md text-center text-blue-500">Pending Submissions: {pendingData?.length}</span>
            <span className="font-bold text-md text-center text-pink-800">Payable Amount: {payableAmount}</span>
            <span className="font-bold text-md text-center text-red-500">Rejected Submissions: {rejectedData?.length}</span>
            <span className="font-bold text-md text-center text-green-500">Approved Submissions: {actualData?.length}</span>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Task Title</th>
        <th>Payable Amount</th>
        <th>Buyer Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        actualData.map((submit)=><tr key={submit._id}>
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