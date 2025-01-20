import Lottie from 'lottie-react';
import login from '../../assets/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import useAxios from '../Hooks/useAxios';
import useRole from '../Hooks/useRole';

const Login = () => {

  const {userLogin,logInWithGoogle} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxios();
  const {refetch} = useRole();
  const from = location.state || "/"
  const { register, handleSubmit } = useForm()
      const onSubmit = (data) => {
        userLogin(data.email,data.password)
        .then(res=>{
          if(res.user){
            navigate(from)
            refetch();
            toast.success('User Login Successfully')
          }
        })
        .catch(error=>{
          toast.error(error.message)
        })
      }

      const handleGoogle = () => {
        logInWithGoogle()
        .then( async(result) => {
          refetch();
          toast.success('User Login Successfully')
          navigate(from)
          const userInfo = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
            role: 'worker',
            coin: 10
          }
         await axiosPublic.post('/users', userInfo)
        })
        .catch(error=>{
          // toast.error(error.message)
        })
      }

    return (
        <div className='lg:flex gap-4'>
        <div className='flex-1'>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto pt-2">
            <h3 className="text-center font-bold text-3xl pt-4">Login Now</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='text-center mx-7'>
        <div className="divider h-0 mt-0"></div>
      <button onClick={handleGoogle} className="btn btn-secondary w-full">Login With Google</button>
      </div>
      <p className='text-center pt-4'>Create an acccout ? Please <Link to="/register"><span className='text-red-500'>Register</span></Link></p>
        </div>
      <div>
        <Lottie animationData={login}></Lottie>
      </div>
        </div>
    );
};

export default Login;