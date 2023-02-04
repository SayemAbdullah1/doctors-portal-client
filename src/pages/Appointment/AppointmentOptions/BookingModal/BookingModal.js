import React, { useContext } from 'react';
import { format } from 'date-fns';
import { authContext } from '../../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
    const date = format(selected, 'PP')
    const {name: treatmentName, slots} = treatment
    const {user} = useContext(authContext)

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        
        
        const booking = {
        treatment: treatmentName,
        patient: name,
        appointmentDate: date,
        slot,
        email,
        phone
    }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged){
                setTreatment(null)
                toast.success('Booking confirmed')
                refetch()
            }else{
                toast.error(data.message)
            }


        })
    }
    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle bg-" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-4'>
                        <input type='text' value={date} className="input w-full input-bordered bg-slate-300" disabled/>
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full Name" className="input w-full input-bordered" />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Email" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered" />
                        <br />
                        <input type="submit"  className=' btn btn-neutral w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;