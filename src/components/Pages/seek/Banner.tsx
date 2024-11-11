import React from 'react';
import Hr from '@/components/Global/Hr';
import Image from 'next/image';
const banner = () => {
  return (
    <div className="relative">
      <div className=" ">
        <Image
        
          src="/images/SOLUTION/bg.png"
          alt=""
          width={1000}
          height={1000000}
          className="w-full h-full "
          property="loading"
        />
        <div className=" gap-3 absolute inset-0 flex items-center justify-center flex-col text-center container mx-auto">
          <div className="text-gradient  text-xl sm:text-2xl lg:text-3xl font-bold ">
            Seek an origin
          </div>
          <div>
            <Hr />
          </div>

        </div>
      </div>
    </div>
  );
};

export default banner;
