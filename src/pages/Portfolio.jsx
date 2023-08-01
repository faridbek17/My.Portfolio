import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../assets/scss/main.scss';


// Iport Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

 function Portfolio() {
  return (
    <div className='portfolio'>
        <div className="portfolio_title">
            <h1 className='portfolio_h2'>Mening Ishim</h1>
        </div>

        <div className="swiper">  
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide> <img src="./img/myworks-1.png" alt="" /></SwiperSlide>
            <SwiperSlide> <img src="./img/myworks-2.png" alt="" /></SwiperSlide>
            <SwiperSlide> <img src="./img/myworks-3.png" alt="" /></SwiperSlide>
            <SwiperSlide> <img src="./img/myworks-4.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>  
    </div>

  )
}

export default Portfolio