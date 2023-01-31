import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div className="hero lg:max-w-6xl lg:mx-auto mt-24">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='' className="max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                <div className='lg:ml-12'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                   
                </div>
            </div>
        </div>
    );
};

export default DentalCare;