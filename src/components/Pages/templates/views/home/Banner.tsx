'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button, Grid, Paper, styled } from '@mui/material';
import FadeRight from '@/motion/FadeRight';
import FadeLeft from '@/motion/FadeLeft';
import FadeUp from '@/motion/FadeUp';
import FadeDown from '@/motion/FadeDown';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#339966',
  padding: '16px 80px',
  borderRadius: '9999px',
  fontWeight: 'bold',
  transition: 'transform 0.2s',
  '&:hover': {
    backgroundColor: '#00FB91',
    transform: 'scale(1.1)',
  },
  display: 'flex',
  margin: '0 auto',
}));

const Banner = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const t = useTranslations('HomePage');
  return (
  <div className="imgHome bg-no-repeat bg-cover bg-center h-screen w-screen">
      <div className=" py-20 w-11/12 mx-auto">
        <Grid container spacing={10}>
          <Grid item xs={12} lg={6}>
 <FadeLeft className="flex justify-center items-center h-full pb-10 text-6xl text-white text-center shawdow "
            >
              {t(
                'Giải pháp truy xuất nguồn gốc nông sản minh bạch, bảo mật cao bằng công nghệ Blockchain'
              )}
            </FadeLeft>

          </Grid>
          <Grid item xs={12} lg={6}>
            <FadeRight>
              <div className=" items-center flex justify-center">
                <Image
                  src="/img/home/Frame.png"
                  alt="err"
                  width={557}
                  height={471}
                  className="w-[557px] h-[471px]"
                />
              </div>
            </FadeRight>
          </Grid>
        </Grid>

        <FadeDown className="pt-10">
         <CustomButton>
 <div className='text-white text-2xl'>
   {t('Bắt đầu')}
 </div>
</CustomButton>
        </FadeDown>
      </div>
    </div>
  );
};

export default Banner;
