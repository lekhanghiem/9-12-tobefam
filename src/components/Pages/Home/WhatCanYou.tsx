'use client';
import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('All');

  const Items = [
    {
      src: '/images/HOME/iconegfam1.png',
      title: 'Differentiate your products from the competition',
      description:
        'Consumers appreciate transparent',
      imgSize: { width: 50, height: 59 },
    },
    {
      src: '/images/HOME/iconegfam2.png',
      title: 'Improve operational efficiency',
      description: 'Analyse and optimize',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam3.png',
      title: 'Establish direct communication with consumers',
      description:
        'Engage directly with consumers',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam4.png',
      title: 'Differentiate your products from the competition',
      description: 'Provide proofs of your quality',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam5.png',
      title: 'Become compliant to import regulations of target countries',
      description: 'Unlock export possibilities',
      imgSize: { width: 59, height: 57 },
    },
    {
      src: '/images/HOME/iconegfam6.png',
      title: 'Quicker (and targeted) product recalls',
      description:
        'Automate your product',
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
          className="absolute right-0"
        />
      </div>

      <div className="text-center ">
        <div className="w-11/12 mx-auto">
          <h5 className=" text-4xl font-bold tracking-tight text-white leading-10 pb-10">
                   {t('What can you achieve with EG FARM?')}


          </h5>
          <div className="">
            <div className='w-full mx-auto'>
              <Grid container spacing={5}>
                {Items.map((item, index) => (
                  <Grid   size={{ xs: 12, md: 6 }} key={index}>
                    <Item>
                      <div
                        key={index}
                        className=" flex flex-col lg:flex-row gap-5"
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
                          <p className=" text-3xl leading-8  ">
                                               {t(item.title)}

                          </p>
                          <p className="text-xl pt-5 leading-8">
                                               {t(item.description)}

                          </p>
                        </div>
                      </div>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className="grid md:grid-cols-2 gap-10 w-12/12 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCanYou;
