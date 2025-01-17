import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";

const BuyerHome = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [submit,setSubmit] = useState()
    const {data: tasks = []} = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/submits/${user?.email}`)
            return res.data
        }
    })

    const handleApprove = async(id) => {
      const updateStatus = {
        status: 'approved'
      }
      const res = await axiosSecure.patch(`/submit/${id}`, updateStatus)
      if(res.data.modifiedCount > 0){
        toast.success('Status Approved')
      }
    }
    const handleReject = async(id) => {
      const updateStatus = {
        status: 'rejected'
      }
      const res = await axiosSecure.patch(`/submit/${id}`, updateStatus)
      if(res.data.modifiedCount > 0){
        toast.error('Status Rejected')
      }
    }

    const handleSubmit = async(id) => {
      document.getElementById('submit_modal').showModal()
      await axiosSecure.get(`/submit/${id}`)
      .then(res=>{
        setSubmit(res.data)
      })
    }

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
            <td><button onClick={()=>handleSubmit(task._id)} className="btn btn-xs text-blue-500">View Submission</button></td>
            <td><button onClick={()=>handleApprove(task._id)} className="btn btn-xs text-green-500 mr-2">Approve</button> <button onClick={()=>handleReject(task._id)} className="btn btn-xs text-red-500">Reject</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="submit_modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Sumission Details</h3>
    {submit && <p className="py-4">{submit.submissionDetails}</p>}
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