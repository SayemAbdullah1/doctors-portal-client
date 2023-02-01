import React, { useEffect, useState } from 'react';
import ApointmentOption from './ApointmentOption';
import BookingModal from './BookingModal/BookingModal';

const AppointmentOptions = () => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect( ()=>{
        fetch('apointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    appointmentOptions.map(appointmentOption => <ApointmentOption
                        key={appointmentOption.id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></ApointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    ></BookingModal>
            }
        </div>
    );
};

export default AppointmentOptions;