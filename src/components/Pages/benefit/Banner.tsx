import React from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations('All');
  return (
    <div className='relative'>
      <div className=' '>
        <Image

          src="/images/BENEFIT/bg.png"
          alt=""
          width={1000}
          height={1000000}
          className="w-full h-[300px] md:h-full "
          property="loading"
        />
        <div className='container w-11/12 mx-auto'>
            <div className='absolute inset-0 flex items-center justify-center flex-col gap-5'>
          <div className='text-gradient text-center text-6xl  font-bold '>
                      {t('What are the benefits of food traceability?')}
          </div>
        <div className='w-[20%] h-2 bg-white mx-auto rounded-xl'>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Page;
