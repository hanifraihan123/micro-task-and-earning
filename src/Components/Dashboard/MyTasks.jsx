import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [task, setTask] = useState({});
  const [info, setInfo] = useState("");
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks/${user?.email}`);
      return res.data;
    },
  });

  const handleUpdate = async (id) => {
    document.getElementById("submit_modal").showModal();
    await axiosSecure.get(`/task/${id}`).then((res) => {
      setTask(res.data);
    });
  };

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/task/${id}`);
    if (res.data.deletedCount > 0) {
      refetch();
      toast.success("Task Deleted Successfully");
    }
  };

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
  };

  return (
    <div>
      <h3 className="font-bold text-center text-3xl py-6">
        My Tasks : {tasks.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Title</th>
              <th>Task Details</th>
              <th>Submission Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id} task={task}>
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td>{task.details}</td>
                <td>{task.info}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(task._id)}
                    className="btn btn-xs mr-2 text-green-500"
                  >
                    Update
                  </button>{" "}
                  <button
                    onClick={() => standardDelete(task._id)}
                    className="btn btn-xs text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="submit_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title: </span>
              </label>
              <input
                type="text"
                defaultValue={task.title}
                placeholder="Title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Details: </span>
              </label>
              <input
                type="text"
                defaultValue={task.details}
                placeholder="Title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Submission Details: </span>
              </label>
              <select
                defaultValue={task.info}
                onChange={(e) => setInfo(e.target.value)}
                className="select select-bordered w-full"
              >
                 <option disabled>Select One</option>
                <option>Screenshot</option>
                <option>Image</option>
                <option>Text</option>
              </select>
            </div>
          </form>
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

export default MyTasks;
