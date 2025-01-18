import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const AdminHome = () => {

    const axiosSecure = useAxiosSecure();
    const {data: withdraws=[]} = useQuery({
        queryKey: ['withdraws'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/withdraws')
            return res.data;
        }
    })
    const {data: users = []} = useQuery({
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

    const totalCoin = users.reduce((total,user)=> total + user.coin,0)
    
    const handlePayment = async(id) => {
        const data = await axiosSecure.get(`/withdraw/${id}`)
        const coin = data.data.withdrawal_coin;
        const updateStatus = {status: 'approved'}
        const res = await axiosSecure.patch(`/withdraw/${id}`, updateStatus)
        if(res.data.modifiedCount > 0){
            toast.success('Status Approved Successfully')
        }
    }

    return (
        <div>
             <h3 className="font-bold text-3xl text-center py-6">Withdraw Request</h3>
             <div className="flex justify-between p-6 text-blue-500">
             <p className="font-bold">Total Buyer: {totalData?.buyer}</p>
             <p className="font-bold">Total Worker: {totalData?.worker}</p>
             <p className="font-bold">Total Coin: {totalCoin}</p>
             </div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Payment Method</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        withdraws.map((withdraw,index)=><tr key={withdraw._id} withdraw={withdraw}>
            <th>{index + 1}</th>
            <td>{withdraw.worker_name}</td>
            <td>{withdraw.worker_email}</td>
            <td>{withdraw.payment_system}</td>
            <td>{withdraw.withdrawal_coin}</td>
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