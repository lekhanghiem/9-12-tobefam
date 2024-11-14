import React from 'react'
import { useTranslations } from "next-intl";
import Box from '@mui/material/Box';
const BlockChainFarm = () => {
  const t = useTranslations('All');
  return (


    <div> <Box sx={{
      background:' linear-gradient(302.88deg, #00304C 0%, #012133 122.38%)',
      py:10,

    }} >
        <div className="text-center w-5/12 text-2xl leading-10 mx-auto pb-10 font-bold text-white">
          {t('BLOCKCHAIN FARM Blockchain “Herd Management and Disease Information” System')}
        </div>
        <div>
          <div className=" h-[400px] w-8/12 bg-[#066499]/30 shadow-[0_8px_4px_rgba(42,252,255,0.25)] rounded-3xl mx-auto relative">
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
      </Box></div>
  )
}

export default BlockChainFarm