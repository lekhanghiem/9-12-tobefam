import { Box, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
const Contact = () => {
  return (
    <div className='h-full w-full '>
<div className='p-5'>
  <div className=''>
<div className='flex-col gap-3 text-4xl font-bold '>
  Thông tin liên lạc
</div>
<div className='pt-3 text-gray-500 text-xl'>
  Thông tin địa chỉ liên lạc
</div>
<div className='py-3'>
<div className='h-[1px] bg-gray-300 w-full'></div>
</div>
</div>
<div className='pt-3'>
<div className='text-2xl text-black font-bold'>
Email đăng nhập tài khoản <span className='text-red-600'>(*)</span>
</div>
<div className='pt-5'>
 <Box
      component="form"
      sx={{ '& > :not(style)': {  width: '100%' } }}
      noValidate
      autoComplete="off"
    >
     <TextField
        id="outlined-basic"
        label="Email đăng nhập tài khoản"
        variant="outlined"
        fullWidth
         helperText={null}
        sx={{
          '& .MuiInputLabel-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            transition: '0.3s',
            '& fieldset': {
              borderColor: 'green',
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
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black', // Màu label khi focus
          },
        }}
      />

    </Box>
</div>
</div>
<div className='pt-3'>
<div className='text-2xl text-black font-bold'>
Email liên hệ
</div>
<div className='pt-5'>
 <Box
      component="form"
      sx={{ '& > :not(style)': {  width: '100%' } }}
      noValidate
      autoComplete="off"
    >
     <TextField
        id="outlined-basic"
        label="Email liên hệ"
        variant="outlined"
        fullWidth
         helperText={null}
        sx={{
          '& .MuiInputLabel-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            transition: '0.3s',
            '& fieldset': {
              borderColor: 'green',
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
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black', // Màu label khi focus
          },
        }}
      />

    </Box>
</div>
</div>
<div className='pt-3'>
<div className='text-2xl text-black font-bold'>
Địa chỉ website
</div>
<div className='pt-5'>
 <Box
      component="form"
      sx={{ '& > :not(style)': {  width: '100%' } }}
      noValidate
      autoComplete="off"
    >
     <TextField
        id="outlined-basic"
        label="Địa chỉ website"
        variant="outlined"
        fullWidth
         helperText={null}
        sx={{
          '& .MuiInputLabel-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            transition: '0.3s',
            '& fieldset': {
              borderColor: 'green',
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
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black', // Màu label khi focus
          },
        }}
      />

    </Box>
</div>
</div>
<div className='pt-3'>
<div className='text-2xl text-black font-bold'>
Địa chỉ
</div>
<div className='pt-5'>
 <Box
      component="form"
      sx={{ '& > :not(style)': {  width: '100%' } }}
      noValidate
      autoComplete="off"
    >
     <TextField
        id="outlined-basic"
        label="Địa chỉ"
        variant="outlined"
        fullWidth
         helperText={null}
        sx={{
          '& .MuiInputLabel-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            transition: '0.3s',
            '& fieldset': {
              borderColor: 'green',
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
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black', // Màu label khi focus
          },
        }}
      />

    </Box>
</div>
</div>
<div className='pt-3'>
<div className='flex justify-between'>
  <div className='text-2xl text-black font-bold'>
Số điện thoại liên hệ
</div>
<div className='flex items-center'>
   <Button sx={{
    backgroundColor: 'green',
    color: 'white'
   }}>Xác nhận</Button>
</div>
</div>
<div className='pt-5'>
 <Box
      component="form"
      sx={{ '& > :not(style)': {  width: '100%' } }}
      noValidate
      autoComplete="off"
    >
     <TextField
        id="outlined-basic"
        label="Số điện thoại liên hệ"
        variant="outlined"
        fullWidth
         helperText={null}
        sx={{
          '& .MuiInputLabel-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            transition: '0.3s',
            '& fieldset': {
              borderColor: 'green',
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
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black', // Màu label khi focus
          },
        }}
      />

    </Box>
</div>
</div>
</div>
    </div>
  )
}

export default Contact