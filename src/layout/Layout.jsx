import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default Layout;