import { Link, NavLink, Outlet } from "react-router-dom";
import DasNavbar from "../Dashboard/DasNavbar";
import { IoMdAddCircleOutline, IoMdHome } from "react-icons/io";
import { FaFileUpload, FaHistory, FaTasks, FaUsers } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { BsCoin } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import DasFooter from "../Dashboard/DasFooter";
import useRole from "../Hooks/useRole";


const Dashboard = () => {

    const {role} = useRole();

    return (
        <div>
            <DasNavbar></DasNavbar>
         <div className="flex">
         <div className="w-1/6 min-h-screen bg-amber-200 text-center py-4"> 
               <ul>
               {
                role?.role === 'worker' && <> <NavLink to='/dashboard/workerHome'><p className="flex items-center gap-1 justify-center"><IoMdHome /> Home</p></NavLink>
                <NavLink to='/dashboard/taskList'><p className="flex items-center gap-1 justify-center"><FaTasks /> TaskList</p></NavLink>
                <NavLink to='/dashboard/mySubmission'><p className="flex items-center gap-1 justify-center"><FaFileUpload /> My Submissions</p></NavLink>
                <NavLink to='/dashboard/withdrawals'><p className="flex items-center gap-1 justify-center"><BiMoneyWithdraw /> Withdrawals</p></NavLink></>
               }
               {
                role?.role === 'buyer' && <><NavLink to='/dashboard/buyerHome'><p className="flex items-center gap-1 justify-center"><IoMdHome /> Home</p></NavLink>
                <NavLink to='/dashboard/addTasks'><p className="flex items-center gap-1 justify-center">
                <IoMdAddCircleOutline /> Add New Tasks</p></NavLink>
                <NavLink to='/dashboard/myTasks'><p className="flex items-center gap-1 justify-center"><MdTaskAlt /> My Task's</p></NavLink>
                <NavLink to='/dashboard/purchaseCoin'><p className="flex items-center gap-1 justify-center"><BsCoin /> Purchase Coin</p></NavLink>
                <NavLink to='/dashboard/paymentHistory'><p className="flex items-center gap-1 justify-center"><FaSackDollar /> Payment History</p></NavLink></>
               }
                {
                    role?.role === 'admin' && <> <NavLink to='/dashboard/adminHome'><p className="flex items-center gap-1 justify-center"><IoMdHome></IoMdHome>Home</p></NavLink>
                    <NavLink to='/dashboard/manageUsers'><p className="flex items-center gap-1 justify-center"><FaUsers></FaUsers>Manage Users</p></NavLink>
                <NavLink to='/dashboard/taskHistory'><p className="flex items-center gap-1 justify-center"><FaHistory></FaHistory>Manage Task History</p></NavLink></>
                }
               </ul>
            </div>
            <div className="w-5/6">
                <Outlet></Outlet>
            </div>
         </div>
            <DasFooter></DasFooter>
        </div>
    );
};

export default Dashboard;