import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import logo from '../../assets/logo.png'

const Signin = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='bg-[#ff82c362] h-screen py-28'>
            <div className='flex border-2 border-black rounded-lg max-w-5xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]'>
                <div className='w-1/2 relative bg-gradient-to-r from-[#bc4e9c] to-[#f80759] text-center text-white'>
                    <h2 className="text-4xl font-bold mt-10 mb-5">Welcome To</h2>
                    <img src={logo} alt="" className='w-[100px] h-[100px] bg-white rounded-full p-2 mx-auto' />
                    <p className="text-3xl font-medium mt-5">Social Event Management</p>
                </div>
                <div className='bg-white w-1/2 relative'>
                    <Link to="/"><span className='absolute right-4 top-2 text-xl font-extrabold text-red-500'><RxCross2></RxCross2></span></Link>
                    <h2 className='text-4xl font-semibold text-center my-5 text-[#ff68b6]'>Sign In</h2>
                    <form className='px-10'>
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
                    <p className='px-10 mt-4 mb-10'>New to the site? <Link to="/signup" className="text-[#ff68b6]">Sign Up</Link></p>
                </div>
            </div >
        </div >
    );
};

export default Signin;