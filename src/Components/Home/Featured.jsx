import { format } from "date-fns";
import useTasks from "../Hooks/useTasks";
import { Link } from "react-router-dom";

const Featured = () => {
  const [tasks] = useTasks();

  return (
    <div>
      <h3 className="font-bold text-3xl text-center pt-4 text-lime-100">
        Featured Task
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {tasks?.map((task) => (
          <div
            key={task._id}
            task={task}
            className="card bg-cyan-500 text-white items-center mx-4 mt-6 shadow-xl"
          >
            {task.workers > 0 && (
              <div className="p-4">
                <h2 className="card-title">Title: {task.title}</h2>
                <p className="text-sm">Buyer Name: {task.name}</p>
                <p className="text-sm">Deadline: {format(new Date(task.deadline), "PP")}</p>
                <p className="text-sm">Payable Amount: {task.amount}</p>
                <p className="text-sm">Required Workers: {task.workers}</p>
                <div className="flex justify-center mt-2">
                  <Link to={`/dashboard/taskDetails/${task?._id}`}>
                    <button className="btn-sm rounded-lg bg-purple-500 text-white">View Details</button>
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

export default Featured;
