'use client'
import React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useTranslations } from 'next-intl'
import FadeRight from '@/motion/FadeRight'
import FadeLeft from '@/motion/FadeLeft'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  })
}))
const WhatWeDo = () => {
  const t = useTranslations('All')

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
            <div className="text-4xl leading-10 font-bold py-3">
              {t('What we do')}
            </div>
            <div className=" py-3">
              <div className="h-2  w-2/12 mx-auto rounded-2xl   bg-[rgba(122,248,77,1)]  "></div>
            </div>
            <div className="text-2xl leading-8 py-5">
              {t('EG Farm focuses on the some')}
            </div>
          </div>
        </div>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FadeRight>
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
                          {t('Maize Production')}
                        </div>
                        <div className="leading-8 text-xl ">
                          {t('EG FARM  Maize farm is located in blah blah')}
                        </div>
                      </div>
                    </div>
                  </Item>
                </FadeRight>
              </Grid>
              <Grid item xs={12} md={6}>
                <FadeRight>
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
                          {t('Poultry Farming')}
                        </div>
                        <div className="leading-8 text-xl ">
                          {t('EG FARM Poultry farm is located at')}
                        </div>
                      </div>
                    </div>
                  </Item>
                </FadeRight>
              </Grid>
            </Grid>
          </Box>
          <div className="pt-10 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-10 px-5 md:px-10  w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
