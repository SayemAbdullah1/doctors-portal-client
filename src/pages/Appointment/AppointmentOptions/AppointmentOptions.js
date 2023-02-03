import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ApointmentOption from './ApointmentOption';
import BookingModal from './BookingModal/BookingModal';

const AppointmentOptions = ({ selected }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    const { data: appointmentOptions =[] } = useQuery({
        queryKey: ['appointmentOprions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
    })

    
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
                        selected={selected}
                        setTreatment={setTreatment}
                    ></BookingModal>
            }
        </div>
    );
};

export default AppointmentOptions;