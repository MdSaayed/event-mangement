import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


const Signup = () => {
    const { signUpUser, signOutUser, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errPass, setErrPass] = useState('');
    const [errName, setErrName] = useState('');
    const [errEmail, setErrEamil] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photo.value;

        setErrPass('');
        setErrName('');
        setErrEamil('');

        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (name == '') {
            setErrName('Name is required.')
        }
        if (email == '') {
            setErrEamil('Email is required.')
        }
        if (!pattern.test(password)) {
            setErrPass('Password must be minimum six characters, at least one uppercase letter, one lowercase letter and one special character.');
            return;
        }


        if (name && email && password) {
            signUpUser(email, password)
                .then(res => {
                    toast.success('SignUp Successfully. Please login');
                    updateUserData(name, photoURL)
                        .then()
                        .catch()
                    signOutUser();
                    navigate('/signin');
                    setErrPass('');
                    setErrName('');
                    setErrEamil('');
                })
                .catch(err => toast.warning(err.message));

        }
    }

    return (
        <div className="bg-[url('https://i.ibb.co/9vHD5YH/Humaaans-2-Characters-1.png')] bg-cover bg-[#162cf54a]">
            <div className='grid items-center justify-center h-screen max-w-6xl mx-auto px-4 lg:px-0'>
                <div className="min-h-[450px] max-w-[400px] flex flex-col p-12 rounded-sm justify-center items-center bg-[#FFF]">
                    <form onSubmit={handleSignUp}>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="name">Your name</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your name' type="name" name='name' /><br></br>
                        {
                            errName ? <p className="text-[12px] text-red-600 -mt-[5px]">{errName}</p> : ''
                        }
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="email">Email address</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your email address' type="email" name='email' /><br></br>
                        {
                            errEmail ? <p className="text-[12px] text-red-600 -mt-[5px]">{errEmail}</p> : ''
                        }
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="photo">Photo url</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your photo url' type="text" name='photo' /><br></br>
                        
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="password">Password</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm' placeholder='Enter your password' type="password" name='password' />
                        {
                            errPass ? <p className="text-[12px] text-red-600 -mt-[5px] -mb-[26px]">{errPass}</p> : ''
                        }
                        <br></br>
                        <input className='text-white text-[1rem] bg-gradient-to-r from-purple-500 to-[#F5167E] font-semibold rounded w-full py-[6px] mt-2' type="submit" value="SignUp" />
                    </form>
                    <div className='text-center pt-2 text-[1rem]'>
                        <p>Dont’t Have An Account? <Link className='text-red-600' to={'/signin'}>Signin</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;