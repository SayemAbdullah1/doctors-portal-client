import React from 'react';

const BookingModal = ({ treatment }) => {
    const {name} = treatment
    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle bg-" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-4'>
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Full Name" className="input w-full input-bordered" />
                        <input type="text" placeholder="Phone" className="input w-full input-bordered" />
                        <input type="text" placeholder="Email" className="input w-full input-bordered" />
                        <br />
                        <input type="button" className=' btn btn-neutral w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;