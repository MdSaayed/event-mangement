import { NavLink } from "react-router-dom";


const Header = () => {
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
                        <NavLink to="/signup" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>SignUp</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-[#F5167E] font-semibold" : ""}>Signin</NavLink>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export default Header;