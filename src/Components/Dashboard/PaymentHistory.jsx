import { format } from "date-fns";
import usePayments from "../Hooks/usePayments";


const PaymentHistory = () => {
 
    const [payments] = usePayments();

    return (
        <div>
            <h3 className="font-bold text-3xl text-center py-6">Payment History</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Transaction Id</th>
        <th>Date</th>
        <th>Amount</th>
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
            <td>{payment.amount}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;