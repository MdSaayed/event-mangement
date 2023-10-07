import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import Layout from "../layout/Layout";
import Signup from "../pages/signup/Signup";
import EventDetails from "../components/event/EventDetails";
import Erorr from "../pages/erorr/Erorr";

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
            path: 'eventdetails/:id',
            loader: ()=> fetch('/event.json'),
            element: <EventDetails />
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