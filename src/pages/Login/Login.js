import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data =>{
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border'>
                <h2 className='text-xl text-center mb-4'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email")} placeholder="First name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} placeholder="First name" className="input input-bordered w-full " />
                        <label className="label"><span className="label-text">Forgot password?</span></label>
                    </div>
                    
                    
                    <input type="submit" className='btn btn-neutral mt-2 w-full' value='Login' />
                </form>
                <p>New to doctors portal? <Link to='register' className='text-secondary'>Create new account.</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Login with google</button>
            </div>
        </div>
    );
};

export default Login;