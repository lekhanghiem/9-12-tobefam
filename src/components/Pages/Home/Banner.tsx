'use client';
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none',
  py: '200px',
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
      />
      <section>
        <div className="bg-background-image  font-normal">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {Items?.map((item) => (
                <Grid item xs={12} md={4}>
                  <Item>
                    <div className="text-black">
                      <p className="font-bold  text-4xl leading-10">
                        {item.title}
                      </p>
                      <p className="text-xl leading-8"> {item.description}</p>
                    </div>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Banner;
