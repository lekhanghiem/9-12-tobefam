import React from 'react'
import Image from 'next/image'
import Hr from '@/components/Global/Hr'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('All')

  return (
    <div className="relative">
      <div className=" ">
        <Image
          src="/images/BENEFIT/bg.png"
          alt=""
          width={1000}
          height={1000000}
          className="w-full md:h-full h-[300px] "
          property="loading"
        />
        <div className="container mx-auto">
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-5">
            <div className="text-gradient text-center text-6xl font-bold ">
              {t('About us')}
            </div>
            <Hr />
            <div className="text-gradient text-center text-4xl  font-bold ">
              {t('Continuously improving to better serve customers')}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Page
