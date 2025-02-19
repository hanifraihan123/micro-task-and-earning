import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useRole from "../Hooks/useRole";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { motion } from "motion/react"


const Navbar = () => {

  const {user,userLogout} = useAuth();
  const {role} = useRole();
  // console.log(role)

  const handleLogout = () => {
    userLogout()
    .then(()=>{
      toast.success('Logout successfully')
    })
  }

    return (
      <>
      <div className="navbar bg-gradient-to-r from-lime-300 to-blue-300 mb-8 px-4 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] w-52 p-2 shadow">
          <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-hanifraihan123" className="text-blue-700 btn mb-2">Join as Developer</a>
        {
          user && <>
          <NavLink to="dashboard" className="btn">Dashboard</NavLink>
          </>
        }
      </ul>
    </div>
    <Link to='/'><button className="text-xl btn font-bold bg-yellow-500 hidden lg:inline">PaidWork</button></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-hanifraihan123" className="text-blue-700 mr-2">Join as Developer</a>
    {
      role?.role === "worker" && <>
      <NavLink to="dashboard/taskList" className="mr-2">Tasklist</NavLink>
      <NavLink to="dashboard/mySubmission" className="mr-2">My Submissions</NavLink>
      <NavLink to="dashboard/workerHome" className="mr-2">Worker Home</NavLink>
      </>
    }
        {
          user && <>
          <NavLink to="dashboard" className="">Dashboard</NavLink>
          </>
        }
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <div className="flex items-center gap-4"><motion.button animate={{ rotate: 360 }} transition={{ duration: 2 }} className="btn btn-sm bg-yellow-500 text-white"><AiTwotoneDollarCircle /> {role?.coin} </motion.button><img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" /> <button onClick={handleLogout} className="btn btn-warning">Logout</button></div> :<><Link to="/login"><button className="btn btn-warning mr-2">Login</button></Link>
  <Link to="/register"><button className="btn btn-warning">Register</button></Link></>
  }
  </div>
</div>
      </>
    );
};

export default Navbar;