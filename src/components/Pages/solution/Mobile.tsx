import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';

// import required modules

export default function App() {
  return (
    < >
      <div className='text-white text-center w-10/12 mx-auto pt-5 container mx-auto'>
        <div className='text-3xl leading-10 font-bold'>Mobile application for business customers</div>
        <div className='text-sm leading-8 pt-5'>
          BLOCKCHAIN FARM does not require specialized hardware. All companies in the supply chain
          use the same mobile application. The application provides customized processes and
          functions for each food type (pig, chicken, egg, or other product) and each role in the
          supply chain (farm, slaughterhouse). The mobile app for business customers works on any
          phone, and integrates all the supply chain functions a company needs.
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        rewind={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="flex justify-center pt-32">
            <Image

              src="/images/SOLUTION/phone1.png"
              alt=""
              width={103}
              height={212}
              property="loading"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center pt-24">
            <Image

              src="/images/SOLUTION/phone2.png"
              alt=""
              width={142}
              height={292}
              property="loading"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center pt-20">
            <Image

              src="/images/SOLUTION/phone3.png"
              alt=""
              width={202}
              height={416}
              property="loading"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center pt-24">
            <Image

              src="/images/SOLUTION/phone4.png"
              alt=""
              width={142}
              height={292}
              property="loading"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center pt-32">
            <Image
             
              src="/images/SOLUTION/phone5.png"
              alt=""
              width={103}
              height={212}
              property="loading"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
