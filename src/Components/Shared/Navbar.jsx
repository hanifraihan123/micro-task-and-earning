import { Link } from "react-router-dom";


const Navbar = () => {


    const links = <>
        <li className="mr-2">Item 1</li>
        <li className="mr-2">Item 2</li>
        <li className="mr-2">Item 3</li>
        <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-hanifraihan123" className="text-blue-700">Join as Developer</a>
    </>

    return (
        <div className="navbar bg-lime-200">
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
    <h3 className="font-bold text-xl pl-4">PaidWork</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
  <Link to="/login"><button className="btn btn-warning">Login</button></Link>
  <button className="btn btn-warning">Register</button>
  </div>
</div>
    );
};

export default Navbar;