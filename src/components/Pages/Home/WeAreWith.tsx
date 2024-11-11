'use client';
import React from 'react';
import Image from 'next/image';
import Solve from '@/components/Global/Solve';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const WeAreWith = () => {
  return (
    <div className="w-full h-full ">
      <div>
        <div>
          <div className="absolute ">
            <Image
              src="/images/HOME/bgLeftWeAreWith.png"
              alt="1 "
              width={451}
              height={780}
            />
          </div>
          <div className="w-11/12 mx-auto py-10">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Item>
                    <div className="flex text-left">
                      <div className="text-white  w-11/12 ">
                        <div className="text-4xl font-bold leading-10 ">
                          We are with you from start to success
                        </div>
                        <div className="text-xl leading-8">
                          <p className="pt-10">
                            EG FARM provides the full spectrum of tools and
                            solutions to enable complete supply chains to track
                            and trace their products.
                          </p>
                          <p className="py-3">
                            Tailored to your processes, data sets, and technical
                            environment, it provides a secure and scalable
                            solution to improve transparency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Item>
                    {' '}
                    <div className="  flex justify-center w-11/12">
                      <Image
                        src="/images/HOME/imgRightWeAreWith.png"
                        alt="1"
                        width={310}
                        height={305}
                      />
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
          <div className="  mx-auto">
            <Solve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreWith;
