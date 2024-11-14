import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid2';
import {  Box, Typography } from '@mui/material';
import { useTranslations } from "next-intl";

const Livestock = () => {
  const t = useTranslations('All');

     const benefitsData = [
    {
      imageSrc: '/images/SOLUTION/analyze.png',
      title: 'Easy to do',
      description: 'No additional equipment',
    },
    {
      imageSrc: '/images/SOLUTION/thumbup.png',
      title: 'Benefits for everyone',
      description: 'Direct consulting helps companies',
    },
    {
      imageSrc: '/images/SOLUTION/financialchat.png',
      title: 'Full comprehensive report',
      description: 'Real-time information about',
    },
  ];
    return (
        <div className='w-full h-full pt-10 pb-20 container mx-auto'>
            <div className='gap-3 text-white flex items-center justify-center flex-col relative'>

                <div className='py-5'>
                    <div className=' text-center text-4xl  font-bold relative pb-3'>
                    {t('Livestock registration and management system')}
                </div>
                <div className='mx-auto w-4/12'>
                    <div className=' h-2 bg-white rounded-full '></div>
                </div>
                </div>
                <div className='text-xl leading-8 w-10/12 text-center pt-3'>
                {t('As part of the food safety control tools')}
                </div>
                <div className='text-xl leading-8 w-10/12 text-center'>
                {t('The system provides complete')}
                </div>


            </div>

<div className='w-11/12 mx-auto py-20'>
      <Grid  container spacing={5}>
        {benefitsData.map((benefit, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Box
              sx={{
                py:10,
                px:5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '30px',
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  background:'rgba(6, 100, 153, 0.3)',
                boxShadow:'0px 0px 30px rgba(42, 252, 255, 0.5)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={benefit.imageSrc} alt={benefit.title} width={59} height={59} />
              </Box>
              <Typography py={2} variant="h4" sx={{ fontWeight: 'bold', fontSize: '2rem', lineHeight: 1.25 }}>
                {t(benefit.title)}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.5 }}>
                {t(benefit.description)}

              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
        </div>
    )
}

export default Livestock