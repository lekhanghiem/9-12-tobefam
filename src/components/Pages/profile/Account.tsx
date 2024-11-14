'use client'
import React, { useContext, useEffect, useState } from 'react';

import Image from 'next/image'
import { Button, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FaHome } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { Close, CloudUpload } from '@mui/icons-material';
import { ChangeEvent } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from 'next-intl';
import { SearchContext } from '@/context/AppContext';

const Item = styled(Paper)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '10px',
  // border:'2px solid #490057',
   boxShadow: '0 4px 8px rgba(104, 108, 104, 0.2)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const Account = () => {
  const { profile } = useContext(SearchContext) || {};

  const [selectedImages, setSelectedImages] = useState<(string | null)[]>([null, null, null]);
const t=useTranslations('Profile');
  const handleImageChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Tạo URL cho ảnh tạm thời
      const updatedImages = [...selectedImages];
      updatedImages[index] = imageUrl;
      setSelectedImages(updatedImages); // Cập nhật state
    }
  };


  const handleRemoveImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages[index] = null; // Đặt ảnh tại ô tương ứng thành null
    setSelectedImages(updatedImages); // Cập nhật state
  };
const item=[
  {name:'Male', icon:<FaHome />},
  {name:'Born June 26, 1980', icon:<FaHome />},
  {name:'2239  Hog Camp Road Schaumburg', icon:<FaHome />},
  {name:'jon@gmail.com', icon:<FaHome />},
  {name:'33757005467', icon:<FaHome />}


]
const you=[
  {name:'Eddie Lobanovskiy',title:'laboanovskiy@gmail.com', icon:'/img/profile/user.svg'},
  {name:'Alexey Stave',title:'alexeyst@gmail.com', icon:'/img/profile/user.svg'},
  {name:'Anton Tkacheve',title:'tkacheveanton@gmail.com', icon:'/img/profile/user.svg'},
]
const Active=[
  {name:'Shelby Goode',title:'Online', icon:'/img/profile/user.svg', minute:'1 min ago'},
  {name:'Robert Bacins',title:'Busy', icon:'/img/profile/user.svg',minute:'1 min ago'},
  {name:'John Carilo',title:'Online', icon:'/img/profile/user.svg',minute:'1 min ago'},
  {name:'Adriene Watson',title:'Online', icon:'/img/profile/user.svg',minute:'1 min ago'},

]
  return (
    <div className='h-full w-full '>



    <Box >

          <div className='p-5'>

            <div className='flex flex-col gap-3 w-full'>
              <div className='text-4xl text-black font-bold'>{t('Thông tin tài khoản')}</div>
            <div className='text-xl text-gray-700 '>{t('Tên, giới thiệu và mã doanh nghiệp')}</div>
            <div className='py-3'>
<div className='h-[1px] bg-gray-300 w-full'></div>

</div>
            <div className='text-2xl text-black'>
                {t('Tên doanh nghiệp')}<span className='text-red-600 text-2xl'>(*)</span>
            </div>
            <div className='w-full'>

             <TextField
             disabled
        id="outlined-basic"
        label={profile?.user?.username}
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            transition: '0.3s', // Smooth transition
            '& fieldset': {
              borderColor: 'green', // Default border color
            },
            '&:hover fieldset': {
              borderColor: 'green', // Green border on hover
              boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.5)', // Green shadow on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green', // Green border on focus
              boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.7)', // Stronger green shadow on focus
            },
          },
        }}
      />
            </div>
            <div className='text-2xl text-black'>
               {t('Giới thiệu doanh nghiệp')}
            </div>
            <div className='w-full'>
             <TextField
        id="outlined-basic"
        label={`${t('Giới thiệu doanh nghiệp')}`}
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            transition: '0.3s', // Smooth transition
            '& fieldset': {
              borderColor: 'green', // Default border color
            },
            '&:hover fieldset': {
              borderColor: 'green', // Green border on hover
              boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.5)', // Green shadow on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green', // Green border on focus
              boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.7)', // Stronger green shadow on focus
            },
          },
        }}
      />
            </div>
            <div>
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item sx={{
            boxShadow:'none'
          }}>
           <div className='flex-col '>
             <div className='text-2xl text-black'>{t('Ảnh doanh nghiệp')}</div>
            <div className='pt-3'>
            <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}

    >
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    {Array.from({ length: 3 }).map((_, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '130px',
            height: '130px',
            border: '2px dashed #e0e0e0',
            borderRadius: 4,
            backgroundColor: '#f9fafe',
            position: 'relative',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0 0 10px rgba(0, 128, 0, 0.3)',
            },
          }}
        >
          <Paper elevation={0} sx={{ width: '130px', height: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {selectedImages[index] ? (
              <>
                <Image
                  src={selectedImages[index]!}
                  alt={`Uploaded ${index}`}
                  width={130}
                  height={130}
                  style={{ width: '130px', height: '130px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'white',
                    opacity: 0.7,
                    '&:hover': { backgroundColor: '#fa0a0a' },
                  }}
                  onClick={() => handleRemoveImage(index)}
                >
                  <CloseIcon sx={{ color: 'red', fontSize: 10 }} />
                </IconButton>
              </>
            ) : (
              <>
                <CloudUpload sx={{ color: 'green', fontSize: 32 }} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange(index)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '130px',
                    height: '130px',
                    opacity: 0,
                    cursor: 'pointer',
                  }}
                />
              </>
            )}
          </Paper>
        </Item>
      </Grid>
    ))}
  </Grid>
</Box>

    </Box>
            </div>
           </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item
          sx={{
            boxShadow:'none'
          }}>
              <div className='flex-col '>
             <div className='text-2xl text-black'>{t('Chứng nhận doanh nghiệp')}</div>
                       <div className='pt-3'>
<Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    {Array.from({ length: 3 }).map((_, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '130px',
            height: '130px',
            border: '2px dashed #e0e0e0',
            borderRadius: 4,
            backgroundColor: '#f9fafe',
            position: 'relative',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0 0 10px rgba(0, 128, 0, 0.3)',
            },
          }}
        >
          <Paper elevation={0} sx={{ width: '130px', height: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {selectedImages[index] ? (
              <>
                <Image
                  src={selectedImages[index]!}
                  alt={`Uploaded ${index}`}
                  width={130}
                  height={130}
                  style={{ width: '130px', height: '130px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'white',
                    opacity: 0.7,
                    '&:hover': { backgroundColor: '#fa0a0a' },
                  }}
                  onClick={() => handleRemoveImage(index)}
                >
                  <CloseIcon sx={{ color: 'red', fontSize: 10 }} />
                </IconButton>
              </>
            ) : (
              <>
                <CloudUpload sx={{ color: 'green', fontSize: 32 }} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange(index)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '130px',
                    height: '130px',
                    opacity: 0,
                    cursor: 'pointer',
                  }}
                />
              </>
            )}
          </Paper>
        </Item>
      </Grid>
    ))}
  </Grid>
</Box>

            </div>
           </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
            </div>
            </div>
          </div>

    </Box>

    </div>
  )
}

export default Account