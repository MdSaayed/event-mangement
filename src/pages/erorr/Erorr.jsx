import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';


const Erorr = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto h-[100vh] flex items-center flex-col justify-center">
                <img className="w-2/6" src="https://i.ibb.co/h8f7nWr/png-clipart-404-universe-404-digital-removebg-preview.png" alt="" />
                <Link className="text-blue-700 flex items-center" to={'/'}><IoIosArrowRoundBack className="text-xl" /> Back to Home</Link>
            </div>
        </div>
    );
};

export default Erorr;