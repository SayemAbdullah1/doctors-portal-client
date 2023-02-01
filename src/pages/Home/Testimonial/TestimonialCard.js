import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { name, image, location, review } = testimonial;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions mt-12">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt=''/>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <p className='font-bold'>{name}</p>
                        <p className='font-bold'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;