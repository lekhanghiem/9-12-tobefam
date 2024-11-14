'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function BasicGrid() {
  const images = [
    { src: '/img/lienhe/Group.svg', alt: 'Image 1', width: 60, height: 57 },
    {
      src: '/img/lienhe/Group1.svg',
      alt: 'Image 2',
      width: 60,
      height: 57,
    },
    {
      src: '/img/lienhe/Group2.svg',
      alt: 'Image 3',
      width: 60,
      height: 57,
    },
    {
      src: '/img/lienhe/Group4.svg',
      alt: 'Image 4',
      width: 40,
      height: 40,
    },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12} lg={6}>
          <Box sx={{}}>
            <Image
              src="/img/lienhe/Group48096600.png"
              alt=""
              width={10000}
              height={949}
            />
          </Box>
        </Grid>
        <Grid xs={12} lg={6}>
          <Box sx={{ width: '90%', margin: 'auto', bgcolor: '#ffffff' }}>
            <Box>
              <Typography
                variant='h2'
                align='center'
                gutterBottom
                className="text-[#093450] py-10 pt-14 flex justify-center font-bold"
              >
                Liên hệ để được tư vấn miễn phí
              </Typography>
              <Box>
                <h1 className="text-2xl  pl-10 pb-3">Họ và tên</h1>
                <TextField
                  sx={{
                    height: 50,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '40px',
                    '& .MuiOutlinedInput-root': {
                      height: '100%',
                      borderRadius: '40px', // Apply rounded corners to the border
                      '& fieldset': {
                        border: '2px solid gray', // Default border color
                        borderRadius: '40px',
                      },
                    },
                    '&:hover .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray', // Border color on hover
                      },
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'blue', // Border color when focused
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'black',
                    },
                  }}
                  id="outlined-adornment-password"
                  label="Vui lòng nhập họ và tên"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ paddingTop: 3 }}>
                <h1 className="text-2xl  pl-10 pb-3">Email/Số điện thoại</h1>
                <TextField
                  sx={{
                    height: 50,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '40px',
                    '& .MuiOutlinedInput-root': {
                      height: '100%',
                      borderRadius: '40px', // Apply rounded corners to the border
                      '& fieldset': {
                        border: '2px solid gray', // Default border color
                        borderRadius: '40px',
                      },
                    },
                    '&:hover .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray', // Border color on hover
                      },
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'blue', // Border color when focused
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'black',
                    },
                  }}
                  id="outlined-adornment-password"
                  label="Vui lòng nhập email/số điện thoại"
                  variant="outlined"
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: 4,
                  }}
                >
                  <Button
                  type='submit'
                    sx={{
                      borderRadius: '40px',
                      width: '40%',
                      height: '50px',
                      bgcolor: '#3bb4a5',
                    }}
                    variant="contained"
                    color="success"
                    size="large"
                  >
                    Tư vấn ngay
                  </Button>
                </Box>
                <div className="py-10">
                  <div className="h-1 w-11/12 mx-auto bg-gray-300 "></div>
                </div>
                <Typography
                  sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    color: 'gray',
                  }}
                  variant="h6"
                  gutterBottom
                >
                  Hoặc liên hệ qua
                </Typography>

                <div className="flex flex-row gap-3 justify-center items-center">
                  {images.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                      />
                    </div>
                  ))}
                </div>
                <div className="py-10 pl-10">
                  <div className="h-1 w-8/12  bg-gray-300 "></div>
                </div>
              </Box>
            </Box>
            <Box>
              <div className="py-1 lg:py-20">
                <Image
                  src="/img/lienhe/Group3.svg"
                  alt=""
                  width={10000}
                  height={949}
                />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
