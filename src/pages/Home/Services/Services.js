import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            img: cavity,
            title: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
       
    return (
        <div className='my-24'>
            <div className='text-center mb-12'>
                <h1 className='text-primary font-bold'>Our services</h1>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 lg:w-full lg:mx-auto lg:ml-8'>
                {
                    serviceData.map(card => <ServiceCard
                        key={card.id}
                        card={card}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;