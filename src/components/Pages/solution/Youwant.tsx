import React from 'react'
import Image from 'next/image'
const Youwant = () => {
    return (
        <div className='custom-gradient w-full h-full text-white relative bg-gradient-to-r from-[rgba(0,48,76,1)] to-[rgba(0,114,178,1)]'>
            <div className='absolute left-0 top-0'> <Image

                src="/images/SOLUTION/Ellipse174.png"
                alt=""
                width={282}
                height={215}
                className="w-12/12 h-full "
            /></div>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10  pb-10'>
                    <div className='flex justify-center'>
                        <div className='w-10/12 pt-5  '><div className='leading-10 text-2xl font-bold '>You want to use your own identification material. No problem at all!</div>
                            <div className='leading-8 text-xs '>BLOCKCHAIN FARM works with companies and partners that supply identification materials. What you need to do is connect to our system via API to request an ID code from BLOCKCHAIN FARMand this code can be assigned to an ID in your system.</div>
                        </div></div>
                    <div className=''>
                        <div className='flex justify-center'>
                            <Image

                                src="/images/SOLUTION/frame1.png"
                                alt=""
                                width={282}
                                height={215}
                                className=" "
                                property="loading"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youwant
