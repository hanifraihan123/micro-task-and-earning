import { format } from "date-fns";
import useTasks from "../../Hooks/useTasks";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const TaskHistory = () => {

    const [tasks,refetch] = useTasks();
    const axiosSecure = useAxiosSecure();

    const handleDelete = async(id) => {
        const res = await axiosSecure.delete(`/task/${id}`)
        if(res.data.deletedCount > 0){
          refetch();
          toast.success('Task Deleted Successfully')
        }
      }
    
      const standardDelete = (id) => {
        toast((t) => (
          <div className="flex items-center gap-2 justify-center">
            <div>
              <p>
                Are You <b>Sure?</b>
              </p>
            </div>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                handleDelete(id);
              }}
              className="px-3 py-1 rounded-md text-white bg-red-400"
            >
              Yes
            </button>
            <button
              className="px-3 py-1 rounded-md text-white bg-green-400"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        ));
      }

    return (
        <div>
            <h3 className="font-bold text-3xl text-center py-6">Manage Tasks: {tasks.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Buyer Email</th>
        <th>Title</th>
        <th>Info</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.map((task,index)=><tr key={task._id} task={task}>
            <th>{index + 1}</th>
            <td>{task.email}</td>
            <td>{task.title}</td>
            <td>{task.info}</td>
            <td><button onClick={()=>standardDelete(task._id)} className="btn btn-xs text-red-500">Delete</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default TaskHistory;