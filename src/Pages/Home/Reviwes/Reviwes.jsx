import React, { use } from 'react';
import reviewheadimg from '../../../assets/customer-top.png'
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Reviwes = ({reviewPromise}) => {
    const reviewPromises= use(reviewPromise)
     console.log(reviewPromises)
    return (
        <div>
          <div className='flex flex-col justify-center items-center space-y-6 text-center'>
            <img src={reviewheadimg} alt="" />
            <h1 className='text-2xl font-bold'>What our customers are sayings</h1>
          <p className='px-2 mb-8'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
           </div>


           <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction :false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        
         {
         
                   reviewPromises.map(reviewcard => <SwiperSlide key={reviewcard.id}>
            <ReviewCard reviewcard={reviewcard} ></ReviewCard>
            </SwiperSlide> )

         }
        
        
      </Swiper>
          
        </div>
    );
};

export default Reviwes;