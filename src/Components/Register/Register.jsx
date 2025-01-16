import Lottie from "lottie-react";
import registerData from '../../assets/register.json'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";

const Register = () => {

    const {createUser,updateUserProfile} = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxios();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/;
      if(!regex.test(data.password)){
        toast.error('Password should be at least one uppercase,one lowercase & one special character needed')
        return;
      }
        createUser(data.email,data.password)
        .then(res=>{
          if(res.user){
            const updatedData = {
              displayName: data.name,
              photoURL: data.photo
            }
            updateUserProfile(updatedData)
            .then(async()=>{
              let coin = 10
              if(data.role === 'buyer'){
                coin = 10 + 40
              }
              if(data.role === 'worker'){
                 coin = 10
              }
              const userInfo = {
                name: data.name,
                email: data.email,
                photo: data.photo,
                role: data.role,
                coin: coin
              }
            const res = await axiosPublic.post('/users',userInfo)
            if(res.data.insertedId){
              toast.success('User registered successfully')
              navigate('/')
            }
            })
            .catch((error)=>{
              toast.error(error.message)
            })
          }
        })
    }

    return (
        <div className='flex gap-4'>
        <div className='flex-1'>
        <form  onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto pt-2">
            <h3 className="text-center font-bold text-3xl pt-4">Register Now</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input {...register("photo")} type="url" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email")} type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="Password" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Role</span>
          </label>
        <select {...register("role")} defaultValue={'default'} className="select select-bordered">
  <option disabled value={'default'}>Select the role</option>
  <option value="buyer">Buyer</option>
  <option value="worker">Worker</option>
</select>
          <button className="btn btn-primary mt-4">Login</button>
        </div>
      </form>
      <p className='text-center pb-6'>Already have an acccout ? Please <Link to="/login"><span className='text-red-500'>Login</span></Link></p>
        </div>
      <div className="flex-1">
        <Lottie animationData={registerData}></Lottie>
      </div>
        </div>
    );
};

export default Register;