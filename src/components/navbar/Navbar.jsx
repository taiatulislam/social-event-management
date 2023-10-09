import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const links =
        <>
            <li className="text-md font-semibold"><NavLink to='/'>Home</NavLink></li>
            <li className="text-md font-semibold"><NavLink to='/gallery'>Gallery</NavLink></li>
            <li className="text-md font-semibold"><NavLink to='/about'>About</NavLink></li>
            <li className="text-md font-semibold"><NavLink to='/contact'>Contact</NavLink></li>
        </>

    const { user, signout } = useContext(AuthContext);

    const handleSignOut = () => {
        return signout();
    }

    return (
        <div className="bg-[#ff82c3e6]">
            <div className="navbar sm:fle md:flex-row md:max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <span tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </span>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}

                        </ul>
                    </div>

                    <Link to='/'>
                        <div className="flex items-center bg-white py-1 px-3 rounded-xl">
                            <img src={logo} alt="" className="w-[60px] h-[50px]" />
                            <p className="text-sm md:text-xl text-black font-semibold">Event Management</p>
                        </div>
                    </Link>

                </div >
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div>
                                <span className="md:mr-3 text-xs md:text-md lg:text-lg font-semibold">{user.email}</span>
                                <button onClick={handleSignOut} className="btn normal-case font-semibold border-2 border-black py-2 px-5 rounded-lg">Sign Out</button>
                            </div>
                            :
                            <div className="flex sm:flex-col md:flex-row">
                                <Link to='/signin' className="font-semibold border-2 border-black py-2 px-5 rounded-lg mr-1 md:mr-5">Sign In</Link>
                                <Link to='/signup' className="font-semibold border-2 border-black py-2 px-5 rounded-lg">Sign Up</Link>
                            </div>
                    }

                </div>
            </div >
        </div>
    );
};

export default Navbar;