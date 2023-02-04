import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../shared/Loading/Loading';
import ApointmentOption from './ApointmentOption';
import BookingModal from './BookingModal/BookingModal';

const AppointmentOptions = ({ selected }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selected, 'PP')

    const { data: appointmentOptions =[], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOprions, date'],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }

    
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
                        refetch={refetch}
                    ></BookingModal>
            }
        </div>
    );
};

export default AppointmentOptions;