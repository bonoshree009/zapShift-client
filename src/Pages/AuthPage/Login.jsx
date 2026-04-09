import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';

const Login = () => {


    const {register,handleSubmit, formState :{errors} }=useForm()
         const {signInUser} = useContext(AuthContext)
    
        const handleform =(data)=>{
            console.log(data)
            signInUser(data.email ,data.password).then(res=> res.user)
            .then( result => {console.log(result.user)}).catch(error =>{
                console.log(error)
            })
        }
    return (
         <div>
           <form onSubmit={handleSubmit(handleform)}>

            <h1 className='text-[#73863A] font-bold text-4xl my-3'>Welcome Back!</h1>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email",{required:true})} />
          {errors.email?.type === 'required' &&  <p className='text-red-500'>Email is requred</p>}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password",{required:true, minLength: { value: 6,}})}/>
          {errors.password?.type === 'required' &&  <p className='text-red-500'>Password must be 6 charecter</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 bg-[#CAEB66] border-none text-[#73863A] font-bold text-2xl">Login</button>
          
        </fieldset>
        <p>New in ZapShift <Link to="/register" className='text-[#73863A]'>Register</Link></p>
           </form>
           <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;