import React from 'react'
import {  Box, Typography } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import { useTranslations } from "next-intl";

  const instructionsData = [
    {
      title: 'Instructions for the retrieval cycle Food from',
      subtitle: 'farms to supermarkets and retail markets:',
      imageSrc: '/images/SOLUTION/Rectangle.png',
    },
    {
      title: 'Instructions for',
      subtitle: 'Poultry retrieval cycle:',
      imageSrc: '/images/SOLUTION/Rectangle.png',
    },
    {
      title: 'Instructions for',
      subtitle: 'Egg retrieval cycle:',
      imageSrc: '/images/SOLUTION/Rectangle.png',
    },
  ];
const Theblockchian = () => {
  const t = useTranslations('All');

  return (
    <div className=" h-full w-full text-white relative">
      <div className="absolute top-0 left-0">
            <Image
              src="/images/SOLUTION/Ellipse176.png"
              alt=""
              width={451}
              height={780}
              className=""
            />
          </div>
      <div className="container mx-auto">
        <div className="w-9/12 mx-auto text-2xl font-bold text-center">
          {t('The BLOCKCHAIN FARM system meets the requirements according to Decision No')}
        </div>
 <Box sx={{ width: '100%', py: 5, px: { xs: 2, md: 5 }, mx: 'auto' }}>
      <Grid container spacing={5}  sx={{ width: '100%' }}>
        {instructionsData.map((instruction, index) => (
          <Grid   size={{ xs: 12, lg: 4 }} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" align="center" sx={{ pb: 1, fontSize: '1.25rem' }}>
              {t(instruction.title)}
            </Typography>
            <Typography variant="h6" align="center" sx={{ pb: 2, fontSize: '1.25rem' }}>
              {t(instruction.subtitle)}

            </Typography>
            <Box sx={{ position: 'relative',borderRadius:'10px',boxShadow:' 0px 4px 4px rgba(42, 252, 255, 0.25)',background:'rgba(6, 100, 153, 0.3)',width:'100%', height: 324, mx: 'auto' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                }}
              >
                <svg width="33" height="39" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 19.5L0.749998 38.1195L0.75 0.880452L33 19.5Z" fill="#D9D9D9" />
                </svg>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
      </div>
      <div className="pt-10 relative">
        <div>
          <Image
            src="/images/SOLUTION/Ellipse175.png"
            alt=""
            width={451}
            height={780}
            className="absolute right-0 top-40"
          />
        </div>
        <div className="text-4xl leading-10 text-center font-bold w-10/12 mx-auto pb-10">
          {t('BLOCKCHAIN FARM BLOCKCHAIN ​​SYSTEM “FOLD MANAGEMENT AND DISEASE INFORMATION”')}
        </div>
        <div className="leading-8 text-xl text-left w-8/12 mx-auto pt-3 ">
          <div>
           {t('The system supports livestock herd management on')}
          </div>
          <div>
           {t('The system supports livestock herd management on')}
           {t('In the situation of African swine fever')}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Theblockchian