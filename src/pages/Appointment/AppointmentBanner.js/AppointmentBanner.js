import React from 'react';
import img from '../../../assets/images/chair.png';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({ selected, setSelected }) => {


    
    return (
        <header style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero my-24">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                    <div className=''>
                        <img src={img} alt='' className="lg:w-[592px] rounded-lg shadow-2xl " />
                    </div>
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;