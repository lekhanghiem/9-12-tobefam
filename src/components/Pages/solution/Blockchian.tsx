import React from 'react'
import Image from 'next/image';
const Blockchian = () => {
    return (
        <div className='relative '>
            <div className=' w-full h-full'>
                <Image

                    src="/images/SOLUTION/Group48.png"
                    alt=""
                    width={4051}
                    height={7800}
                    className='absolute w-full h-full'
                />
            </div>
            <div className='pl-10 lg:pl-40 py-20 lg:py-40 relative container mx-auto'>
                <div className='h-full lg:w-7/12   w-8/12  bg-[rgba(6,87,153,0.3)] shadow-[0_4px_4px_rgba(100,154,224,0.92)] border-2 text-white md:px-10 px-3 py-2 md:py-10'>
                    <div className='font-bold leading-5  lg:leading-8 text-sm  lg:text-3xl'>Blockchain Ledger</div>
                    <div>
                        <div className='flex flex-row gap-3 pt-2 lg:pt-6 px-3 lg:px-10'>
                            <div>
                                <Image
                                    src="/images/SOLUTION/openlock.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    
                                />
                            </div>
                            <div className='text-xs leading-5 text-white'>Blockchain provides a reliable and immutable network of traceable information. This commits to eliminating any possibility of supply chain data corruption.</div>
                        </div>
                        <div className='flex flex-row gap-2 pt-2 lg:pt-6 px-2 lg:px-10'>
                            <div>
                                <Image
                                    src="/images/SOLUTION/world.png"
                                    alt=""
                                    width={30}
                                    height={30}
                                    
                                />
                            </div>
                            <div className='text-xs leading-5'>It provides a global network of food quality and transportation information for livestock products and fresh foods.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blockchian