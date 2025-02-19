import { Link } from "react-router-dom";
import useTasks from "../../Hooks/useTasks";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";

const TaskList = () => {
  const [tasks] = useTasks();

  return (
    <div>
      <Helmet>
        <title>PaidWork || TaskList</title>
      </Helmet>
      <h3 className="font-bold text-3xl text-center py-6">
        Task List: {tasks.length}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {tasks.map((task) => (
          <div
            key={task._id}
            task={task}
            className="card bg-yellow-100 mx-4 my-6 shadow-xl"
          >
            {task.workers > 0 && (
              <div className="card-body">
                <h2 className="card-title">Title: {task.title}</h2>
                <p>Buyer Name: {task.name}</p>
                <p>Deadline: {format(new Date(task.deadline), "PP")}</p>
                <p>Payable Amount: {task.amount}</p>
                <p>Required Workers: {task.workers}</p>
                <div className="card-actions justify-center">
                  <Link to={`/dashboard/taskDetails/${task._id}`}>
                    <button className="btn btn-secondary">View Details</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
