import { Box, FormControlLabel, Switch, Select, MenuItem, FormControl, InputLabel, TextField, Button } from '@mui/material';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Profile');
    const items = [
    { label: 'Hiển thị thời gian của các hành động' },
    { label: 'Hiển thị thông tin chi tiết hoạt động' },
    { label: 'Hiển thị bản đồ dưới dạng vệ tinh' },
    { label: 'Tự động mở rộng thông tin chi tiết hành động' },
    { label: 'Hiển thị nhật ký theo thứ tự từ mới nhất đến cũ nhất' },
    { label: 'Tự động xác nhận hoàn thành công việc' },
    { label: 'Tự động xác nhận hoàn thành công việc' },
    { label: 'Hiển thị số lượt quét tem' },
    { label: 'Hiển cảnh báo khi vượt quá số lần quét tem tối đa' },
  ];
  return (
    <div className="h-full w-full">
      <div className="p-5">
     <div className='flex justify-between'>
       <div className='flex-col'>
          <div className="flex-col gap-3 text-4xl font-bold">{t('Thiết lập')}</div>
        <div className="pt-3 text-gray-500 text-xl">{t('Thiết lập hiển thị và nâng cao')}</div>
      </div>
        <div className='flex items-center gap-5'>
           <Button sx={{
    backgroundColor: 'red',
    color: 'white'
   }}>{t('Khôi phục')}</Button>
   <Button sx={{
    backgroundColor: 'green',
    color: 'white'
   }}>{t('Lưu Lại')}</Button>
</div>
     </div>
        <div className="py-3">
          <div className="h-[1px] bg-gray-300 w-full"></div>
        </div>

      {items.map((item, index) => (
  <div key={index}>
    <ToggleSwitch
      label={
        <div className="text-2xl font-bold">{t(item.label)}
</div>
      }
    />
  </div>
))}

        <div className="pt-3">
          <div className="text-2xl text-black font-bold">
            {t('Ngôn ngữ mặc định trên trang truy xuất')} <span className="text-red-600">(*)</span>
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
                  {t('Ngôn ngữ mặc định trên trang truy xuất')}
                </InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  defaultValue=""
        label={`${t('Chọn một số')}`}

                >
                  <MenuItem value={1}>1{t('')}</MenuItem>
                  <MenuItem value={2}>2{t('')}</MenuItem>
                  <MenuItem value={3}>3{t('')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className='pt-3'>
<div className='text-2xl text-black font-bold'>
{t('Số lần quét tem tối đa')}
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
        label={`${t('Number')}`}
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
