import React from 'react'
import Image from 'next/image'
const Functions = () => {
    return (
        <div className='bg-gradient-to-r from-[rgba(0,251,145,1)] to-[rgba(3,99,153,1)] w-full h-full  text-white py-10'>
            <div className="container mx-auto ">
                <div className='text-3xl font-bold text-center '>   Functions</div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 w-11/12 mx-auto py-5'>
                    <div className="bg-gradient-to-r from-cyan-600/30 via-sky-600/30 to-indigo-600/30 w-full h-full rounded-xl shadow-custom ">
                        <div className='flex flex-col md:flex-row gap-3 py-6 px-3'>
                            <div className='mx-auto md:mx-0 w-4/12 md:w-3/12'>
                                <Image src="/images/SOLUTION/gear.png" alt="" width={120} height={120} />
                            </div>
                            <div className='text-sx leading-8'>We don't believe there is "one size fits all"! BLOCKCHAIN FARM provides tailor-made processes for each type and industry of food.</div>
                        </div>
                    </div> <div className="bg-gradient-to-r from-cyan-600/30 via-sky-600/30 to-indigo-600/30 w-full h-full rounded-xl shadow-custom ">
                        <div className='flex flex-col md:flex-row gap-3 py-6 px-3'>
                            <div className='mx-auto md:mx-0 w-4/12'>
                                <Image src="/images/SOLUTION/bitcoin.png" alt="" width={120} height={120} />
                            </div>
                            <div className='text-sx leading-8'>Although applying the most modern technology, BLOCKCHAIN FARM is the most suitable choice for developing countries due to: low price, excellent service and no need to invest in additional equipment or human resources.</div>
                        </div>
                    </div> <div className="bg-gradient-to-r from-cyan-600/30 via-sky-600/30 to-indigo-600/30 w-full h-full rounded-xl shadow-custom ">
                        <div className='flex flex-col md:flex-row gap-3 py-6 px-3'>
                            <div className='mx-auto md:mx-0 w-4/12'>
                                <Image src="/images/SOLUTION/diversity.png" alt="" width={120} height={120} />
                            </div>
                            <div className='text-sx leading-8'>BLOCKCHAIN FARM connects authorities, consumers and the entire supply chain into a traceability process to provide all necessary information such as reports, forecasts, and alarms. Fully automated Big Data analysis.</div>
                        </div>
                    </div> <div className=" bg-gradient-to-r from-cyan-600/30 via-sky-600/30 to-indigo-600/30 w-full h-full rounded-xl shadow-custom  ">
                        <div className='flex flex-col md:flex-row gap-3 py-6 px-3'>
                            <div className='mx-auto md:mx-0 w-4/12'>
                                <Image src="/images/SOLUTION/trade.png" alt="" width={120} height={120} />
                            </div>
                            <div className='text-sx leading-8'>Food supply chains are increasingly global, so BLOCKCHAIN FARM has applied international standards such as GS1 and Global GAP to meet all requirements of every country in the world.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Functions
