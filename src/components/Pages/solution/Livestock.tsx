import React from 'react'
import Image from 'next/image';
const Livestock = () => {
    return (
        <div className='w-full h-full pt-10 pb-20 container mx-auto'>
            <div className='gap-3 text-white flex items-center justify-center flex-col relative'>

                <div className=' text-center text-xl sm:text-2xl lg:text-3xl font-bold relative'>
                    Livestock registration and management system
                </div>
                <div className='w-2/12 h-2 bg-white rounded-full '></div>
                <div className='text-sm leading-6 w-10/12 text-center pt-3'>As part of the food safety control tools provided to authorities, our Livestock Registration and Management System allows national or local authorities to receive reports periodically directly from the farms.
                </div>
                <div className='text-sm leading-6 w-10/12 text-center'>The system provides complete information from farm livestock inventories to sales and export reports. To provide the necessary data, farms need to download the mobile app or connect their system to BLOCKCHAIN FARM's API.</div>


            </div>
            <div className='grid xl:grid-cols-3 grid-cols-1 pt-20 w-12/12 mx-auto '>
                <div className='flex flex-col  mx-auto text-white  w-10/12 h-full gap-7 py-32  px-3   hoverlive'>
                    <div className='flex justify-center '>
                        <Image

                            src="/images/SOLUTION/analyze.png"
                            alt=""
                            width={59}
                            height={59}
                            className=''
                        />
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl  leading-10 '>Easy to do</div>
                        <div className='leading-6 py-6 text-sm'>No additional equipment is required and complete training is available.</div>
                    </div>
                </div>
                <div className='flex flex-col  mx-auto text-white  w-10/12 h-full gap-7 py-32  px-3   hoverlive'>
                    <div className='flex justify-center '>
                        <Image

                            src="/images/SOLUTION/thumbup.png"
                            alt=""
                            width={59}
                            height={59}
                            className=''
                        />
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl  leading-10 '>Benefits for everyone</div>
                        <div className='leading-6 py-6 text-sm'>Direct consulting helps companies in the supply chain improve operational efficiency.</div>
                    </div>
                </div> <div className='flex flex-col  mx-auto text-white  w-10/12 h-full gap-7 py-32  px-3   hoverlive '>
                    <div className='flex justify-center '>
                        <Image

                            src="/images/SOLUTION/financialchat.png"
                            alt=""
                            width={59}
                            height={59}
                            className=''
                        />
                    </div>
                    <div className='text-center'>
                        <div className='text-3xl  leading-10 '>Full comprehensive report</div>
                        <div className='leading-6 py-6 text-sm'>Real-time information about the livestock situation of a region or country.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Livestock