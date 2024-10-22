import { Box, FormControlLabel, Switch, Select, MenuItem, FormControl, InputLabel, TextField, Button } from '@mui/material';
import React from 'react';

// Define props type for the ToggleSwitch component
interface ToggleSwitchProps {
  label: any;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label }) => (
  <FormControlLabel
    control={<Switch
       sx={{
        fontSize: '90px',

      }} color="success" />}
    label={<div className="text-2xl px-5">{label}</div>}
    sx={{ marginTop: '8px' }}
  />
);

const SettingProfile: React.FC = () => {
    const items = [
    { label: 'Time display of activities' },
    { label: 'Show activity details' },
    { label: 'Show map as satellite' },
    { label: 'Automatically expand action details' },
    { label: 'Display logs in order from newest to oldest' },
    { label: 'Use an alternate account name for any retrieval operation' },
    { label: 'Automatically confirm the completed work' },
    { label: 'Show the number of stamp scans' },
    { label: 'Show an alert when the maximum number of stamp scans is exceeded' },
  ];
  return (
    <div className="h-full w-full">
      <div className="p-5">
     <div className='flex justify-between'>
       <div className='flex-col'>
          <div className="flex-col gap-3 text-4xl font-bold">Settings</div>
        <div className="pt-3 text-gray-500 text-xl">Display settings and advanced</div>
      </div>
        <div className='flex items-center gap-5'>
           <Button sx={{
    backgroundColor: 'red',
    color: 'white'
   }}>Restore</Button>
   <Button sx={{
    backgroundColor: 'green',
    color: 'white'
   }}>Save</Button>
</div>
     </div>
        <div className="py-3">
          <div className="h-[1px] bg-gray-300 w-full"></div>
        </div>

      {items.map((item, index) => (
  <div key={index}>
    <ToggleSwitch
      label={
        <div className="text-2xl font-bold">{item.label}</div>
      }
    />
  </div>
))}

        <div className="pt-3">
          <div className="text-2xl text-black font-bold">
            Default language <span className="text-red-600">(*)</span>
          </div>
          <div className="pt-5">
            <Box
              component="form"
              sx={{ '& > :not(style)': { width: '100%' } }}
              noValidate
              autoComplete="off"
            >
              <FormControl
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    transition: '0.3s',
                    '& fieldset': { borderColor: 'green' },
                    '&:hover fieldset': {
                      borderColor: 'green',
                      boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'green',
                      boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.7)',
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
                }}
              >
                <InputLabel id="select-label" sx={{ color: 'black' }}>
                  Default language
                </InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  defaultValue=""
                  label="Chọn một số"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className='pt-3'>
<div className='text-2xl text-black font-bold'>
Maximum number of stamp scans
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
        label="Number"
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
  );
};

export default SettingProfile;
