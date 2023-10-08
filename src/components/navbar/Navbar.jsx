import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'


const Navbar = () => {

    const links =
        <>
            <li className="text-lg font-semibold"><NavLink to='/'>Home</NavLink></li>
        </>

    return (
        <div className="bg-[#ff82c3e6]">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <Link to='/'>
                        <div className="flex items-center bg-white py-1 px-3 rounded-xl">
                            <img src={logo} alt="" className="w-[60px] h-[50px]" />
                            <p className="text-xl text-black font-semibold">Event Management</p>
                        </div>
                    </Link>

                </div >
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/signin' className="font-semibold border-2 border-black py-2 px-5 rounded-lg mr-5">Sign In</Link>
                    <Link to='/signup' className="font-semibold border-2 border-black py-2 px-5 rounded-lg">Sign Up</Link>
                </div>
            </div >
        </div>
    );
};

export default Navbar;