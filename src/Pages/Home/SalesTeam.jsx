import React from 'react';
import amazonV from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstar from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import starP from '../../assets/brands/start_people.png'
import Marquee from "react-fast-marquee";

const SalesTeam = () => {
    return (

        <div className='text-2xl text-center font-bold my-6 border-b border-dotted px-4 '>We've helped thousands ofsales teams
        

        <Marquee pauseOnHover>
           <div className='flex  justify-center items-center  gap-5 md:gap-20 my-5 md:my-20 '>
            <img src={amazonV} alt="" /> 
             <img src={casio} alt="" /> 
              <img src={moonstar} alt="" /> 
               <img src={randstar} alt="" /> 
                <img src={star} alt="" /> 
                 <img src={starP} alt="" /> 
   </div>
                </Marquee>
   </div>

    );
};

export default SalesTeam;