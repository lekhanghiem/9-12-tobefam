'use client'
import React from 'react'
import Image from 'next/image'
import { Box, Button, InputAdornment, TextField } from '@mui/material'

import FlipAnimationY from '@/motion/FadeFlipAnimationY'
import FlipAnimationX from '@/motion/FadeFlipAnimationX'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useTranslations } from 'next-intl'
const Lienhe = () => {
  const Item = styled(Paper)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',

    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027'
    })
  }))
  const t = useTranslations('All')
  return (
    <div className="h-full w-full  bg-[#0a1f30] ">
      <div className="pb-10">
        <div className="">
          <FlipAnimationY>
            <div className="flex py-5 justify-center text-5xl font-bold text-white ">
              {t('Contact')}
            </div>
          </FlipAnimationY>
          <FlipAnimationX className=" h-full py-10 w-11/12 bg-[#08344f] mx-auto relative rounded-xl">
            <Box
              sx={{
                flexGrow: 1
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Item>
                    <div className="w-6/12 mx-auto ">
                      <Image
                        src="/img/footer/footer.svg"
                        alt="err"
                        width={363}
                        height={259}
                      />
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Item>
                    <div className="w-11/12 mx-auto">
                      <form className="relative w-full ">
                        <TextField
                          sx={{
                            width: '100%',
                            height: 50,
                            backgroundColor: 'transparent',
                            borderRadius: '0px',
                            '& .MuiOutlinedInput-root': {
                              height: '100%',
                              borderRadius: '20px', // Bo góc của viền
                              '& fieldset': {
                                border: '2px solid #007E94', // Màu viền mặc định
                                borderRadius: '20px'
                              }
                            },
                            '&:hover .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: '#007E94'
                              }
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#007E94'
                            },
                            '& .Mui-focused .MuiInputLabel-root': {
                              color: '#032c33'
                            },
                            '& .MuiInputLabel-root': {
                              color: '#f8fbfc' // Màu của label khi không focus
                            }
                          }}
                          id="outlined-adornment-password"
                          label={t('Enter email')}
                          variant="outlined"
                        />
                        <div className="absolute top-0 right-0 w-4/12 lg:w-2/12  ">
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: '#007E94',
                              color: 'white',
                              borderRadius: '40px',
                              padding: '10px 20px',
                              textTransform: 'none',
                              height: 50,
                              width: '100%',
                              boxShadow: 'none',
                              border: '2px solid transparent',
                              '&:hover': {
                                backgroundColor: '#007E94', // Darker blue on hover
                                border: '2px solid #007E94' // Add border on hover
                              },
                              '&:active': {
                                backgroundColor: '#007E94' // Darker blue when active
                              }
                            }}
                          >
                            Xác nhận
                          </Button>
                        </div>
                      </form>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Box>
            <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-10"></div>
          </FlipAnimationX>
        </div>
      </div>
    </div>
  )
}

export default Lienhe
