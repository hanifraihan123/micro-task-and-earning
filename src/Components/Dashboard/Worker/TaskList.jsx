import { Link } from "react-router-dom";
import useTasks from "../../Hooks/useTasks";

const TaskList = () => {

    const [tasks,refetch] = useTasks();

  return (
    <div>
      <h3 className="font-bold text-3xl text-center py-6">Task List: {tasks.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {
        tasks.map(task=><div key={task._id} task={task} className="card bg-yellow-100 mx-4 my-6 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{task.title}</h2>
              <p>{task.email}</p>
              <p>{task.deadline}</p>
              <p>{task.amount}</p>
              <p>{task.workers}</p>
              <div className="card-actions justify-center">
               <Link to={`/dashboard/taskDetails/${task._id}`}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </div>)
      }
      </div>
    </div>
  );
};

export default TaskList;
