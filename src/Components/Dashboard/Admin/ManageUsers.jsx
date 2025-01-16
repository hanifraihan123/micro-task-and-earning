import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleUpdate = async(e,id)=>{
    const updatedRole = {role: e.target.value};
    const res = await axiosSecure.patch(`/user/${id}`, updatedRole)
    if(res.data.modifiedCount > 0){
      refetch();
      toast.success('User Role Updated Successfully')
    }
  }

  const handleDelete = async(id) => {
    const res = await axiosSecure.delete(`/user/${id}`)
    if(res.data.deletedCount > 0){
      refetch();
      toast.success('User Deleted Successfully')
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
      <h3 className="font-bold text-3xl text-center py-6">
        Manage Users: {users?.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Profile</th>
              <th>Email</th>
              <th>Role</th>
              <th>Coin</th>
              <th>Update Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.coin}</td>
                <th>
                  <select onChange={(e)=>handleUpdate(e,user._id)} defaultValue={user.role || 'Change Role'} className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled>
                      Change Role
                    </option>
                    <option value='worker'>Worker</option>
                    <option value="buyer">Buyer</option>
                    <option value="admin">Admin</option>
                  </select>
                </th>
                <th>
                  <button className="btn text-red-500 btn-xs" onClick={()=>standardDelete(user._id)}>Remove</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
