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
         <div className="lg:w-1/6 min-h-screen bg-amber-200 text-center lg:py-4"> 
               <ul className="space-y-2">
               {
                role?.role === 'worker' && <> <NavLink to='/dashboard/workerHome' className="flex items-center gap-1 justify-center"><IoMdHome /> Home</NavLink>
                <NavLink to='/dashboard/taskList' className="flex items-center gap-1 justify-center"><FaTasks /> TaskList</NavLink>
                <NavLink to='/dashboard/mySubmission' className="flex items-center gap-1 justify-center"><FaFileUpload /> My Submissions</NavLink>
                <NavLink to='/dashboard/withdrawals' className="flex items-center gap-1 justify-center"><BiMoneyWithdraw /> Withdrawals</NavLink></>
               }
               {
                role?.role === 'buyer' && <><NavLink to='/dashboard/buyerHome' className="flex items-center gap-1 justify-center"><IoMdHome /> Home</NavLink>
                <NavLink to='/dashboard/addTasks' className="flex items-center gap-1 justify-center">
                <IoMdAddCircleOutline /> Add New Tasks</NavLink>
                <NavLink to='/dashboard/myTasks' className="flex items-center gap-1 justify-center"><MdTaskAlt /> My Task's</NavLink>
                <NavLink to='/dashboard/purchaseCoin' className="flex items-center gap-1 justify-center"><BsCoin /> Purchase Coin</NavLink>
                <NavLink to='/dashboard/paymentHistory' className="flex items-center gap-1 justify-center"><FaSackDollar /> Payment History</NavLink></>
               }
                {
                    role?.role === 'admin' && <> <NavLink to='/dashboard/adminHome' className="flex items-center gap-1 justify-center"><IoMdHome></IoMdHome>Home</NavLink>
                    <NavLink to='/dashboard/manageUsers' className="flex items-center gap-1 justify-center"><FaUsers></FaUsers>Manage Users</NavLink>
                <NavLink to='/dashboard/taskHistory' className="flex items-center gap-1 justify-center"><FaHistory></FaHistory>Manage Task History</NavLink></>
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