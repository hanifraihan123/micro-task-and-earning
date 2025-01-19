import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const BestWorkers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/someUsers");
      return res.data;
    },
  });

  return (
    <div className="py-6">
      <h3 className="font-bold text-3xl text-center">Best Workers</h3>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        users.map(user=> <div key={user._id} user={user} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <figure className="rounded-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.coin}</p>
          </div>
        </div>)
       }
      </div>
    </div>
  );
};

export default BestWorkers;
