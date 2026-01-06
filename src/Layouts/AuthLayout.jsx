import React from 'react';
import Logo from '../Component/Logo/Logo';
import authimg from '../assets/authImage.png'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto p-2'>
            <Logo></Logo>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='flex-1 my-10 p-2'> <Outlet></Outlet></div>
                <div className='flex-1 md:flex-1'>
                    <img src={authimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;