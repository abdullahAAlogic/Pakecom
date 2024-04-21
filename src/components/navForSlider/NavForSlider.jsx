import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'; 
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

 function NavForSlider({data}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.images.map((item,index)=>{
          return(
            <SwiperSlide key={index}>
              {item ?  <img src={item} /> : <img src="https://fakeimg.pl/326x326/00e1ff/000000?font=noto" alt="images" />}
             
            </SwiperSlide>
          )
        })}
       
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwipernav"
      >
      {data?.images.map((item,index)=>{
          return(
            <SwiperSlide key={index}>
              {item ?  <img src={item} /> : <img src="https://fakeimg.pl/326x326/00e1ff/000000?font=noto" alt="images" />}
             
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}


export default NavForSlider