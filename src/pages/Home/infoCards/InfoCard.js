import React from 'react';

const InfoCard = ({card}) => {
    const { name, img, Description, bgClass } = card
    return (
        <div className={`card card-side shadow-xl px-[25px] py-[42px] text-white ${bgClass}`}>
            <figure><img src={img} alt="Movie" className='w-[50px]'/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{Description}</p>
            </div>
        </div>
    );
};

export default InfoCard;