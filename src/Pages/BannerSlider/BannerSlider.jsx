
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
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img className=' w-9/12 mt-12  mx-auto rounded mb-6' src="images/slider2.png.jpg" alt=""  />
      </SwiperSlide>
      <SwiperSlide>
      <img className=' w-9/12 mt-12  mx-auto rounded' src="images/slider3.png.jpg" alt=""   />
      </SwiperSlide>
      <SwiperSlide>
      <img className=' w-9/12 mt-12 mx-auto rounded' src="images/slider1.png.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className=' w-9/12 mt-12 mx-auto rounded' src="images/slider4.png.jpg" alt=""/>
      </SwiperSlide>
      ...
    </Swiper>
        </div>
    );
};

export default BannerSlider;