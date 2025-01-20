import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";
import usePayments from "../Hooks/usePayments";
import { Helmet } from "react-helmet-async";

const BuyerHome = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [subs,setSubs] = useState();
    const [payments] = usePayments();
    const totalPayment = payments.reduce((total,payment)=> total + payment.amount, 0)
    const {data: submits = [],refetch} = useQuery({
        queryKey: ['submits',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/submits/${user?.email}`)
            return res.data
        },
        enabled: !!user?.email
    })

    const {data: tasks = [],refetch: update} = useQuery({
      queryKey: ['tasks',user?.email],
      queryFn: async()=>{
          const res = await axiosSecure.get(`/tasks/${user?.email}`)
          return res.data
      },
      enabled: !!user?.email
  })

  const pendingTask = tasks.reduce((total,task)=>total + task.workers,0)
 
    const handleApprove = async(id) => {
      const updateStatus = {
        status: 'approved'
      }
      const res = await axiosSecure.patch(`/submit/${id}`, updateStatus)
      if(res.data.modifiedCount > 0){
        refetch();
        const response = await axiosSecure.get(`/submit/${id}`)
        const email = response.data.workerEmail;
        const coin = response.data.amount;
        const result = await axiosSecure.patch(`updateCoin/${email}`, {coin})
        if(result.data.modifiedCount > 0){
          update()
          toast.success('Status Approved')
        }
      }
    }
    const handleReject = async(id) => {
      const updateStatus = {
        status: 'rejected'
      }
      const res = await axiosSecure.patch(`/submit/${id}`, updateStatus)
      if(res.data.modifiedCount > 0){
        refetch();
        const response = await axiosSecure.get(`/submit/${id}`)
        const taskId = response.data.taskId;
        const worker = 1;
        const result = await axiosSecure.patch(`/updateWorker/${taskId}`, {worker})
        if(result.data.modifiedCount > 0){
          update()
          toast.error('Status Rejected')
        }
      }
    }

    const handleSubmit = async(id) => {
      document.getElementById('submit_modal').showModal()
      await axiosSecure.get(`/submit/${id}`)
      .then(res=>{
        setSubs(res.data)
      })
    }

    return (
        <div className="pt-6">
                       <Helmet>
                        <title>PaidWork || BuyerHome</title>
                      </Helmet>
           <div className="lg:flex gap-2 lg:justify-between justify-center lg:px-6 text-blue-500">
           <p className="font-bold text-center">Total Task: {submits?.length}</p>
           <p className="font-bold text-center">Total Payment: {totalPayment}</p>
           <p className="font-bold text-center">Required Workers: {pendingTask}</p>
           </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Worker Name</th>
        <th>Task Title</th>
        <th>Payable Amount</th>
        <th>Status</th>
        <th>View</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        submits.map((submit)=><tr key={submit._id} submit={submit}>
            <td>{submit.workerName}</td>
            <td>{submit.taskTitle}</td>
            <td>{submit.amount}</td>
            <td>{submit.status}</td>
            <td><button onClick={()=>handleSubmit(submit._id)} className="btn btn-xs text-blue-500">View Submission</button></td>
            <td className="text-center"><button onClick={()=>handleApprove(submit._id)} className="btn btn-xs text-green-500 mb-2">Approve</button> <button onClick={()=>handleReject(submit._id)} className="btn btn-xs text-red-500">Reject</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="submit_modal" className="modal sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Sumission Details</h3>
    {subs && <p className="py-4">{subs.submissionDetails}</p>}
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default BuyerHome;