import PropTypes from 'prop-types';

const Review = ({ review }) => {
    return (
        <div>
            <div className='text-center border-2 border-[#ff82c3e6] rounded-lg w-[400px] px-5'>
                <img src={review.image} alt="" className='w-[200px] h-[200px] rounded-full mx-auto mt-3' />
                <h3 className='text-lg font-semibold mt-2'>{review.name}</h3>
                <p className='text-3xl text-[#ff82c3e6]'>{review.rating}</p>
                <p className='mb-3 text-justify'>{review.comment}</p>
            </div>
        </div>
    );
};

Review.propTypes = {
    review: PropTypes.object
};

export default Review;