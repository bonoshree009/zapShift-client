import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import axios from 'axios';



const Register = () => {
    const {register,handleSubmit, formState :{errors} }=useForm()
     const {registeruser,updateuserprofile} = useContext(AuthContext)
     const location =useLocation()
     const navigate =useNavigate()

 const handleform = (data) => {
    const profileImg = data.file[0];

    registeruser(data.email, data.password)
        .then((result) => {
            const user = result.user;
            console.log(user);

            // image upload
            const formData = new FormData();
            formData.append('image', profileImg);

            const imageApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImageBB}`;

            axios.post(imageApi, formData)
                .then(res => {
                    const imageUrl = res.data.data.url;
                    console.log("Image URL:", imageUrl);

                    // update profile
                    const userprofile = {
                        displayName: data.name,
                        photoURL: imageUrl
                    };

                    updateuserprofile(userprofile)
                        .then(() => {
                            console.log("Profile updated");
                            navigate(location.state || '/');
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log("Image upload error:", err));
        })
        .catch(error => {
            console.log(error);
        });
};
    return (
        <div>
           <form onSubmit={handleSubmit(handleform)}>
            <fieldset className="fieldset">
                 {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email",{required:true})} />
          {errors.email?.type === 'required' &&  <p className='text-red-500'>Email is requred</p>}
         
         {/* photo */}
         <label className="label">Photo</label>
          <input type="file" className="file-input file-input-ghost border-2 border-white" placeholder="photo" {...register("file",{required:true})} />
          {errors.file?.type === 'required' &&  <p className='text-red-500'>photo is requred</p>}

                {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password",{required:true, minLength: { value: 6,}})}/>
          {errors.password?.type === 'required' &&  <p className='text-red-500'>Password must be 6 charecter</p>}
         
          <button className="btn btn-neutral mt-4 bg-[#CAEB66] border-none text-[#73863A] font-bold text-2xl w-block">Register
        
          </button>
          
        </fieldset>
                <p>Already have an account?<Link  state={location.state} to="/login" className='text-[#73863A] ml-3'>Login</Link></p>
        
           </form>
           <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;