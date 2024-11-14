'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTranslations } from 'next-intl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
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

export default function SprintStamp() {
  const t = useTranslations('Profile');

  const [open, setOpen] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event:any) => setSelectValue(event.target.value);

  return (
    <div>
      <Button onClick={handleOpen} sx={buttonStyles}>Đặt in tem</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-4xl font-bold">{t('Thông tin về đặt hàng in tem')}</div>
          <div className="py-3">
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>

          {/* Select Input Example */}
          <div className="pt-3">
            <div className="text-2xl text-black font-bold">
              {t('Loại tem')}
              <span className="text-red-600">(*)</span>
            </div>
            <div className="pt-5">
              <Box
                component="form"
                sx={{ '& > :not(style)': { width: '100%' } }}
                noValidate
                autoComplete="off"
              >
                <Select
                sx={{
                  border: '1px solid green',
                  boxShadow:' 2px green'
                }}

                  value={selectValue}
                  onChange={handleChange}
                  fullWidth
                  displayEmpty
                  variant="outlined"

                >
                  <MenuItem value="">
                    <em>{t('Chọn loại tem')}</em>
                  </MenuItem>
                  <MenuItem value={10}>{t('Tem loại 1')}</MenuItem>
                  <MenuItem value={20}>{t('Tem loại 2')}</MenuItem>
                  <MenuItem value={30}>{t('Tem loại 3')}</MenuItem>
                </Select>
              </Box>
            </div>
          </div>

          {/* Additional Select Input Example */}

        </Box>
      </Modal>
    </div>
  );
}
