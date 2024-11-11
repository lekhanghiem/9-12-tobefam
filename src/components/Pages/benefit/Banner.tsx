import React from 'react';
import Image from 'next/image';
import Hr from "@/components/Global/Hr";

const Page = () => {
  return (
    <div className='relative'>
      <div className=' '>
        <Image
       
          src="/images/BENEFIT/bg.png"
          alt=""
          width={1000}
          height={1000000}
          className="w-full h-full "
          property="loading"
        />
        <div className='container mx-auto'>
            <div className='absolute inset-0 flex items-center justify-center flex-col gap-5'>
          <div className='text-gradient text-center text-xl sm:text-2xl lg:text-3xl font-bold '>
            What are the benefits of food traceability?
          </div>
       <div><Hr/></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Page;
