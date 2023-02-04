import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(authContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async ()=>{
           const res = await fetch(url)
           const data = await res.json()
           return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl'>My appointment</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bookings.map((booking, i) =>
                                <tr className="hover">
                                    <th>{i+1}</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                    <td>Purple</td>
                                </tr>
                            )
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;