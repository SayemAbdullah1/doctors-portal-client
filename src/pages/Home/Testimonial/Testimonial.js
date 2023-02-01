import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: 'Winson Herry',
            image: people1,
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name: 'Winson Herry',
            image: people2,
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: 'Winson Herry',
            image: people3,
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    testimonialData.map(testimonial => <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;