import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import mark from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening hour',
            img: clock,
            Description: '9.00 am to 8.00 pm',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Location',
            img: mark,
            Description: 'Brooklyn, NY 10036, United States',
            bgClass: 'bg-neutral'
        },
        {
            id: 3,
            name: 'Contact us now',
            img: phone,
            Description: '+000 123 456789',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
            
                {
                    cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                    ></InfoCard>)
                }
            
        </div>
    );
};

export default InfoCards;