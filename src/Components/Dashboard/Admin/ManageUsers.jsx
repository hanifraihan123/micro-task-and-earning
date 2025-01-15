import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleUpdate = (e,id)=>{
    console.log(e.target.value,id)
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
              <tr key={user._id} user={user}>
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
                  <button className="btn text-red-500 btn-xs">Remove</button>
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
