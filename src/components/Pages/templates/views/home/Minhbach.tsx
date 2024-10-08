'use client'
import React from 'react'
import Image from 'next/image'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FadeLeft from '@/motion/FadeLeft';
import FlipAnimationX from '@/motion/FadeFlipAnimationX';
import FlipAnimationY from '@/motion/FadeFlipAnimationY';
import { useTranslations } from 'next-intl';


const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  background:' linear-gradient(27deg, rgba(13,61,94,1) 0%, rgba(13,61,94,0.5466134207589286) 20%)',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  borderRadius:'15px',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Minhbach = () => {
  const t=useTranslations('HomePage')
  const Items = [
  { title: 'Tăng cường hiệu quả và tiết kiệm chi phí', content: 'Giảm thiểu rủi ro'  },
  { title: 'Cải thiện quản lý nông sản tiêu dùng', content: 'Theo dõi sản phẩm' },
  { title: 'Sử dụng công nghệ Blockchain và Ai', content: 'Khi có sự cố xảy ra' },
];
  return (
    <div className='  h-full ' style={{
        backgroundImage: "url('/img/home/Group48096616.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
      }}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className='text-white leading-10 w-11/12 mx-auto'>
            <FadeLeft className='text-4xl leading-10 no-underline hover:underline decoration-green-100 text-center'>{t('Minh bạch và tin cậy')}

</FadeLeft>
<FadeLeft className='text-xl leading-8 py-10 lg:pl-20 pl-5'>{t('Một khi thông tin được ghi trên blockchain')}</FadeLeft>

<div className='pt-20 w-11/12 mx-auto'>
   <Grid  container spacing={5}>
      {Items.map((item, index) => (
        <Grid item xs={12}  key={index}>
          <FadeLeft>
            <Item sx={{height:{
      sx:'200px',
      md:'300px',
      lg:'200px',
      xl:'200px',
    }}}>
              <div className="h-full mx-5 pb-28">
                <div className="text-white flex flex-col gap-10">
                  <div className="text-4xl leading-10 no-underline hover:underline decoration-green-100">
                 {t(item.title)}
                  </div>

                  <div className="text-xl leading-8">    {t(item.content)}</div>

                </div>
              </div>
            </Item>
          </FadeLeft>
        </Grid>
      ))}
    </Grid>
</div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='w-11/12 mx-auto'>
          <div className='flex flex-col gap-5 '>
           <FadeLeft className='flex justify-center lg:pt-0 pt-10'>
             <Image
        src="/img/home/Maskgroup.png"
        alt="err"
        width={457}
        height={113}
      />
           </FadeLeft>
      <FlipAnimationY className='flex justify-center'>
        <Image
        src="/img/home/Group1.svg"
        alt="err"
        width={457}
        height={113}
      />
      </FlipAnimationY>
          </div>
          </div>
        </Grid>

      </Grid>
    </Box>
      </div>
  )
}

export default Minhbach