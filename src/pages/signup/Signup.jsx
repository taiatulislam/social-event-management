import signup from '../../assets/login.jpg'
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        // const name = form.get('name')
        const email = form.get('email')
        // const phone = form.get('phone')
        const password = form.get('password')

        if (password.length < 6) {
            return toast.error('Password length must be grater than 6', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Password should have one capital letter', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        else if (!/[@$!%*?&]/.test(password)) {
            return toast.error('Password should have one special character', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User create successfully', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                navigate('/')
            })
            .catch(error => {
                toast.error(`${error.message}`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            )
    }

    return (
        <div className='bg-[#ff82c362] py-7'>
            <div className='flex border-2 border-black rounded-lg max-w-5xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]'>
                <div className='w-1/2 relative'>
                    <img src={signup} alt="" />
                </div>
                <div className='bg-white w-1/2 relative'>
                    <Link to="/"><span className='absolute right-4 top-2 text-xl font-extrabold text-red-500'><RxCross2></RxCross2></span></Link>
                    <h2 className='text-4xl font-semibold text-center my-5 text-[#ff68b6]'>Register Here</h2>
                    <form className='px-10' onSubmit={handleSubmit}>
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
                            <button type='submit' className="btn bg-[#ff82c3e6] text-md font-medium normal-case">Register</button>
                        </div>
                    </form>
                    <p className='px-10 mt-4'>Already have an account? <Link to="/signin" className="text-[#ff68b6]">Sign In</Link></p>
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

export default Signup;