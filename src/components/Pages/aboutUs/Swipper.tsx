'use client'
import { useTranslations } from 'next-intl'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'

export default function App() {
  const t = useTranslations('All')
  const pagination = {
    clickable: true,
    dynamicBullets: true
  }
  return (
    <>
      <div className="bg-[url('/img/home/Group48096598.png')] bg-cover bg-center">
        <div className="py-10">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            effect={'fade'}
            spaceBetween={30}
            pagination={pagination}
            modules={[Autoplay, EffectFade, Pagination]}
            className=" h-full w-6/12  shadow-2xl rounded-2xl"
          >
            <div className="w-6/12">
              <SwiperSlide>
                <div className="   shadow-2xl">
                  <Image
                    src="/images/aboutUs/case_study_1.jpg"
                    alt=""
                    width={1000}
                    height={1000000}
                    className="w-full md:h-full h-[300px] "
                    property="loading"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="   shadow-2xl">
                  <Image
                    src="/images/aboutUs/case_study_2.jpg"
                    alt=""
                    width={1000}
                    height={1000000}
                    className="w-full md:h-full h-[300px] "
                    property="loading"
                  />
                </div>
              </SwiperSlide>{' '}
              <SwiperSlide>
                <div className="   shadow-2xl">
                  <Image
                    src="/images/aboutUs/case_study_3.jpg"
                    alt=""
                    width={1000}
                    height={1000000}
                    className="w-full md:h-full h-[300px] "
                    property="loading"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
}
