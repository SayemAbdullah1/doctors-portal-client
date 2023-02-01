import React from 'react';
import bg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='' style={{
            background: `url(${bg})`
        }}>
            <div className='my-32 text-center py-12'>
                <div className='mb-12'>
                    <p className='text-primary font-bold'>Contact us</p>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>
                <form>
                    <input type="text" placeholder="Name" className="input w-full max-w-xs mb-4" /> <br />
                    <input type="text" placeholder="Email" className="input w-full max-w-xs mb-4" /> <br />
                    <textarea className="textarea textarea-bordered w-full max-w-xs mb-4" placeholder="Message"></textarea> <br />
                    <PrimaryButton className='px-4 btn-sm'>Submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default Contact;