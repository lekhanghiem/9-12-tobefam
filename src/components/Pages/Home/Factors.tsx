'use client';
import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#004F60',
  height: '500px',
  display: 'flex',
  position: 'relative',
  borderRadius: '30px',
  // flexDirection: 'column',
  // alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface Item {
  title: string;
  imgSize: { width: number; height: number };
  button: string;
  url: string;
}

const Factors = () => {
  const t = useTranslations('All');

  const Items: Item[] = [
    {
      title: 'Unique identification material',
      button: 'Detail',
      url: '/images/HOME/iconFacTors1.png',
      imgSize: { width: 80, height: 75 },
    },
    {
      title: 'Supply chain tools',
      button: 'Detail',
      url: '/images/HOME/iconFacTors2.png',
      imgSize: { width: 83, height: 81 },
    },
    {
      title: 'Consumer phone application',
      button: 'Detail',
      url: '/images/HOME/iconFacTors3.png',
      imgSize: { width: 57, height: 85 },
    },
    {
      title: 'Traceability with Blockchain technology',
      button: 'Detail',
      url: '/images/HOME/iconFacTors4.png',
      imgSize: { width: 82, height: 87 },
    },
  ];

  return (
    <div className="py-5 bg-[#003646] text-center">
      <div className=" mx-auto w-11/12">
        <div>
          <div className="text-5xl leading-10 font-bold text-white pt-3">
                                           {t('Factors')}


          </div>
          <div className="py-5">
            <div className="w-1/12 flex mx-auto bg-[#7AF84D] h-2 rounded-full" />
          </div>
        </div>
        <Box sx={{ flexGrow: 1, width: '100%', mx: 'auto' ,pt:5}}>
          <Grid container spacing={5}>
            {Items.map((item, index) => (
              <Grid item xs={12} xl={3} md={6} sm={6} key={index}>
                <Item>
                  <div className="flex flex-col gap-10 pt-10   ">
                    <div className="flex justify-center">
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={item.imgSize.width}
                        height={item.imgSize.height}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-4xl text-white leading-10 font-bold">
                   {t(item.title)}

                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-16 w-full text-center">
                    <Button
                      className="bg-gradient-to-r from-[#9df75a] to-[#02ffac] shadow-xl hover:scale-105 rounded-3xl text-black"
                      sx={{
                        color: 'black',
                        padding: '10px 20px',
                        minWidth: '100px',
                      }}
                    >
                   {t(item.button)}

                    </Button>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Factors;
