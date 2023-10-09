import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";


const Header = () => {
    const { signOutUser, user } = useContext(AuthContext);
    // user signout handle
    const handleSignOutUser = () => {
        signOutUser()
            .then(res => toast.success('Logout successfully.'))
    }



    return (
        <div className="shadow-md">
            <nav className="flex justify-between items-center py-2 max-w-6xl mx-auto">
                <ul>
                    <li><NavLink className={'text-xl font-extrabold'}>LOGO</NavLink></li>
                </ul>
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/yourticked" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Your ticket</NavLink>
                    </li>
                    {
                        user ? <>
                            <li>
                                <NavLink onClick={handleSignOutUser} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Logout</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Signin</NavLink>
                                </li>
                            </>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;