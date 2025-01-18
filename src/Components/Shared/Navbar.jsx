import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useRole from "../Hooks/useRole";


const Navbar = () => {

  const {user,userLogout} = useAuth();
  const {role} = useRole();

  const handleLogout = () => {
    userLogout()
    .then(()=>{
      toast.success('Logout successfully')
    })
  }

    const links = <>
        <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-hanifraihan123" className="text-blue-700 mr-2 btn">Join as Developer</a>
        {
          user && <>
          <NavLink to="dashboard" className="mr-2 btn">Dashboard</NavLink>
          <NavLink className="btn">Available Coin: {role?.coin} </NavLink>
          </>
        }
    </>

    return (
        <div className="navbar bg-lime-200 py-3">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/"><button className="font-bold text-xl pl-4">PaidWork</button></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
  {
    user ? <div className="flex items-center gap-4"><img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" /> <button onClick={handleLogout} className="btn btn-warning">Logout</button></div> :<><Link to="/login"><button className="btn btn-warning">Login</button></Link>
  <Link to="/register"><button className="btn btn-warning">Register</button></Link></>
  }
  </div>
</div>
    );
};

export default Navbar;