import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Signin = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="bg-[url('https://i.ibb.co/9vHD5YH/Humaaans-2-Characters-1.png')] bg-cover bg-[#bee7fe]">
            <div className='grid items-center justify-center  h-[100vh] max-w-6xl mx-auto'>
                <div className="h-[70vh] flex flex-col p-12 rounded-sm justify-center items-center bg-[#fff]">
                    <form onSubmit={handleSignin}>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="email">Email address</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your email address' type="email" name='email' /><br></br>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="password">Password</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your password' type="password" name='password' /><br></br>
                        <input className='text-white bg-[#403F3F] text-[1rem] font-semibold rounded w-full py-[6px] mt-2' type="submit" value="Login" />
                    </form>
                    <div className="flex flex-col gap-2 items-center mt-2">
                        <h2>Or continue with</h2>
                        <div className="flex justify-center gap-4">
                            <Link className="text-2xl border py-1 px-4"><FcGoogle /></Link>
                            <Link className="text-2xl border py-1 text-blue-500 px-4"><FaFacebook /></Link>
                        </div>
                    </div>
                    <div className='text-center pt-2 text-[1rem]'>
                        <p>Dont’t Have An Account? <Link className='text-red-600' to={'/signup'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;