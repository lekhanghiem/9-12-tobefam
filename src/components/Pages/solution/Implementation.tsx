import React from 'react'
import Image from 'next/image'
import { useTranslations } from "next-intl";

const Implementation = () => {
  const t = useTranslations('All');

    return (
        <div className='h-full w-full container mx-auto relative'>
          <div   className='absolute top-56 right-0'>
                            <Image

                                src="/images/SOLUTION/Ellipse170.png"
                                alt=""
                                width={451}
                                height={780}

                            />
                        </div>
            <div className=' text-white'>
                <div className=' '>

                    <div className='gap-5  flex items-center justify-center flex-col '>

                       <div className='py-10 flex-col'>
                         <div className=' text-center text-xl sm:text-4xl lg:text-3xl font-bold relative pb-3'>
                            {t('Implementation')}

                        </div>
                        <div className='w-12/12 h-2  bg-white rounded-full '></div>
                       </div>
                        <div className='text-xl leading-8 w-10/12 text-center'>
                        {t('We have a lot of experience and lessons in implementing')}
                           {t('We have faced many difficult challenges')}
                        </div>
                        <div className='text-xl leading-8 w-10/12 text-center'>
                        {t('With a team of IT')}</div>
                        <div className=''>
                            <div className=' text-center text-4xl font-bold py-10'>
                                {t('Implementation steps')}
                            </div>
                        </div>
                        <div className='px-10 '>
                            <div className='flex justify-center py-6'> <Image

                                src="/images/SOLUTION/Frame3.png"
                                alt=""
                                width={724}
                                height={815}
                                quality={100}
                                className="w-12/12 "
                            /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Implementation
