import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Tickets from "../Pages/Tickets/Tickets";
import CreateTicket from "../Pages/CreateTicket/CreateTicket";
import EditTicket from "../Pages/EditTicket/EditTicket";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/tickets',
                element: <Tickets/>
            },
            {
                path: '/tickets/create',
                element: <CreateTicket/>
            },
            {
                path: "/tickets/edit/:id",
                element: <EditTicket/>
            }
        ]
    }
])