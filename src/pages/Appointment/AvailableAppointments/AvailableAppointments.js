import React from 'react';
import { format } from 'date-fns';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
const AvailableAppointments = ({ selected }) => {
    return (
        <div>
            <h2 className='text-secondary font-bold text-center mb-12'>Available appointments on date {format(selected, 'PP')}</h2>
            <div>
                <AppointmentOptions></AppointmentOptions>
            </div>
        </div>
    );
};

export default AvailableAppointments;