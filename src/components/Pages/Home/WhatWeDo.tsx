'use client';
import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const WhatWeDo = () => {
  return (
    <div className="h-full w-full bg-black text-white py-10 relative">
      <div>
        <Image
          src="/images/HOME/bgleftWhatWeDo.png"
          alt=""
          width={541}
          height={602}
          className="absolute top-0"
        />
      </div>
      <div className=" mx-auto w-11/12">
        <div className=" ">
          <div className="text-center">
            <div className="text-4xl leading-10 font-bold py-3">What we do.</div>
            <div className=" py-3">
              <div className="h-2  w-2/12 mx-auto rounded-2xl   bg-[rgba(122,248,77,1)]  "></div>
            </div>
            <div className="text-2xl leading-6 py-5">
              EG Farm focuses on the some activities to produce food and
              contribute to the self sufficiency of the community in getting
              locally produced foods.
            </div>
          </div>
        </div>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Item>
                  <div className="flex md:flex-row flex-col gap-6">
                    <div className="w-full h-full mx-auto">
                      <Image
                        src="/images/HOME/imgWhatWeDo1.png"
                        alt=""
                        width={275}
                        height={180}
                        className="w-full h-80 "
                      />
                    </div>
                    <div className="text-left w-11/12 text-white">
                      <div className="leading-10 py-3 text-2xl font-bold">
                        Maize Production
                      </div>
                      <div className="leading-8 text-xl ">
                        EG FARM Maize farm is located in blah blah, on a 34 acre
                        piece of land. We grow our maize with the best farming
                        practice to increase yield and quality of our maize
                        harvest. We have a goal of havesting 100 tons of maize
                        grains yearly as we expand the farm. As at last year we
                        had a total of 8 tons of maize grain harvested from our
                        farm.
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <div className="flex md:flex-row flex-col gap-6">
                    <div className="w-full h-full mx-auto">
                      <Image
                        src="/images/HOME/imgWhatWeDo2.png"
                        alt=""
                        width={275}
                        height={180}
                        className="w-full h-80 "
                      />
                    </div>
                    <div className="text-left w-11/12 text-white">
                      <div className="leading-10 py-3 text-2xl font-bold">
                        Poultry Farming
                      </div>
                      <div className="leading-8 text-xl ">
                        EG FARM Poultry farm is located at blah blah, on a 15
                        acre piece of land. We raise chickens including broilers
                        for meat and layers for eggs. We keep the birds in neat
                        and organized cages to ensure high qualilty meat and egg
                        yield. We also have just launched our first turkey farm
                        5 months ago and we would start selling very soon.{' '}
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <div className="pt-10 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-10 px-5 md:px-10  w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
