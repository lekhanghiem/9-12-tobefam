import React from 'react'
import Image from 'next/image'
const Benefit = () => {
    return (
        <div className='bg-custombenefit text-white relative py-10'>


            <div className="absolute top-0">
                <Image

                    src="/images/SOLUTION/168.png"
                    alt=""
                    width={541}
                    height={602}
                    className="w-12/12 h-full "
                    property="loading"
                />

            </div>
            <div className='container mx-auto'>
                  <div className='text-center '>
                <h1 className='text-3xl font-bold leading-10'>Revolutionizing Agriculture with new technologies</h1>
                <div className='text-xs pb-6 leading-8 pt-6 px-3'>The global Agriculture industry is at the frontier of revolutionary change. New technologies have become cheaper and more reliable. This takes automation and food safety control to a higher level for every supply chain. If we do not promptly apply advanced technologies, countries and companies will fall behind in the global economy.</div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-20 px-10 relative ' >

                <div className=' w-11/12 h-full md:py-5 px-2 md:px-10 py-3 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex pt-10'>
                        <Image
                            
                            src="/images/SOLUTION/blockchain.png"
                            alt=""
                            width={120}
                            height={120}
                            className=" absolute "
                            property="loading"
                        />
                    </div>
                    <div className='pt-36 px-2 text-center'><div className="text-white text-3xl leading-10   md:py-5 px-2 md:px-10 py-3">BlockChain</div>
                        <div className="text-white text-xs py-1 leading-8" >Blockchain technology is a revolution in storing, exchanging and authenticating data so that all information becomes honest, transparent and unchangeable.</div>
                    </div>

                </div> <div className=' w-11/12 h-full md:py-5 px-2 md:px-10 py-3 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex pt-10'>
                        <Image
                            
                            src="/images/SOLUTION/artificial.png"
                            alt=""
                            width={120}
                            height={120}
                            className=" absolute "
                            property="loading"
                        />
                    </div>
                    <div className='pt-36 px-2 text-center'><div className="text-white text-3xl leading-10   md:py-5 px-2 md:px-10 py-3">Artificial intelligence</div>
                        <div className="text-white text-xs py-1 leading-8" >Blockchain FARM uses automated fraud detection mechanisms. The system continuously improves the search for unusual activities and potential fraud in the supply chain to promptly prevent, making the supply chain more transparent.</div>
                    </div>

                </div> <div className=' w-11/12 h-full md:py-5 px-2 md:px-10 py-3 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex pt-10'>
                        <Image
                            
                            src="/images/SOLUTION/internet.png"
                            alt=""
                            width={120}
                            height={120}
                            className=" absolute "
                            property="loading"
                        />
                    </div>
                    <div className='pt-36 px-2 text-center'><div className="text-white text-3xl leading-10   md:py-5 px-2 md:px-10 py-3">Internet of thingss</div>
                        <div className="text-white text-xs py-1 leading-8" >With a highly diverse network of sensors throughout the supply chain, data is automatically updated where events occur and traceability is real-time. The Internet of Things will bring a new era in food control, reduce the use of manual labor, and reduce human errors.</div>
                    </div>

                </div> <div className=' w-11/12 h-full md:py-5 px-2 md:px-10 py-3 mx-auto  rounded-3xl bg-customBlue shadow-custom relative'>
                    <div className=' justify-center flex pt-10'>
                        <Image
                            
                            src="/images/SOLUTION/analytics.png"
                            alt=""
                            width={120}
                            height={120}
                            className=" absolute "
                            property="loading"
                        />
                    </div>
                    <div className='pt-36 px-2 text-center'><div className="text-white text-3xl leading-10   md:py-5 px-2 md:px-10 py-3">Deep data analysis</div>
                        <div className="text-white text-xs py-1 leading-8" >

                            BLOCKCHAIN FARM creates opportunities for farmers to improve profitability by 5% - 10% using deep data analysis modules. This is a high-tech and professional solution for farms of all sizes.</div>
                    </div>

                </div>
            </div>
          </div>
        </div>
    )
}

export default Benefit
