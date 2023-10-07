import signup from '../../assets/login.jpg'
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='bg-[#ff82c362] py-7'>
            <div className='flex border-[3px] border-black rounded-lg max-w-5xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]'>
                <div className='w-3/4 relative'>
                    <img src={signup} alt="" />
                </div>
                <div className='bg-white w-full relative'>
                    <Link to="/"><span className='absolute right-4 top-2 text-xl font-extrabold text-red-500'><RxCross2></RxCross2></span></Link>
                    <h2 className='text-4xl font-semibold text-center my-5 text-[#ff68b6]'>Register Here</h2>
                    <form className='px-10'>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input border-2 border-[#ff82c3e6]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input border-2 border-[#ff82c3e6]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Phone No</span>
                            </label>
                            <input type="number" name="phone" placeholder="Your phone" className="input border-2 border-[#ff82c3e6]" required />
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
                        <div className="form-control my-5 flex-row gap-2">
                            <input type="checkbox" name="terms" required />
                            <span className="text-md font-semibold">Accept all terms and conditions.</span>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-[#ff82c3e6] text-md font-medium normal-case">Register</button>
                        </div>
                    </form>
                    <p className='px-10 mt-4'>Already have an account? <Link to="/login" className="text-[#ff68b6]">Login</Link></p>
                </div>
            </div >
        </div >
    );
};

export default Signup;