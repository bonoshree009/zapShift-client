import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../Context/AuthContext'


const Register = () => {
    const {register,handleSubmit, formState :{errors} }=useForm()
     const {registeruser} = use(AuthContext)

    const handleform =(data)=>{
        console.log(data)
        registeruser(data.email ,data.password).then(res=> res.user)
        .then( result => {console.log(result.user)}).catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
           <form onSubmit={handleSubmit(handleform)}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email",{required:true})} />
          {errors.email?.type === 'requred' &&  <p className='text-red-500'>Email is requred</p>}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password",{required:true, minLength:6})}/>
          {errors.password?.type === 'requred' &&  <p className='text-red-500'>Password must be 6 charecter</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          
        </fieldset>
           </form>

        </div>
    );
};

export default Register;