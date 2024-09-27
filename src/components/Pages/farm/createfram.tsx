'use client';
import React, { useState } from 'react';
import axiosIns from '../../../store/api/axiosIns';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTranslations } from 'next-intl';
import Image from 'next/image'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreateAreaForm: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [areaType, setAreaType] = useState('');
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem('accessToken');

    if (!token) {
      toast.error('No access token found. Please log in again.');
      return;
    }

    const headers = {
      Authorization: token,
    };

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Address', address);
    if (image) {
      formData.append('Image', image);
    }
    formData.append('description', description);
    formData.append('Area_type', areaType);

    try {
      const response = await axiosIns.post('/area/create', formData, { headers });

      if (response.status === 200) {
        toast.success(response.data.message || 'Area created successfully!');
        setName('');
        setAddress('');
        setImage(null);
        setImagePreview(null);
        setDescription('');
        setAreaType('');
        handleClose();
      } else {
        toast.error('Failed to create area. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to create area. Please try again later.');
    }
  };

  const t = useTranslations('a');

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {t('Thêm Mới')}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{paddingBottom:'20px'}}>
            {t('Vùng sản')}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Box>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
              <Button variant="contained" component="label">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
              {imagePreview && (
                <Image
                  src={imagePreview as string}
                  alt="Image Preview"
                  style={{ marginTop: 10, maxWidth: '50px',borderRadius:'10px' }}
                />
              )}
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <InputLabel id="area-type-label">Area loại</InputLabel>
              <Select
                fullWidth
                labelId="area-type-label"
                value={areaType}
                onChange={(e) => setAreaType(e.target.value as string)}
                required
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>

                <MenuItem value="1">Rau củ</MenuItem>
                <MenuItem value="2">Hoa quả</MenuItem>
              </Select>
            </Box>
            <Button type="submit" variant="contained" color="primary">
              {t('Thêm')}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateAreaForm;
