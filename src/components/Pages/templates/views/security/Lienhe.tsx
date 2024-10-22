import React from 'react';
import { Container, Grid, Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import Image from 'next/image'

const ContactForm = () => {
  return (
    <Box sx={{paddingTop:'100px'}}  style={{
        backgroundImage: "url('/img/security/Group48096630.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',

      }}>

      <Box sx={{ backgroundColor: 'rgb(28, 49, 68,0.8)', borderRadius: 4, padding: 4,width:'80%',mx:'auto',py:'40px' ,}}>
        <Box mb={4}>
          <Typography variant="h2" sx={{ color: '#fff', mb: 2 ,display:'flex',justifyContent:'center'}}>Liên hệ</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
             <TextField
  fullWidth
  variant="outlined"
  label="Họ và tên"
  InputProps={{
    style: { color: '#fff' },
  }}
  InputLabelProps={{
    style: { color: '#fff' },
  }}
  sx={{
    backgroundColor: 'rgba(28, 49, 68, 0.1)', // Proper RGBA for opacity
     borderRadius: '20px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      '& fieldset': {
        borderColor: '#007E94',
      },
      '&:hover fieldset': {
        borderColor: '#007E94',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#007E94',
      },
    },
  }}
/>

            </Grid>
            <Grid item xs={12}>
             <TextField
  fullWidth
  variant="outlined"
  label="Email/Số điện thoại"
  InputProps={{
    style: { color: '#fff' },
  }}
  InputLabelProps={{
    style: { color: '#fff' },
  }}
  sx={{
    backgroundColor: 'rgba(28, 49, 68, 0.1)', // Proper RGBA for opacity
    borderRadius: '20px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      '& fieldset': {
        borderColor: '#007E94',
      },
      '&:hover fieldset': {
        borderColor: '#007E94',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#007E94',
      },
    },
  }}
/>

            </Grid>
            <Grid item xs={12}>
          <TextField
  fullWidth
  variant="outlined"
  label="Nội dung"
  multiline
  rows={4}
  InputProps={{
    style: { color: '#fff' },
  }}
  InputLabelProps={{
    style: { color: '#fff' },
  }}
  sx={{
    backgroundColor: 'rgba(62, 79, 95, 0.4)',
    borderRadius: '20px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      '& fieldset': {
        borderColor: '#007E94',
      },
      '&:hover fieldset': {
        borderColor: '#007E94',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#007E94',
      },
    },
  }}
/>

            </Grid>
            <Grid item xs={12} textAlign="center">
           <Button
  sx={{
    backgroundImage: 'linear-gradient(180deg, rgba(9, 80, 80, 0.9) 0%, rgba(20, 118, 182, 0.18) 100%)',
    borderRadius: '20px',
    width: '15%',
    height: '50px',
    color: '#fff', // Ensure the text is visible on the gradient
    '&:hover': {
      backgroundImage: ' linear-gradient(180deg, rgba(9, 80, 80, 0.9) 0%, rgba(20, 118, 182, 0.18) 100%)', // Adjust hover effect if needed
    },
  }}
>


  Gửi
</Button>

            </Grid>
          </Grid>
        </Box>


      </Box>
       <Box sx={{width:'80%',mx:'auto',py:'60px'}}>
         <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: 'rgb(83, 129, 165)',height:'190px',alignItems:'center' }}>
              <CardContent sx={{ display:'flex',gap:3}}>
                 <Image
            src="/img/security/Group48096621.svg"
            alt="qr scan"
            width={88}
            height={88}
            className="relative z-0"
          />
                <Typography variant="h4" sx={{ color: '#ffff' ,display:'flex', alignItems:'center'}}>
                  Thời gian làm việc
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
          <Card sx={{ backgroundColor: 'rgb(83, 129, 165)',height:'190px',alignItems:'center' }}>
          <CardContent sx={{ display:'flex',gap:3}}>
                 <Image
            src="/img/security/Group48096622.svg"
            alt="qr scan"
            width={88}
            height={88}
            className="relative z-0"
          />
                <Typography variant="h4" sx={{ color: '#ffff' ,display:'flex', alignItems:'center'}}>
                 Liên hệ
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
       </Box>
    </Box>
  );
};

export default ContactForm;
