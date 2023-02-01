import React from 'react';

const ApointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card lg:shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ApointmentOption;