import React from 'react'
import Image from 'next/image'
import { useTranslations } from "next-intl";

const Identification = () => {
  const t = useTranslations('All');

    return (
        <div  className='h-full w-full text-white relative  '>
            <div className='container mx-auto'>
                <div className='absolute top-5 right-0'>
                    <Image
                        src="/images/SOLUTION/Ellipse170.png"
                        alt=""
                        width={451}
                        height={780}
                    />
                </div>
                <div>
                    <div className='text-center leading-10 text-4xl font-bold py-10'>
                        {t('Identification materials')}
                    </div>
                </div>
                <div className='pb-5'>
                    <div className=' flex flex-col md:flex-row px-10'>
                        <div className='w-12/12'>
                            <div className=''>
                                <div className='leading-8 text-2xl font-bold'>
                                     {t('For the upstream supply chain')}

                                </div>
                                <div className='leading-8 text-xl pt-5'>
                                     {t('The plastic security ring containing')}

                                    </div>
                            </div>

                            <div className='pl-10 pt-10'>
                                <div className='flex md:flex-row flex-col gap-3'>
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            src="/images/SOLUTION/transport.png"
                                            alt=""
                                            width={60}
                                            height={60}
                                        />
                                    </div>
                                    <div className='leading-8 text-xl'>
                                        {t('Security rings are used to identify livestock')}

                                    </div>
                                </div> <div className='flex md:flex-row flex-col gap-3 pt-3'>
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            src="/images/SOLUTION/procurement.png"
                                            alt=""
                                            width={60}
                                            height={60}
                                            className=''
                                        />
                                    </div>
                                    <div className='leading-8 text-xl'>
                                        {t('Inventory-aware')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-full'> <Image
                                src="/images/SOLUTION/Group.png"
                                alt=""
                                width={500}
                                height={500}
                            /></div>
                        </div>
                    </div>
                </div>
                <div className='h-1 w-10/12 bg-green-500 mx-auto'></div>
                <div className='flex md:flex-row flex-col ' >
                    <div className='relative'>
                        <div className="z-40 pl-2">  <Image
                            src="/images/SOLUTION/Vector.png"
                            alt=""
                            width={500}
                            height={500}
                            className='  '
                        /></div>

                        <div className="z-0 absolute top-0 ">
                            <Image
                                src="/images/SOLUTION/frame.png"
                                alt=""
                                width={500}
                                height={500}
                                className='  '
                            /></div>
                    </div>
                    <div className='px-3'>
                        <div className='leading-10 text-2xl pt-3'>
                            {t('For the downstream supply chain')}
                        </div>
                        <div className='leading-8 text-xl pt-5'>
                            {t('Use QR codes on stamps and labels printed on shopping bags to retrieve')}
                            </div>
                        <div className='flex md:flex-row flex-col gap-4 pt-4'>
                            <div className='mx-auto md:mx-0'> <Image
                                src="/images/SOLUTION/qrcode.png"
                                alt=""
                                width={60}
                                height={60}
                            /></div>
                            <div className='leading-8 text-xl'>
                                {t('The QR code on the stamp is combined with')}
                            </div>
                        </div> <div className='flex md:flex-row flex-col gap-4 py-4'>
                            <div className='mx-auto md:mx-0'> <Image
                                src="/images/SOLUTION/app.png"
                                alt=""
                                width={60}
                                height={60}
                            /></div>
                            <div className='leading-8 text-xl'>
                                {t('BLOCKCHAIN FARM can integrate with smart')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Identification
