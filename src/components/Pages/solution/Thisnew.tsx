import React from 'react';
import Image from 'next/image';
import Hr from "@/components/Global/Hr";
import { useTranslations } from "next-intl";

const advantages = [
    "Low cost, 24/7 technical support service",
    "Large livestock corporations such",
    "Large retail systems such",
    "The system of veterinary staff"
];

const Thenew = () => {
  const t = useTranslations('All');
    return (
        <div className='h-full w-full relative py-20'>
            <div className='absolute top-0'>
                <Image
                    src="/images/SOLUTION/Ellipse172.png"
                    alt="Background Ellipse"
                    width={541}
                    height={602}
                    loading="lazy"
                    className='top-0'
                />
            </div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <Image
                        src="/images/SOLUTION/image.png"
                        alt="Blockchain Farm System"
                        width={541}
                        height={602}
                        className="mx-auto"
                    />
                    <div className='text-white text-xl leading-8 px-5'>
                        {t('This new BLOCKCHAIN FARM system can be deployed quickly within')}

                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-10/12 mx-auto py-10'>
                    <div className='flex flex-col'>
                        <div className='text-white text-3xl font-bold'>
                            {t('BLOCKCHAIN FARM Blockchain\'s full traceability service has strengths:')}

                        </div>
                        <div className='py-5'>
                            <Hr />
                        </div>
                        <div>
                            {advantages.map((advantage, index) => (
                                <div key={index} className='flex flex-row gap-3 mb-4'>
                                    <div className='w-3/12 h-20 flex items-center'>
                                        <Image
                                            src="/images/SOLUTION/Vectorthenew.png"
                                            alt={`Advantage icon ${index + 1}`}
                                            width={50}
                                            height={22}
                                            className=''
                                        />
                                    </div>
                                    <div className='text-white text-xl leading-8'>
                                        {t(advantage)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            src="/images/SOLUTION/Groupthenew.png"
                            alt="Blockchain Farm Advantages Illustration"
                            width={541}
                            height={602}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thenew;
