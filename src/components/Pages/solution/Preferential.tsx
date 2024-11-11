import React from 'react';
import Image from 'next/image';
const Preferential = () => {
  return (
    <div className="h-full w-full text-white pt-10 container mx-auto">
      <div className="leading-8 text-2xl w-6/12 mx-auto text-center">
        Preferential prices for state management(Price announced from January 1, 2023)
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-11/12 mx-auto pt-10">
        <div className="h-full   mx-auto   rounded-3xl  w-10/12 py-20  text-center bg-[#023552] shadow-[0_4px_4px_rgba(42,252,255,0.25)]">
          <div className="text-lg leading-8 p-6 pb-10">
            Province with livestock scale: Total number of livestock (pigs), buffaloes, cows,
            horses, goats, sheep, deer) over 1.5 million or total number of poultry (chickens,
            ducks, geese, geese, birds) quail, pigeon, ostrich) over 20 million. Service cost is
            39,900,000 VND/month.
          </div>
        </div>
        <div className="h-full   mx-auto   rounded-3xl  w-10/12 py-20  text-center bg-[#023552] shadow-[0_4px_4px_rgba(42,252,255,0.25)]">
          <div className="text-lg leading-8 p-6 pb-10">
            Province with livestock scale: Total number of livestock (pigs), buffaloes, cows,
            horses, goats, sheep, deer) from 500,000 to 1,500,000 heads or total number of poultry
            (chickens, ducks, geese, geese, quail, pigeons, ostriches) from 10 million to 20
            million. Service cost is 29,900,000 VND/month.
          </div>
        </div>
        <div className="h-full   mx-auto   rounded-3xl  w-10/12 py-20  text-center bg-[#023552] shadow-[0_4px_4px_rgba(42,252,255,0.25)]">
          <div className="text-lg leading-8 p-6 pb-10">
            Province with livestock scale: Total number of livestock (pigs), buffaloes, cows,
            horses, goats, sheep, deer) less than 500,000 heads or total number of poultry
            (chickens, ducks, geese, quails) , pigeons, ostriches) under 10 million. Service cost is
            19,900,000 VND/month.
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto pt-10 pb-3 text-base">
        <div>Service costs</div>
        <div>- Includes:</div>
        <div>+ License fees to use the system and applications on smartphones;</div>
        <div>+ Cost of sending SMS messages to the farm to the account;</div>
        <div>+ Transmission costs, database system and TrustOne Blockchain system;</div>
        <div>+ Technical support costs via 24/7 hotline, phone number 1900 6726;</div>
        <div>
          + Costs for checking and controlling data generated and reported monthly and quarterly
          according to the attached form.
        </div>
        <div>
          + Free initial training sessions in the province: 03 sessions (if additional: 5,000,000
          VND/01 session);
        </div>
        <div>+ Online training sessions for participating groups: free.</div>
        <div>- Not included:</div>
        <div>+ 10% VAT;</div>
        <div>+ Travel expenses (airfare, vehicle) and living expenses (hotel).</div>
      </div>
      <div className="bg-[#012539] pb-20 py-10">
        <div className="text-center w-5/12 text-base leading-6 mx-auto pb-10">
          BLOCKCHAIN FARM Blockchain “Herd Management and Disease Information” System
        </div>
        <div>
          <div className="md:h-101 h-72 w-10/12 bg-[#066499]/30 shadow-[0_8px_4px_rgba(42,252,255,0.25)] rounded-3xl mx-auto relative">
            <div className="absolute video ">
              <svg
                width="33"
                height="39"
                viewBox="0 0 33 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M33 19.5L0.749998 38.1195L0.75 0.880452L33 19.5Z" fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferential;
