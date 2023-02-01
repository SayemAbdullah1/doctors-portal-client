import React, { useState } from 'react';
import img from '../../../assets/images/chair.png';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
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
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;