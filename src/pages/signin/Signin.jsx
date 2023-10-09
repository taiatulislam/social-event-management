import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useContext, useState } from 'react';
import logo from '../../assets/logo.png'
import { AuthContext } from "../../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signin, googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signin(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/')
                toast.success('Sign In successfully', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                console.log(error.code, error.message);
                return toast.error(`${error.message}`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    const handleGoogle = e => {
        e.preventDefault();
        googleSignin()
            .then(result => {
                console.log(result.user);
                toast.success('User Sign In successfully', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.code, error.message);
                return toast.error(`${error.message}`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <div className='bg-[#ff82c362] h-screen py-28'>
            <div className='flex flex-col md:flex-row border-2 border-black rounded-lg max-w-5xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]'>
                <div className='sm:w-full md:w-1/2 relative bg-gradient-to-r from-[#bc4e9c] to-[#f80759] text-center text-white'>
                    <h2 className="text-4xl font-bold mt-10 mb-5">Welcome To</h2>
                    <img src={logo} alt="" className='w-[100px] h-[100px] bg-white rounded-full p-2 mx-auto' />
                    <p className="text-3xl font-medium mt-5">Social Event Management</p>
                    <p className="font-bold">Providing reliable service, since 2022</p>
                </div>
                <div className='bg-white sm:w-full md:w-1/2 relative'>
                    <Link to="/"><span className='absolute right-4 top-2 text-xl font-extrabold text-red-500'><RxCross2></RxCross2></span></Link>
                    <h2 className='text-4xl font-semibold text-center my-5 text-[#ff68b6]'>Sign In</h2>
                    <form className='px-10' onSubmit={handleSignin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input border-2 border-[#ff82c3e6]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Password</span>
                            </label>
                            <div className='flex items-center'>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Your password" className="input border-2 border-[#ff82c3e6] relative w-full" required />
                                <span onClick={() => {
                                    setShowPassword(!showPassword)
                                }}>
                                    {
                                        showPassword ? <BsEyeSlashFill className='absolute -mt-2 -ml-8'></BsEyeSlashFill> : <BsEyeFill className='absolute -mt-2 -ml-8'></BsEyeFill>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff82c3e6] text-md font-medium normal-case">Sign In</button>
                        </div>
                    </form>
                    <div className="form-control mt-6 px-10">
                        <button onClick={handleGoogle} className="btn bg-base-400 text-md font-medium normal-case"><BsGoogle></BsGoogle>Google Sign In</button>
                    </div>
                    <p className='px-10 mt-4 mb-10'>New to the site? <Link to="/signup" className="text-[#ff68b6]">Sign Up</Link></p>
                </div>
            </div >
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div >
    );
};

export default Signin;