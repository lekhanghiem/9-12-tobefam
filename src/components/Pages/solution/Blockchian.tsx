import React from 'react'
import { useTranslations } from "next-intl";
import Image from 'next/image';
const Blockchian = () => {
  const t = useTranslations('All');
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
                <div className='h-full lg:w-7/12   w-8/12  bg-[rgba(6,87,153,0.3)] shadow-[0_4px_4px_rgba(100,154,224,0.92)]  text-white md:px-10 px-3 py-2 md:py-10'>
                    <div className='font-bold leading-5  lg:leading-8 text-sm  lg:text-3xl'>
                        {t('Blockchain Ledger')}
                    </div>
                    <div>
                        <div className='flex flex-row gap-4 pt-5 px-5 '>
                            <div>
                                <Image
                                    src="/images/SOLUTION/openlock.png"
                                    alt=""
                                    width={55}
                                    height={55}

                                />
                            </div>
                            <div className='text-xl leading-8 text-white'>
                                {t('Blockchain provides a reliable')}
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 pt-5 px-5'>
                            <div>
                                <Image
                                    src="/images/SOLUTION/world.png"
                                    alt=""
                                    width={30}
                                    height={30}

                                />
                            </div>
                            <div className='text-xl leading-8'>
                                {t('It provides a global network of food quality')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blockchian