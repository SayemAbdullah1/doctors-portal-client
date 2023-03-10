import React from 'react';

const ApointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card lg:shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                    <label  
                    disabled={slots.length === 0}
                    htmlFor="book-modal" 
                    className="btn btn-primary"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ApointmentOption;