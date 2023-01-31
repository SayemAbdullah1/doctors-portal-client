import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section className='mt-44' style={{
            background: `url(${appointment})`
        }}>
            
            <div className="hero lg:max-w-6xl lg:mx-auto mt-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" hidden lg:block max-w-lg rounded-lg bottom-0 -mt-36 pb-0" />
                    <div className='lg:ml-12 bottom-0'>
                        <p className="text-primary font-bold">Appointment</p>
                        <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;