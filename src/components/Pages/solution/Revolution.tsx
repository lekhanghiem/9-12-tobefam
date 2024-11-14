'use client'
import React from 'react'
import Image from 'next/image'
import { Grid, Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

const Item = styled(Paper)(({ theme }) => ({
    height:'500px',
    borderRadius:'30px' ,
  backgroundColor: 'rgba(6, 100, 153, 0.3)',
  boxShadow:' 0px 4px 4px rgba(42, 252, 255, 0.25)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Benefit = () => {
  const t = useTranslations('All');

const solutions = [
  {
    src: "/images/SOLUTION/blockchain.png",
    title: "Blockchain",
    description: "Blockchain technology is a revolution in storing"
  },
  {
    src: "/images/SOLUTION/artificial.png",
    title: "Artificial Intelligence",
    description: "Blockchain FARM uses automated fraud detection mechanisms"
  },
  {
    src: "/images/SOLUTION/internet.png",
    title: "Internet of Things",
    description: "With a highly diverse network of sensors throughout the supply chain"
  },
  {
    src: "/images/SOLUTION/analytics.png",
    title: "Deep Data Analysis",
    description: "BLOCKCHAIN FARM creates opportunities for farmers to improve profitability by 5%"
  }
];
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
                <h1 className='text-4xl font-bold leading-10'>
                  {t('Revolutionizing Agriculture with new technologies')}
                  </h1>
                <div className='text-2xl  leading-10 py-20 px-3'>
{t('The global Agriculture industry is at the frontier of revolutionary change')}
                  </div>
            </div>
            <div className='mx-auto w-11/12 '>
      <Grid container spacing={6}>
        {solutions.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Item

            >
             <div className='w-10/12 mx-auto '>
                 <div className='flex justify-center pt-20'>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={120}
                  height={120}
                  style={{ position: 'absolute' }}
                />
              </div>
              <Box sx={{ pt: 20, px: 2 }}>
                <Typography variant="h4" color="white" gutterBottom>
                  {t(item.title)}
                </Typography>
                <Typography variant="h6" color="white">
                  {t(item.description)}

                </Typography>
              </Box>
             </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
          </div>
        </div>
    )
}

export default Benefit
