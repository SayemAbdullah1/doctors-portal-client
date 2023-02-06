import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
   
])
export default router;