import { Link } from 'react-router-dom';
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div className='bg-[#FFFBF7] h-[100vh]'>
            <img src={error} alt="" className='mx-auto w-3/5' />
            <div className='flex flex-col items-center -mt-28'>
                <h3 className='text-3xl font-semibold'>Page not found</h3>
                <p className='my-3'>Error </p>
                <Link to="/" className='btn text-[#ff82c3e6] border-[#ff82c3e6] border-2'>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;