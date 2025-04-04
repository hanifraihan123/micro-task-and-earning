import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { motion } from "motion/react";

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
    <div className="py-6 bg-cyan-500">
      <h3 className="font-bold text-3xl text-center text-lime-100 py-4">
        Best Workers
      </h3>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user._id}
            user={user}
            className="card bg-cyan-200 shadow-xl"
          >
            <div className="card-body p-4">
              <figure className="rounded-xl">
                <motion.img
                  className="h-40 rounded-lg object-cover w-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  referrerPolicy="no-referrer"
                  src={user?.photo}
                  alt="User"
                />
              </figure>
              <h2 className="card-title">Name: {user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Coin: {user.coin}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWorkers;
