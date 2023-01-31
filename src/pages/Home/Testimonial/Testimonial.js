import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <div className='mt-32'>
            <div className='flex justify-between align-center'>
                <div className=''>
                    <p className='text-primary'>Testimonial</p>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='lg:h-[150px] h-[79px]'/>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Testimonial;