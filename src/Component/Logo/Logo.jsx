import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={'/'}><div className='flex  items-end'>
            <img src={logo} alt="" />
            <p className=' text-[15px] md:text-xl font-semibold -ms-3'>ZapShift</p>
        </div></Link>
    );
};

export default Logo;