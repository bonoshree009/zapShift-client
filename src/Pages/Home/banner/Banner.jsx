import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'

const Banner = () => {
    return (
       <Carousel autoPlay={true} infiniteLoop={true} className='my-2 p-2'>
                <div>
                    <div className='relative'> <img src={banner1} />
                    <div className='absolute hidden md:block
                      md:bottom-20 md:left-20'> 
                    <button className="btn bg-primary rounded-2xl">Track Your Parcel</button>
                    <button className="btn ml-3 font-bold">Be A Rider</button>
                    </div>
                    </div> 
                   
                    
                </div>
                <div>
                    <img src={banner2} />
                  
                </div>
                <div>
                    <img src={banner3} />
                   
                </div>
            </Carousel>
    );
};

export default Banner;