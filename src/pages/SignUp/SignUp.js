import React, {  useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(authContext)
    const [signupError, setSignUpError] = useState('')
    const handleRegister = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast('User create successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err => console.log(err))
        })
        .catch(err => 
            {console.error(err)
            setSignUpError(err.message)
            }
            )
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border'>
                <h2 className='text-xl text-center mb-4'>SignUp</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Your name</span></label>
                        <input type="text" {...register("name", { required: "Your name is required" })} className="input input-bordered w-full" />
                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 charecter length" }
                            })} className="input input-bordered w-full " />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forgot password?</span></label>
                    </div>


                    <input type="submit" className='btn btn-neutral mt-2 w-full' value='Login' />
                    {
                        signupError && <p className='text-red-600'>{signupError}</p>
                    }
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Login with google</button>
            </div>
        </div>
    );
};

export default SignUp;