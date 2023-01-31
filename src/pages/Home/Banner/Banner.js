import React from 'react';
import img from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className=''>
                    <img src={img} alt='' className="lg:w-[592px] rounded-lg shadow-2xl " />
                </div>
                <div className=''>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;