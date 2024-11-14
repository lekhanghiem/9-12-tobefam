import React from 'react';
import Hr from '@/components/Global/Hr';
import { useTranslations } from "next-intl";
import Image from 'next/image'

const Blockchian = () => {
  const t = useTranslations('All');
  return (
    <div className="relative pb-40 md:pb-52">
      <div
        className="absolute top-0 w-full h-full "
        style={{
          backgroundImage: `url('/images/SOLUTION/Grouptefood.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative container mx-auto ">
        <div className="gap-3 text-white flex items-center justify-center flex-col pt-10 w-10/12 mx-auto py-5">
          <div className="text-center text-xl sm:text-2xl lg:text-4xl font-bold pb-4">
            {t('TE-FOOD BLOCKCHAIN ​​SYSTEM')}
          </div>
          <div className="">
            <Hr />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 w-10/12 gap-10 mx-auto pt-14">
          <div className="text-white text-left leading-8 text-xl">
           {t('Since 2016, the')}
          </div>
          <div>
            <div className="flex justify-center w-full h-full">
              <Image
                src="/images/SOLUTION/Frametefood.png"
                alt=""
                width={459}
                height={284}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchian;
