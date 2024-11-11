import React from 'react'
import Image from 'next/image'

const Swiper1 = () => {
    return (
        <div className='bg-customSwiper1 text-white relative py-10 container mx-auto'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10  relative  w-11/12 mx-auto' >

                <div className=' w-11/12 h-full md:py-16 px-2 md:px-10 py-10 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex  py-1 '>
                        <div className=''>
                            <div><Image
                               
                                src="/images/SOLUTION/setting.png"
                                alt=""
                                width={80}
                                height={75}
                                className=" "

                            /></div>
                        </div>
                    </div>
                    <div className='  text-center'><div className="text-white text-2xl leading-7   md:py-5md:px-1 py-3">The process is based on the roles of units and types of food</div>
                        <div className="text-white text-xs py-1 leading-7" >For BLOCKCHAIN FARM, each unit (farm, slaughterhouse,...) has its own processes, options and functions.</div>
                    </div>

                </div>
                <div className=' w-11/12 h-full md:py-16 px-2 md:px-10 py-10 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex  py-1 '>
                        <div className=''>
                            <div><Image
                               
                                src="/images/SOLUTION/expand.png"
                                alt=""
                                width={80}
                                height={75}
                                className=" "

                            /></div>
                        </div>
                    </div>
                    <div className='  text-center'><div className="text-white text-2xl leading-7   md:py-5md:px-1 py-3">Large-scale data</div>
                        <div className="text-white text-xs py-1 leading-7" >Transportation transactions (delivery and receipt), food safety information (about weight, feed, vaccination, antibiotic use, quarantine,...)</div>
                    </div>

                </div>
                <div className=' w-11/12 h-full md:py-16 px-2 md:px-10 py-10 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex  py-1 '>
                        <div className=''>
                            <div><Image
                               
                                src="/images/SOLUTION/wifi.png"
                                alt=""
                                width={80}
                                height={75}
                                className=" "

                            /></div>
                        </div>
                    </div>
                    <div className='  text-center'><div className="text-white text-2xl leading-7   md:py-5md:px-1 py-3">Offline connection</div>
                        <div className="text-white text-xs py-1 leading-7" >The app uses the phone's camera to read 1D or 2D barcodes to identify objects (livestock, transport, food) as part of the process.</div>
                    </div>

                </div>
                <div className=' w-11/12 h-full md:py-16 px-2 md:px-10 py-10 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex  py-1 '>
                        <div className=''>
                            <div><Image
                               
                                src="/images/SOLUTION/environment.png"
                                alt=""
                                width={80}
                                height={75}
                                className=" "

                            /></div>
                        </div>
                    </div>
                    <div className='  text-center'><div className="text-white text-2xl leading-7   md:py-5md:px-1 py-3">Suitable for developing countries</div>
                        <div className="text-white text-xs py-1 leading-7" >BLOCKCHAIN FARM requires no special phone configuration. All features of the application work well on all phones.</div>
                    </div>

                </div>
                
                
                <div className=' w-11/12 h-full md:py-16 px-2 md:px-10 py-10 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex  py-1 '>
                        <div className=''>
                            <div><Image
                               
                                src="/images/SOLUTION/customer.png"
                                alt=""
                                width={80}
                                height={75}
                                className=" "

                            /></div>
                        </div>
                    </div>
                    <div className='  text-center'><div className="text-white text-2xl leading-7   md:py-5md:px-1 py-3">Multi-language support</div>
                        <div className="text-white text-xs py-1 leading-7" >Currently, 3 languages ​​are integrated. New languages ​​will be integrated very quickly as needed.</div>
                    </div>

                </div>
                <div className=' w-11/12 h-full md:py-16 px-2 md:px-10 py-10 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex  py-1 '>
                        <div className=''>
                            <div><Image
                               
                                src="/images/SOLUTION/language.png"
                                alt=""
                                width={80}
                                height={75}
                                className=" "

                            /></div>
                        </div>
                    </div>
                    <div className='  text-center'><div className="text-white text-2xl leading-7   md:py-5md:px-1 py-3">Management of identification materials</div>
                        <div className="text-white text-xs py-1 leading-7" >The function of ordering and managing traceable material inventory is integrated in the application.</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Swiper1
