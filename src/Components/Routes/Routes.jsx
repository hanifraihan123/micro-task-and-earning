import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Layout/Dashboard";
import AddTasks from "../Dashboard/AddTasks";
import MyTasks from "../Dashboard/MyTasks";
import PurchaseCoin from "../Dashboard/PurchaseCoin";
import PaymentHistory from "../Dashboard/PaymentHistory";
import BuyerHome from "../Dashboard/BuyerHome";
import AdminHome from "../Dashboard/Admin/AdminHome";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import TaskHistory from "../Dashboard/Admin/TaskHistory";
import WorkerHome from "../Dashboard/Worker/WorkerHome";
import TaskList from "../Dashboard/Worker/TaskList";
import MySubmission from "../Dashboard/Worker/MySubmission";
import Withdrawals from "../Dashboard/Worker/Withdrawals";
import TaskDetails from "../Dashboard/Worker/TaskDetails";
import Payment from "../Dashboard/Payment";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import BuyerRoute from "./BuyerRoute";
import WorkerRoute from "./WorkerRoute";
import CheckoutForm from "../Dashboard/CheckoutForm";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'buyerHome',
          element: <BuyerRoute><BuyerHome></BuyerHome></BuyerRoute>
        },
        {
          path: 'addTasks',
          element: <BuyerRoute><AddTasks></AddTasks></BuyerRoute>
        },
        {
          path: 'myTasks',
          element: <BuyerRoute><MyTasks></MyTasks></BuyerRoute>
        },
        {
          path: 'purchaseCoin',
          element: <BuyerRoute><PurchaseCoin></PurchaseCoin></BuyerRoute>
        },
        {
          path: 'paymentHistory',
          element: <BuyerRoute><PaymentHistory></PaymentHistory></BuyerRoute>
        },
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'taskHistory',
          element: <AdminRoute><TaskHistory></TaskHistory></AdminRoute>
        },
        {
          path: 'workerHome',
          element: <WorkerRoute><WorkerHome></WorkerHome></WorkerRoute>
        },
        {
          path: 'taskList',
          element: <TaskList></TaskList>
        },
        {
          path: 'taskDetails/:id',
          element: <TaskDetails></TaskDetails>
        },
        {
          path: 'mySubmission',
          element: <WorkerRoute><MySubmission></MySubmission></WorkerRoute>
        },
        {
          path: 'withdrawals',
          element: <WorkerRoute><Withdrawals></Withdrawals></WorkerRoute>
        },
        {
          path: 'payment/:price',
          element: <Payment></Payment>
        }
      ]
    }
  ]);