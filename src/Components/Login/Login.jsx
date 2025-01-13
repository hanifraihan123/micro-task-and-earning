import Lottie from 'lottie-react';
import login from '../../assets/login.json'

const Login = () => {
    return (
        <div className='flex gap-4'>
        <div className='flex-1'>
        <form className="card-body mx-auto pt-2">
            <h3 className="text-center font-bold text-3xl pt-4">Login Now</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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
      <button className="btn btn-secondary w-full">Login With Google</button>
      </div>
      <p className='text-center py-2'>Create an acccout ? Please <span className='text-red-500'>Register</span></p>
        </div>
      <div>
        <Lottie animationData={login}></Lottie>
      </div>
        </div>
    );
};

export default Login;