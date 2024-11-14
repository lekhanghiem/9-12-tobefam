import React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';


const Item = styled(Paper)(({ theme }) => ({

    borderRadius:'10px',

  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
   [theme.breakpoints.up('xs')]: {
        height: '300px',
    },
    [theme.breakpoints.up('sm')]: {
        height: '200px',
    },
}));
const Functions = () => {
  const t = useTranslations('All');

    const data = [
  {
    imageSrc: "/images/SOLUTION/gear.png",
    imageWidth: 61,
    imageHeight: 61,
    text: "We don't believe there is"
  },
  {
    imageSrc: "/images/SOLUTION/bitcoin.png",
    imageWidth: 58,
    imageHeight: 58,
    text: "Although applying the most modern technology"
  },
  {
    imageSrc: "/images/SOLUTION/diversity.png",
    imageWidth: 61,
    imageHeight: 61,
    text: "BLOCKCHAIN FARM connects authorities"
  },
  {
    imageSrc: "/images/SOLUTION/trade.png",
    imageWidth: 62,
    imageHeight: 62,
    text: "Food supply chains are increasingly global"
  }
];
    return (
        <div className='bg-gradient-to-r from-[rgba(0,251,145,1)] to-[rgba(3,99,153,1)] w-full h-full  text-white py-10'>
            <div className="container mx-auto ">
                <div className='text-4xl font-bold text-center '>   {t('Functions')}</div>
                <div className='w-11/12 mx-auto py-10'>
      <Grid container spacing={5}>
         {data.map((item, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <Item style={{
background:' linear-gradient(180deg, rgba(0, 79, 96, 0.3) 0%, rgba(0, 162, 198, 0.3) 100%)'

          }}
          className='py-10'>
             <div key={index} className="">
          <div className="flex flex-col md:flex-row gap-3  px-3">
            <div className=" flex justify-center mx-auto w-40">
              <Image
              className=''
              src={item.imageSrc} alt="" width={item.imageWidth} height={item.imageHeight} />
            </div>
            <div className="text-xl leading-8 text-white text-left">
              {t(item.text)}
            </div>
          </div>
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

export default Functions

