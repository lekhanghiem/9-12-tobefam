'use client';
import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const WhatCanYou = () => {
  const Items = [
    {
      src: '/images/HOME/iconegfam1.png',
      title: 'Differentiate your products from the competition',
      description:
        'Consumers appreciate transparent food information, and recognize brands with traceability.',
      imgSize: { width: 50, height: 59 },
    },
    {
      src: '/images/HOME/iconegfam2.png',
      title: 'Establish direct communication with consumers',
      description: 'Establish direct communication with consumers',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam3.png',
      title: 'Become compliant to import regulations of target countries',
      description:
        'Unlock export possibilities to countries which require traceability information.',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam4.png',
      title: 'Improve operational efficiency',
      description: 'Analyse and optimize your supply chain processes.',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam5.png',
      title: 'Provide proofs of your quality sustainability claims',
      description: 'Provide proofs of your quality sustainability claims.',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam6.png',
      title: 'Quicker (and targeted) product recalls',
      description:
        'Automate your product recalls, and narrow down the scope to the affected batches.',
      imgSize: { width: 59, height: 57 },
    },
  ];
  return (
    <div className="w-full h-full relative bg-customBlue py-10">
      <div className="w-full">
        <Image
          src="/images/HOME/imgrightEgFam.png"
          alt=""
          width={300}
          height={300}
          className="absolute right-0 hidden lg:block"
        />
      </div>

      <div className="text-center container mx-auto">
        <div className="w-11/12 mx-auto">
          <h5 className=" text-4xl font-bold tracking-tight text-white leading-10 pb-10">
            What can you achieve with EG FARM?
          </h5>
          <div className="">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                {Items.map((item, index) => (
                  <Grid item xs={12} md={6}>
                    <Item>
                      <div
                        key={index}
                        className=" flex flex-col lg:flex-row gap-3"
                      >
                        <div className="w-12/12 flex justify-center items-center">
                          <Image
                            src={item.src}
                            alt={item.title}
                            width={item.imgSize.width}
                            height={item.imgSize.height}
                          />
                        </div>
                        <div className="text-white text-left">
                          <p className=" text-3xl leading-8  pt-0">
                            {item.title}
                          </p>
                          <p className="text-xl pt-2 leading-8">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <div className="grid md:grid-cols-2 gap-10 w-12/12 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCanYou;
