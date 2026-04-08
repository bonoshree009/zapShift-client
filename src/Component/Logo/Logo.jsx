import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        
           <div className="flex items-end">
            <img src={logo} alt="ZapShift" />
            <p className="text-[15px] md:text-xl font-semibold -ms-3">
                ZapShift
            </p>
        </div>
      
    );
};

export default Logo;

