import React from 'react';
import Hr from '@/components/Global/Hr';

const Blockchian = () => {
  return (
    <div className="relative pb-40 md:pb-52">
      <div
        className="absolute top-0 w-full h-full "
        style={{
          backgroundImage: `url('/images/SOLUTION/Grouptefood.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative container mx-auto ">
        <div className="gap-3 text-white flex items-center justify-center flex-col pt-10 w-10/12 mx-auto">
          <div className="text-center text-xl sm:text-2xl lg:text-3xl font-bold pb-7">
            TE-FOOD BLOCKCHAIN ​​SYSTEM - TRACKING THE ORIGIN OF ESSENTIAL FOOD
            FOR PROVINCES
          </div>
          <div className="">
            <Hr />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 w-10/12 gap-10 mx-auto pt-14">
          <div className="text-white text-left leading-5 text-md">
            Since 2016, the "BLOCKCHAIN FARM Blockchain Food Traceability"
            system has been operating for Ho Chi Minh City with the capacity to
            trace the supply chain for 18,000 pigs, 200,000 poultry and 2.5
            million eggs daily from 19 provinces. wall. This is a large system
            suitable for the management model of diverse supply chains, with
            distribution models from exporters and importers, agents, wholesale
            markets, retail markets, supermarket systems and stores. convenience
            goods. In 2018, BLOCKCHAIN FARM continues to develop the "BLOCKCHAIN
            FARM Blockchain" system for Provinces, where there are rich local
            sources of supply and traceability needs from breeding, food,
            vaccination to transportation. transport, slaughter and distribution
            to retail chains, collective kitchens and restaurants. The new
            BLOCKCHAIN FARM system also meets food safety control requirements
            at retail markets, applies 4.0 technologies such as Blockchain, IoT,
            BigData,... and connects and shares data with available systems.
            available from the Province or Central Government. Daily automatic
            reporting system provides automated reports and analysis for state
            management agencies, and supply chains.
          </div>
          <div>
            <div className="flex justify-center w-full h-full">
              <img
                src="/images/SOLUTION/Frametefood.png"
                alt=""
                width={459}
                height={284}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchian;
