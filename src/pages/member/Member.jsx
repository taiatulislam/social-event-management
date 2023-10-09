import PropTypes from 'prop-types';

const Member = ({ member }) => {

    return (
        <div>
            <div className='text-center border-2 border-[#ff82c3e6] rounded-lg'>
                <img src={member.image} alt="" className='w-[200px] h-[200px] rounded-full mx-auto mt-3' />
                <h3 className='text-lg font-semibold mt-2'>{member.name}</h3>
                <p className='mb-3'>{member.designation}</p>
            </div>
        </div>
    );
};

Member.propTypes = {
    member: PropTypes.object
};

export default Member;