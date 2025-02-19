import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";


const TaskDetails = () => {

    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const {user} = useAuth();
    const {data: task = {}} = useQuery({
        queryKey: ['task'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/task/${id}`)
            return res.data
        }
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const submissionInfo = {
            taskId: task._id,
            taskTitle: task.title,
            taskDetails: task.details,
            workerQty: task.workers,
            amount: task.amount,
            workerName: user?.displayName,
            workerEmail: user?.email,
            submissionDetails: form.details.value,
            buyerName: task.name,
            buyerEmail: task.email,
            currentDate: new Date(),
            status: 'pending'
        }
        const res = await axiosSecure.post('/submission', submissionInfo)
        if(res.data.insertedId){
            toast.success('Task Form Submited Successfully')
            setTimeout(()=>{navigate('/dashboard/mySubmission')},2000)
        }
    }

    return (
        <div>
                         <Helmet>
                          <title>PaidWork || Task Details</title>
                        </Helmet>
           <h3 className="font-bold text-3xl text-center py-6">Task Details</h3> 
           <div className="px-6 pb-6">
           <div className="card bg-orange-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Title: {task.title}</h2>
    <p>Description: {task.details}</p>
    <p>Info: {task.info}</p>
    <p>Workers: {task.workers}</p>
    <p>Amount: {task.amount}</p>
    <p>Buyer Name: {task.name}</p>
    <p>Buyer Email: {task.email}</p>
    <p>Deadline: {task.deadline && format(new Date(task.deadline), 'PP')}</p>
    <form onSubmit={handleSubmit} className="form-control space-y-2">
    <span className="label-text">Submission Details:</span>
    <textarea name="details"
  placeholder="Details"
  className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
    <div className="form-actions justify-start">
        <input type="submit" className="btn btn-secondary" value="Submit" />
    </div>
    </form>
  </div>
</div>
           </div>
        </div>
    );
};

export default TaskDetails;