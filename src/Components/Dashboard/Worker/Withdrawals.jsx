import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useRole from "../../Hooks/useRole";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Withdrawals = () => {

     const { register, handleSubmit } = useForm();
     const [dollar,setDollar] = useState(0);
     const axiosSecure = useAxiosSecure();
     const {user} = useAuth();
     const {role,refetch} = useRole();

        const onSubmit = async(data) => {
            const withdrawData = {
                worker_email: user.email,
                worker_name: user.displayName,
                withdrawal_coin: parseInt(data.withdraw),
                withdrawal_amount: dollar,
                payment_system: data.method,
                withdraw_date: new Date(),
                status: 'pending'
            }
            const res = await axiosSecure.post('/withdraws', withdrawData)
            if(res.data.insertedId){
                toast.success('Withdraw request done')
            }
        }

        const handleCoin = e => {
            const coin = e;
            if(coin > role?.coin){
                return toast.error('Withdraw amount should not over your coin')
            }
            const dollar = e / 20;
            setDollar(dollar)
        }

    return (
        <div>
            <h3 className="font-bold text-3xl text-center py-6">Withdrawals Form</h3>
            <p className="pl-8 font-bold">Available Coin: {role?.coin}</p>
            <p className="pl-8 font-bold">Possible Withdrawal Amount: {role?.coin/20} $</p>
             <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-0">
                <div className="flex gap-4">
                <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Coin To Withdraw</span>
                      </label>
                      <input type="number" {...register("withdraw")} onChange={(e)=>handleCoin(e.target.value)} placeholder="Minimum 200 Coins Need To Withdraw" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Withdraw Amount</span>
                      </label>
                      <input type="text" disabled value={`${dollar} $`} className="input input-bordered" />
                    </div>
                    </div>      
                   <div className="flex gap-4">
                   <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Account Number</span>
                      </label>
                      <input type="number" {...register("number")} placeholder="Enter Account Number" className="input input-bordered" required />
                    </div>
                    <div className="w-full">
                    <label className="label">
                        <span className="label-text">Select Payment Method</span>
                      </label>
                    <select defaultValue='default' {...register("method")} className="select select-bordered w-full">
              <option disabled value="default">Choose One</option>
              <option>Bkash</option>
              <option>Nagad</option>
              <option>Rocket</option>
              <option>Upai</option>
            </select>
                    </div> 
                   </div>
                    <div className="form-control mt-6">
                      {
                        role?.coin < 200 ? <h3 className="text-red-500">Insufficient Coin To Withdraw</h3>: <button className="btn btn-primary">Withdraw</button>
                      }
                    </div>
                  </form>
        </div>
    );
};

export default Withdrawals;