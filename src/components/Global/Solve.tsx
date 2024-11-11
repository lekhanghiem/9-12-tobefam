'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField, InputAdornment } from '@mui/material'; // Removed the duplicate Box import

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '100%',
  border: 'none',
  boxShadow: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    borderRadius: '30px',
    border: '2px solid #007E94', // Border color matches the button
    padding: '0px',

    '&:hover': {
      borderColor: '#007E94',
    },
    '&.Mui-focused': {
      borderColor: '#007E94',
    },
  },
  '& input': {
    padding: '9px', // Adjust the padding inside the input field
    '&::placeholder': {
      color: '#007E94', // Custom placeholder color
      opacity: 1, // Ensure full opacity for better visibility
    },
  },
  '& fieldset': {
    border: 'none', // Removing default fieldset border to use custom border
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#007E94',
  color: '#fff',
  width: '100%',
  borderRadius: '30px',
  padding: '10px 20px',
  border: '1px solid #007E94', // Matching border with input field
  '&:hover': {
    backgroundColor: '#004F60', // Button hover background color
  },
});

const Solve = () => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 rounded-3xl h-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[linear-gradient(to_right,rgba(1,250,169,1),rgb(105,250,118),rgba(159,247,88,1))]">
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Item sx={{ height: { sx: '100px', md: '250px' } }}>
                <div className="w-11/12 mx-auto text-left">
                  <div className="text-4xl font-bold text-[#007E94] leading-10 py-3">
                    Solve Complex Data Challenges.
                  </div>
                  <div className="text-[#007E94] leading-8 text-xl">
                    Subscribe to our newsletter for regular updates.
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ height: { sx: '100px', md: '250px' } }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    width: '100%',
                  }}
                >
                  <StyledTextField
                    className="w-[100%]"
                    placeholder="Enter your email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <StyledButton>Subscribe</StyledButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Solve;
