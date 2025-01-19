import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { format } from "date-fns";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: payments = [], refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })

    return (
        <div>
            <h3 className="font-bold text-3xl text-center py-6">Payment History</h3>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Transaction Id</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payment, index)=><tr key={payment._id} payment={payment}>
            <th>{index + 1}</th>
            <td>{payment.name}</td>
            <td>{payment.email}</td>
            <td>{payment.transactionId}</td>
            <td>{format(new Date(payment.date), 'PP')}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;