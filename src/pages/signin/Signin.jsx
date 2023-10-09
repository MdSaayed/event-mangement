import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";



const Signin = () => {
    const { signInUser, googleSignin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');


    // handle google signin
    const handleGoogleSignin = () => {
        googleSignin()
            .then(res => {
                toast.success('Login successfully.');
                location.state ? navigate(location.state) : navigate('/');
            })
            .then(err => console.log(err));
    }



    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrEmail('');
        setErrPass('');

        if (email == '') {
            setErrEmail('Please enter your eamil.')
        }
        if (password == '') {
            setErrPass('Please enter your password.')
        }

        if (email && password) {
            signInUser(email, password)
                .then(res => {
                    setErrEmail('');
                    setErrPass('');
                    toast.success('Login successfully.');
                    location.state ? navigate(location.state) : navigate('/');

                })
                .catch(err => toast.warning("Invalid user login."));
        }
    }

    return (
        <div className="bg-[url('https://i.ibb.co/9vHD5YH/Humaaans-2-Characters-1.png')] bg-cover bg-[#162cf54a]">
            <div className='grid items-center justify-center  h-screen max-w-6xl mx-auto  px-4 lg:px-0'>
                <div className="min-h-[450px] max-w-[400px] flex flex-col p-12 rounded-sm justify-center items-center bg-[#FFF]">
                    <form onSubmit={handleSignin}>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="email">Email address</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your email address' type="email" name='email' />
                        {
                            errEmail ? <p className="text-[12px] text-red-600 -mt-[5px] -mb-[26px]">{errEmail}</p> : ''
                        }
                        <br></br>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="password">Password</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your password' type="password" name='password' />
                        {
                            errPass ? <p className="text-[12px] text-red-600 -mt-[5px] -mb-[26px]">{errPass}</p> : ''
                        }
                        <br></br>
                        <input className='text-white  bg-gradient-to-r from-purple-500 to-[#F5167E] text-[1rem] font-semibold rounded w-full py-[6px] mt-2' type="submit" value="SignIn" />
                    </form>
                    <div className="flex flex-col gap-2 items-center mt-2">
                        <h2>Or continue with</h2>
                        <div className="flex justify-center gap-4">
                            <Link onClick={handleGoogleSignin} className="text-2xl border py-1 px-4"><FcGoogle /></Link>
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