import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const {register,handleSubmit}=useForm()
    const handleform =(data)=>{
        console.log(data)

    }
    return (
        <div>
           <form onSubmit={handleSubmit(handleform)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email",{required:true})} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("email",{required:true})}/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          
        </fieldset>
           </form>

        </div>
    );
};

export default Register;