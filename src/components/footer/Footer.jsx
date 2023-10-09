import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { BsFacebook, BsTwitter, BsGoogle, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#ff82c3e6] py-10'>
            <div className="footer p-10 max-w-7xl mx-auto text-base-content place-items-start">
                <aside className='mx-auto'>
                    <div className='text-center'>
                        <img src={logo} alt="" className='w-[100px] h-[100px] bg-white rounded-full p-2 mx-auto' />
                        <h2 className='text-3xl font-semibold my-3'>Social Event Management</h2>
                        <p className="font-bold">Providing reliable service, since 2022</p>
                    </div>
                </aside>
                <nav className='mx-auto'>
                    <header className="footer-title text-black">Services</header>
                    <a className="link link-hover">Weeding Party</a>
                    <a className="link link-hover">Birthday Party</a>
                    <a className="link link-hover">Anniversary</a>
                    <a className="link link-hover">Engagement Party</a>
                </nav>
                <nav className='mx-auto'>
                    <header className="footer-title font-bold text-black">Company</header>
                    <a href='/about' className="link link-hover">About us</a>
                    <a href='/contact' className="link link-hover">Contact</a>
                </nav>
                <nav className='mx-auto'>
                    <header className="footer-title text-black">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="grid grid-flow-col gap-5 w-60 mx-auto">
                <Link target='_blank' to="https://www.facebook.com/"><BsFacebook className='text-4xl'></BsFacebook></Link>
                <Link target='_blank' to="https://twitter.com/"><BsTwitter className='text-4xl'></BsTwitter></Link>
                <Link target='_blank' to="https://www.google.com/"><BsGoogle className='text-4xl'></BsGoogle></Link>
                <Link target='_blank' to="https://www.youtube.com/"><BsYoutube className='text-4xl'></BsYoutube></Link>
            </div>
            <p className='text-center mt-5'>Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;