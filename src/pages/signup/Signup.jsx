import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Signup = () => {
    const { signUpUser } = useContext(AuthContext);
    const [err,setErr] = useState('');


    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErr('');

        if(!(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/).test(password)){
            setErr('Minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
            return;
        }
        signUpUser(email, password)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }



    return (
        <div className="bg-[url('https://i.ibb.co/9vHD5YH/Humaaans-2-Characters-1.png')] bg-cover bg-[#bee7fe]">
            <div className='grid items-center justify-center  h-[100vh] max-w-6xl mx-auto'>
                <div className="h-[70vh] w-[400px] flex flex-col p-12 rounded-sm justify-center items-center bg-[#fff]">
                    <form onSubmit={handleSignUp}>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="name">Your name</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your name' type="name" name='name' /><br></br>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="email">Email address</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your email address' type="email" name='email' /><br></br>
                        <label className='text-[#403F3F] font-semibold text-[1rem]' htmlFor="password">Password</label>
                        <input className='w-full border p-[6px] my-1 rounded-sm bg-[#F3F3F3]' placeholder='Enter your password' type="password" name='password' />
                        {
                            err? <>
                            <p className="text-[10px] text-red-600 flex-wrap">{err}</p>
                            </>: ''
                        }
                        <br></br>
                        <input className='text-white bg-[#403F3F] text-[1rem] font-semibold rounded w-full py-[6px] mt-2' type="submit" value="Login" />
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