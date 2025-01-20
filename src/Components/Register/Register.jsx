import Lottie from "lottie-react";
import registerData from '../../assets/register.json'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_image_hosting_api;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Register = () => {

    const {createUser,updateUserProfile} = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxios();
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/;
      if(!regex.test(data.password)){
        toast.error('Password should be at least one uppercase,one lowercase & one special character needed')
        return;
      }
      const imageFile = {image: data.photo[0]}
        const result = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(result.data.data.display_url)
        if(result.data.success){
          createUser(data.email,data.password)
          .then((res)=>{
            if(res.user){
              const updatedData = {
                displayName: data.name,
                photoURL: result.data.data.display_url
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
                  photo: result.data.data.display_url,
                  role: data.role,
                  coin: coin
                }
                console.log(userInfo)
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
 
    }

    return (
        <div className='lg:flex gap-4'>
                       <Helmet>
                        <title>PaidWork || Register</title>
                      </Helmet>
        <div className='flex-1'>
        <form  onSubmit={handleSubmit(onSubmit)} className="card-body mx-auto pt-2">
            <h3 className="text-center font-bold text-3xl pt-4">Register Now</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input {...register("photo")} type="url" placeholder="Photo URL" className="input input-bordered" required />
        </div> */}
          <div className="form-control">
        <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
        <input type="file" {...register("photo")} className="file-input file-input-bordered" />
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
          <button className="btn btn-primary mt-4">Register</button>
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