import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ data }) => {

    const { image, title, description, price } = data;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image} alt={`${title}`} className="rounded-xl w-full h-[250px]" />
            </figure>
            <div className="px-5 py-3 text-center">
                <h2 className="text-2xl font-semibold text-[#ff82c3]">{title}</h2>
                {description.length > 150 ? <p className='mt-2 text-justify'>{description.slice(0, 120)} <Link to='/login' className='text-[#ff82c3]'>Read more...</Link></p> :
                    <p className='mt-2 text-justify'>{description}</p>}
                <p className='text-left my-2 font-semibold text-[#ff82c3]'>Price: $ {price}</p>
                <div className="mt-2">
                    <button className="btn bg-[#ff82c3e6] w-full normal-case">Order package</button>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    data: PropTypes.object
};

export default Service;