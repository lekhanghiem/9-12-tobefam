'use client'
import React from 'react'
import Image from 'next/image'
import { Grid, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import FadeRight from '@/motion/FadeRight';
import FadeLeft from '@/motion/FadeLeft';
import FadeAnimateCardsBox from '@/motion/FadeAnimateCard';
import FadeDown from '@/motion/FadeDown';
import FlipAnimationY from '@/motion/FadeFlipAnimationY';
import { useTranslations } from 'next-intl';

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor:'#0e3c5d',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  borderRadius:'15px',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Theodoi = () => {
  const t = useTranslations('HomePage');
  const Items = [
    { title: 'Cập nhật tin tức nhanh chóng', content: 'Với công nghệ' },
    { title: 'Truy xuất nguồn gốc nông sản', content: 'Ghi chép' },
    { title: 'Báo cáo chăn nuôi mới', content: 'Với công nghệ' },
  ];
  return (
    <div className='py-20  h-full relative z-0' style={{
        backgroundImage: "url('/img/home/Group48096607.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%' // Ensure it stretches across the width
      }}>
     <FadeLeft  >
    <Grid className='py-10' container sx={{ width: '91.666667%', height: '100%', backgroundColor: '#0d3f62', borderRadius: '24px', mx: 'auto' }}>
      <Grid item xs={12} lg={6} sx={{ zIndex: 50,paddingTop:'40px', pb: 15, display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left', color: 'white', pl: { xs: 10, lg: 15 }, pr: { xs: 10, lg: 15 }, height: '100%', position: 'relative', }}>
        <div className="text-4xl pl-10 leading-10 no-underline hover:underline decoration-green-100">
          {t('Theo dõi quy trình nông nghiệp')}
        </div>
        <div className="text-xl leading-10">
          {t('Với khả năng lưu trữ')}
        </div>

        <div style={{ position: 'absolute', right: '40%', bottom: '20px'  }}>
          <FlipAnimationY>
<Button
  className="rounded-[40px] border-1 border-white bg-custom-folow w-[120px]"
  variant="outlined"
  size="large"
>
  <div className="text-white font-bold whitespace-nowrap">
    {t('TÌM HIỂU')}
  </div>
</Button>


          </FlipAnimationY>

        </div>
      </Grid>


      <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,paddingTop:{lg:'0px', md:'40px'} }}>
       <FlipAnimationY>
         <Image
          src="/img/home/Group.svg"
          alt="err"
          width={335}
          height={315}
        />
       </FlipAnimationY>
      </Grid>
    </Grid>
     </FadeLeft>

<div className='pt-20 w-11/12 mx-auto'>
   <Grid  container spacing={5}>
      {Items.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <FadeLeft>
            <Item sx={{height:{
      sx:'200px',
      md:'350px',
      lg:'300px',
      xl:'300px',
    }}}>
              <div className="h-full mx-5 pb-28">
                <div className="text-white flex flex-col gap-10">
                  <div className="text-4xl leading-10 no-underline hover:underline decoration-green-100">
                     {t(item.title)}
                  </div>
                  <div className='h-[1px] bg-white w-full'></div>
                  <div className="text-xl leading-8">               {t(item.content)}


                  </div>
                    <div className="absolute right-10 bottom-10">
                   <div className='hover:scale-110'>
                  <FadeLeft>

 <Image
       src="/img/home/Group48096553.svg"
        alt="err"
        width={49}
        height={49}
      />
                  </FadeLeft>

                   </div>
                  </div>
                </div>
              </div>
              <div>

              </div>
            </Item>
          </FadeLeft>
        </Grid>
      ))}
    </Grid>
</div>
    </div>
  )
}

export default Theodoi