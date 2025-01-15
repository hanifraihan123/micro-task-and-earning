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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'buyerHome',
          element: <BuyerHome></BuyerHome>
        },
        {
          path: 'addTasks',
          element: <AddTasks></AddTasks>
        },
        {
          path: 'myTasks',
          element: <MyTasks></MyTasks>
        },
        {
          path: 'purchaseCoin',
          element: <PurchaseCoin></PurchaseCoin>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
      ]
    }
  ]);