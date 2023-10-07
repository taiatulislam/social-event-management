import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { BsFacebook, BsTwitter, BsGoogle, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#ff82c3e6] py-10'>
            <div className="footer p-10 max-w-7xl mx-auto text-base-content place-items-center">
                <aside>
                    <div className='text-center'>
                        <img src={logo} alt="" className='w-[100px] h-[100px] bg-white rounded-full p-2 mx-auto' />
                        <h2 className='text-3xl font-semibold my-3'>Social Event Management</h2>
                        <p className="font-bold">Providing reliable service, since 2023</p>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="grid grid-flow-col gap-5 w-60 mx-auto">
                <Link to="/"><BsFacebook className='text-4xl'></BsFacebook></Link>
                <Link to="/"><BsTwitter className='text-4xl'></BsTwitter></Link>
                <Link to="/"><BsGoogle className='text-4xl'></BsGoogle></Link>
                <Link to="/"><BsYoutube className='text-4xl'></BsYoutube></Link>
            </div>
            <p className='text-center mt-5'>Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;