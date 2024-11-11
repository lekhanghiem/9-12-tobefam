import React from 'react'
import Image from 'next/image';
import Hr from "@/components/Global/Hr"

const Thenew = () => {
    return (
        <div className='h-full w-full  relative '>
            
        <div className='py-20'>
            <div>
            <Image
                        
                        src="/images/SOLUTION/Ellipse172.png"
                        alt=""
                        width={541}
                        height={602}
                        property="loading"
                        className='absolute top-0 '
                    />
            </div>
                <div className='container mx-auto'>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                <div>
                    <Image
                        
                        src="/images/SOLUTION/image.png"
                        alt=""
                        width={541}
                        height={602}
                      
                    />
                </div>
                <div className='text-white text-sm leading-5'>
                    This new BLOCKCHAIN FARM system can be deployed quickly within 1-2 months on a province-wide scale from farmers and farms to dining tables at a very reasonable price. For example, the price of tracking pigs from weaning to eating on the table with full information about food, vaccination, etc. only costs about 12,000 VND. Traceability stamps with European anti-counterfeit Cologram technology cost only 60 VND/1 stamp.
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto py-10'>
                <div className='flex flex-col'>
                    <div className='text-white  text-3xl font-bold'>BLOCKCHAIN FARM Blockchain's full traceability service has strengths:</div>
                    <div className='py-5'>
                        <Hr/>
                    </div>
                    <div className='flex flex-row gap-5  h-20'>
                        <div className='pt-2 w-1/12 h-10 flex justify-start'>
                        <Image
                        
                        src="/images/SOLUTION/Vectorthenew.png"
                        alt=""
                        width={50}
                        height={22}
                      
                        className=''
                    />  
                        </div>
                        <div className='text-white text-sm leading-5'>Low cost, 24/7 technical support service, modern 4.0 technology system, has been successful in Vietnam and internationally for many years;</div>
                    </div>
                    <div className='flex flex-row gap-5  h-20'>
                        <div className='pt-2 w-1/12 h-10 flex justify-start'>
                        <Image
                        
                        src="/images/SOLUTION/Vectorthenew.png"
                        alt=""
                        width={50}
                        height={22}
                      
                        className=''
                    />  
                        </div>
                        <div className='text-white text-sm leading-5'>Large livestock corporations such as CP, CJ, Japfa, Emives, Sang Ha, Ba Huan, Vinh Thanh Dat, Vissan,... all use the BLOCKCHAIN FARM system daily;</div>
                    </div>
                    <div className='flex flex-row gap-5  h-20'>
                        <div className='pt-2 w-1/12 h-10  flex justify-start'>
                        <Image
                        
                        src="/images/SOLUTION/Vectorthenew.png"
                        alt=""
                        width={50}
                        height={22}
                      
                        className=''
                    />  
                        </div>
                        <div className='text-white text-sm leading-5'>Large retail systems such as Vinmart, BigC, AEON, Lotte mart, Mega Market, CO.OP mart, SATRA,... all use the BLOCKCHAIN FARM system.</div>
                    </div>
                    <div className='flex flex-row gap-5  h-20'>
                        <div className='pt-2 w-1/12 h-10 flex justify-start'>
                        <Image
                        
                        src="/images/SOLUTION/Vectorthenew.png"
                        alt=""
                        width={50}
                        height={22}
                      
                        className=''
                    />  
                        </div>
                        <div className='text-white text-sm leading-5'>The system of veterinary staff and slaughterhouses in many southern provinces has been proficient in using the BLOCKCHAIN FARM application for many years.</div>
                    </div>
                   
                </div> 
                <div className='flex justify-center ite' >
                    <Image
                        
                        src="/images/SOLUTION/Groupthenew.png"
                        alt=""
                        width={541}
                        height={602}
                      
                    />  
                    </div>
            </div>
           </div>
        </div>
        </div>
    )
} 

export default Thenew