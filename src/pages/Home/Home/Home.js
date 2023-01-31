import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import DentalCare from '../dentalCare/DentalCare';
import InfoCards from '../infoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;