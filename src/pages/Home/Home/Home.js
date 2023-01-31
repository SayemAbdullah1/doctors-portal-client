import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../dentalCare/DentalCare';
import InfoCards from '../infoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;