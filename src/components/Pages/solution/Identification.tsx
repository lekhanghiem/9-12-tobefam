import React from 'react'
import Image from 'next/image'
const Identification = () => {
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
                    <div className='text-center leading-10 text-3xl font-bold py-10'>Identification materials</div>
                </div>
                <div className='pb-5'>
                    <div className=' flex flex-col md:flex-row px-10'>
                        <div className='w-12/12'>
                            <div className=''>
                                <div className='leading-8 text-2xl'>
                                    For the upstream supply chain
                                </div>
                                <div className='leading-8 pt-5'>The plastic security ring containing the QR code and RFID tag is made from non-toxic materials with a water and sun-resistant printing technique.</div>
                            </div>

                            <div className='pl-10 pt-10'>
                                <div className='flex md:flex-row flex-col gap-3'>
                                    <div className='my-auto'>
                                        <Image
                                            src="/images/SOLUTION/transport.png"
                                            alt=""
                                            width={60}
                                            height={60}
                                        />
                                    </div>
                                    <div className='leading-8 text-xs'>The plastic security ring containing the QR code and RFID tag is made from non-toxic materials with a water and sun-resistant printing technique.
                                    </div>
                                </div> <div className='flex md:flex-row flex-col gap-3 pt-3'>
                                    <div className='my-auto'>
                                        <Image
                                            src="/images/SOLUTION/procurement.png"
                                            alt=""
                                            width={60}
                                            height={60}
                                            className=''
                                        />
                                    </div>
                                    <div className='leading-8 text-xs'>The plastic security ring containing the QR code and RFID tag is made from non-toxic materials with a water and sun-resistant printing technique.
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
                        <div className='leading-10 text-2xl pt-3'>For the downstream supply chain</div>
                        <div className='leading-8 text-xs pt-5'>Use QR codes on stamps and labels printed on shopping bags to retrieve product information in retail channels.</div>
                        <div className='flex md:flex-row flex-col gap-4 pt-4'>
                            <div className='mx-auto md:mx-0'> <Image
                                src="/images/SOLUTION/qrcode.png"
                                alt=""
                                width={60}
                                height={60}
                            /></div>
                            <div className='leading-8 text-xs'>The QR code on the stamp is combined with an easily recognizable color code (colorgram) to check validity by image.</div>
                        </div> <div className='flex md:flex-row flex-col gap-4 py-4'>
                            <div className='mx-auto md:mx-0'> <Image
                                src="/images/SOLUTION/app.png"
                                alt=""
                                width={60}
                                height={60}
                            /></div>
                            <div className='leading-8 text-xs'>The QR code on the stamp is combined with an easily recognizable color code (colorgram) to check validity by image.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Identification
