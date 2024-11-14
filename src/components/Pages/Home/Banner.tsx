'use client';
import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTranslations } from 'next-intl';

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  justifyContent: 'center',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Banner = () => {
  const t = useTranslations('All');

  const Items = [
    {
      title: 'More than 6,000',
      description: 'Business customers',
    },
    {
      title: 'More than 400,000',
      description: 'trade every day',
    },
    {
      title: 'Nearly 35 million',
      description: 'people being served',
    },
  ];
  return (
    <div className=" ">
      <Image
        src="/images/HOME/Banner.png"
        alt=""
        width={1000000}
        height={10000000}
        className="md:h-screen h-[300px] "
      />
      <div>


        <Box
        sx={{background:'linear-gradient(269.69deg, #9FF758 3.82%, #01FAA9 101.51%, #01FAA9 101.52%)',}}
   >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {Items?.map((item,index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Item className='md:py-20 py-5'>
                    <div className="text-black ">
                      <p className="font-bold  text-4xl leading-10 pb-3">
                                           {t(item.title)}
                      </p>
                      <p className="text-2xl leading-8">
                                           {t(item.description)}
                       </p>
                    </div>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Banner;
