'use client'
import React from 'react'
import { useTranslations } from 'next-intl';

import Image from 'next/image'
import { Box, Button, Divider, Grid, ListItem, ListItemText, Paper, styled } from '@mui/material'
import FadeLeft from '@/motion/FadeLeft';

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor:'rgba(8, 52, 79, 0.3)',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  borderRadius:'15px',
  border:'rgba(242, 255, 93, 0.51) 1px solid',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const giothieu = () => {

  const gridItems = [
  {
    title: 'Truy xuất nguồn gốc nông sản',
    titles:
      'Đặc điểm của Tobe Farm',
    buttonText: 'TÌM HIỂU',
  },
  {
    title: 'Công cụ tài chính',
    titles:
      'Các hoạt động trên Tobe Farm',
    buttonText: 'TÌM HIỂU',
  },
  {
    title: 'Xuất khẩu nông sản',
    titles:
      'Với những tính năng',
    buttonText: 'TÌM HIỂU',
  },
];
// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('HomePage');


  return (
    <div className='py-10 w-full' style={{
        backgroundImage: "url('/img/home/Group48096598.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%' // Ensure it stretches across the width
      }}>

    <div className=' w-11/12 mx-auto pb-20'>
        <FadeLeft className='relative w-[250px] sm:w-[457px] '> <Image
        src="/img/home/Group48096571.svg"
        alt="err"
        width={357}
        height={113}
      />
      <div className='text-white font-bold text-4xl absolute top-10  left-20 sm:left-40' >
{t('Giới thiệu')}
        </div>

     </FadeLeft>

 <Box sx={{ paddingTop: '10px' }}>
      <Grid container spacing={5}>
        {gridItems.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FadeLeft>
              <Item
                sx={{
                  height: {
                    sx: '300px',
                    md: '500px',
                    lg: '400px',
                    xl: '300px',
                  },
                }}
              >
                <div className="h-full mx-5 pb-28">
                  <div className="text-white flex flex-col gap-10">
                    <div className="text-4xl leading-10 no-underline hover:underline decoration-green-100">
                       {t(item.title)}
                    </div>
                    <div className="text-xl leading-8">
                      {t(item.titles)}
                    </div>
                    <div className="absolute right-20 bottom-10">
                      <Button
                        className="rounded-3xl"
                        style={{
                          background:
                            'linear-gradient(160deg, rgba(65,255,118,1) 0%, rgba(0,26,255,0.55) 70%)',
                          border: 'none',
                          padding: '2px',
                          boxShadow: '0px -1px 5.8px rgba(255, 255, 255, 0.6)',
                          backgroundClip: 'padding-box',
                        }}
                        variant="outlined"
                      >
                        <div
                          style={{
                            background: '#08344f',
                            borderRadius: 'inherit',
                            padding: '10px 20px',
                          }}
                          className="text-white font-bold"
                        >
                           {t(item.buttonText)}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </Item>
            </FadeLeft>
          </Grid>
        ))}
      </Grid>
    </Box>


    </div>





    </div>
  )
}

export default giothieu