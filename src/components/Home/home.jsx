import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import img1 from '../images/img-1.webp';
import img2 from '../images/img-2.webp';
// import img3 from '../images/img-3.webp';

import './home.css';

const Home = () => {
  return (
    <div className="home-container">
       
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Scrollbar, Autoplay]}
        className="home-swiper"
      >
        <SwiperSlide>
          <img src={img1} alt="1" className="home-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="2" className="home-img" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={img3} alt="3" className="home-img" />
        </SwiperSlide> */}
      </Swiper>

    </div>

    
  );
};

export default Home;
