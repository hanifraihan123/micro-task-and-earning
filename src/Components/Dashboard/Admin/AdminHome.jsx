import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const AdminHome = () => {

    const axiosSecure = useAxiosSecure();
    const {data: withdraws=[],refetch} = useQuery({
        queryKey: ['withdraws'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/withdraws')
            return res.data;
        }
    })
    const {data: users = [], refetch: update} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const {data: totalData = {}} = useQuery({
        queryKey: ['totalData'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/countData')
            return res.data
        }
    })

    const {data: payments = [],refetch: correct} = useQuery({
      queryKey: ['payments'],
      queryFn: async()=>{
        const res = await axiosSecure.get('/payments')
        return res.data;
      }
    })

    const totalPayments = payments.reduce((total,payment)=> total + payment.amount,0)

    const totalCoin = users.reduce((total,user)=> total + user.coin,0)
    
    const handlePayment = async(id) => {
        const data = await axiosSecure.get(`/withdraw/${id}`)
        const prevCoin = data.data.withdrawal_coin;
        const email = data.data.worker_email;
        const updateCoin = {coin: prevCoin}
        const result = await axiosSecure.patch(`/user/${email}`, updateCoin)
        if(result.data.modifiedCount > 0){
          const updateStatus = {status: 'approved'}
        const res = await axiosSecure.patch(`/withdraw/${id}`, updateStatus)
        if(res.data.modifiedCount > 0){
            refetch()
            update()
            correct()
            toast.success('Status Approved Successfully')
        }
        }
    }

    return (
        <div className="">
             <Helmet>
              <title>PaidWork || AdminHome</title>
            </Helmet>         
             <h3 className="font-bold text-3xl text-center pt-4">Withdraw Request</h3>
             <div className="lg:flex md:flex lg:justify-between md:justify-center md:gap-6 text-center space-y-2 lg:space-y-0 lg:px-6 py-4 text-blue-500">
             <p className="font-bold">Total Buyer: {totalData?.buyer}</p>
             <p className="font-bold">Total Worker: {totalData?.worker}</p>
             <p className="font-bold">Total Payments: {totalPayments}</p>
             <p className="font-bold">Total Coin: {totalCoin}</p>
             </div>
             <div className="overflow-x-auto lg:ml-8">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Payment Method</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        withdraws.map((withdraw)=><tr key={withdraw._id} withdraw={withdraw}>
            <td>{withdraw.worker_name}</td>
            <td>{withdraw.worker_email}</td>
            <td>{withdraw.payment_system}</td>
            <td>{withdraw.withdrawal_coin}</td>
            <td>{withdraw.status}</td>
            <td><button onClick={()=>handlePayment(withdraw._id)} className="btn btn-xs text-blue-500">Payment Success</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AdminHome;