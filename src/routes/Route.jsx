import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Layout from "../layout/Layout";
import Signup from "../pages/signup/Signup";
import EventDetails from "../components/event/EventDetails";
import Erorr from "../pages/erorr/Erorr";
import PrivateRoute from "./PrivateRoute";
import Articales from "../pages/articales/Articales";
import EventDetailsPage from "../pages/eventDetailsPage/EventDetailsPage";
import PurchaseTicketPage from "../pages/purshaseTikectPages/PurchaseTicketPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Erorr />,
    element: <Layout />,
    children: ([
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/eventdetails/:id',
        loader: () => fetch('/event.json'),
        element: <PrivateRoute> <EventDetailsPage /> </PrivateRoute>
      },
      {
        path: '/yourticked/eventdetails/:id',
        loader: () => fetch('/event.json'),
        element: <PrivateRoute> <EventDetails /> </PrivateRoute>
      },
      {
        path: '/yourticked',
        loader: () => fetch('/event.json'),
        element: <PrivateRoute><PurchaseTicketPage /></PrivateRoute>
      },
      {
        path: 'blogs',
        loader: () => fetch('/event.json'),
        element: <PrivateRoute><Articales /> </PrivateRoute>
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ])
  }
]);


export default router;