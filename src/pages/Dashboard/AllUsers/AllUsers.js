import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const { data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
        const res = await fetch('http://localhost:5000/users')
        const data = await res.json()
        return data
        }
    })
    return (
        <div>
            <div className="text-3xl">All users</div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) =>
                                <tr key={user._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>update</td>
                                    <td>delete</td>

                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;