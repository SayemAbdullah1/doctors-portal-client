import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login } = useContext(authContext)
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    if(token){
        navigate(from, { replace: true });
    }

    const handleLogin = data =>{
        console.log(data);
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
                
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border'>
                <h2 className='text-xl text-center mb-4'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", { required: "Email Address is required" })} placeholder="First name" className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", 
                        { required: "Password is required",
                         minLength: {value: 6, message: "Password must be 6 charecter length"} 
                         })} className="input input-bordered w-full " />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forgot password?</span></label>
                    </div>
                    
                    
                    <input type="submit" className='btn btn-neutral mt-2 w-full' value='Login' />
                    <div>
                       { loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to doctors portal? <Link to='/signup' className='text-secondary'>Create new account.</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Login with google</button>
            </div>
        </div>
    );
};

export default Login;