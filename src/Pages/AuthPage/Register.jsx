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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt voluptatem cupiditate expedita dicta ad. Possimus architecto ducimus laboriosam obcaecati, eos tempora odit recusandae debitis modi hic dolorum, non deleniti!
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quis recusandae ex quod, distinctio molestiae! Delectus aliquid totam optio distinctio fuga ab, maiores odit repudiandae tempore debitis nulla ducimus sint.</h1>
          </p>
        </fieldset>
           </form>

        </div>
    );
};

export default Register;