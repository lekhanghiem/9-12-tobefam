'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, CardHeader, Divider, FormControlLabel, TextField } from '@mui/material';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import { useTranslations } from 'next-intl';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
  const buttonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '10px',
    padding: '8px 16px',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#43A047',
    },
  };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function SprintStamp() {
  const t=useTranslations('Profile');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
 <div>
      <Button onClick={handleOpen} sx={buttonStyles} > Tạo tệp in tem</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>


    <div className=''>

        <Box sx={style}>
          <div className='h-full'>
            <div>
              <div className="text-4xl font-bold">{t('Vui lòng nhập thông tin của bạn')}</div>
              <div className="pt-3 text-gray-500 text-xl">
                {t('Chọn mẩu tem')}
              </div>
            </div>
 <div className="py-3">
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>
    <div className='flex justify-between'>
      <FormControlLabel value="female" control={<Radio />} label="img" />
          <FormControlLabel value="male" control={<Radio />} label="img" />

    </div>
    <div className='pt-3'>
<div className='text-2xl text-black font-bold'>
  {t('Tem bắt đầu')}
 <span className='text-red-600'>(*)</span>
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
        label={`${t('Email đăng nhập tài khoản')}`}
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
  {t('Tem kết thúc')}
 <span className='text-red-600'>(*)</span>
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
        label={`${t('Email đăng nhập tài khoản')}`}
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
        </Box>
      {/* </Modal> */}
    </div>
        </Box>
      </Modal>
    </div>



  );
}
