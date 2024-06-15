
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const BannerSlider = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Swiper
             // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="images/slider1.png.jpg" alt=""style={{width: "100", height:"100vh"}}  />
      </SwiperSlide>
      <SwiperSlide>
      <img src="images/slider2.png.jpg" alt=""  style={{width: "100", height:"100vh"}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="images/slider3.png.jpg" alt="" style={{width: "100", height:"100vh"}} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="images/slider4.png.jpg" alt="" style={{width: "100", height:"100vh"}} />
      </SwiperSlide>
      ...
    </Swiper>
        </div>
    );
};

export default BannerSlider;