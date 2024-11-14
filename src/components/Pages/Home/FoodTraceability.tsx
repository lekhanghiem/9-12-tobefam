import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import FadeLeft from '@/motion/FadeLeft'

const FoodTraceability = () => {
  const t = useTranslations('All')

  const items = [
    'Support food supply chains to operate more efficiently and transparently',
    'Support exporters to meet the regulatory requirements of importing countries',
    'Building, promoting, and protecting brands',
    'Prevent and minimize the impact of epidemics, fake and dirty foods',
    'Increase consumer confidence',
    'Support state management, balance supply and demand, and prevent epidemics'
  ]
  return (
    <div>
      <div className="  relative h-full">
        <Image
          className="absolute right-0 w-6/12 h-full "
          src="/images/HOME/bgRightFood.png"
          alt=""
          width={1395}
          height={5000000}
        />
        <FadeLeft className=" w-full  h-full  mx-auto">
          <div className="  w-6/12 text-white pl-5 py-10">
            <p className="py-3 font-bold text-4xl  leading-9">
              {t(
                'TE-FOOD is a Food Traceability System from Farm to Table that aims to:'
              )}
            </p>
            <hr className="bg-[#02e09b] py-1 w-9/12 rounded-full" />
            <div className="w-full pl-5">
              <ol className="text-2xl flex flex-col gap-3">
                {items.map((item, index) => (
                  <li key={index} className="leading-8 pt-6">
                    {index + 1}. {t(item)}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </FadeLeft>
      </div>
    </div>
  )
}

export default FoodTraceability
