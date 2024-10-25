'use client';
import React, { useState } from 'react';
import axiosIns from '../../../store/api/axiosIns';

import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

const CreateProductForm: React.FC = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Description: '',
    Image: null as File | null,
    Expiry_date: '',
    Unit: '',
    Product_type: '',
    Product_packing: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files ? e.target.files[0] : null,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        toast.error('No access token found.');
        return;
      }

      const postData = new FormData();
      postData.append('Name', formData.Name);
      postData.append('Description', formData.Description);
      if (formData.Image) {
        postData.append('Image', formData.Image);
      }
      postData.append('Expiry_date', formData.Expiry_date);
      postData.append('Unit', formData.Unit);
      postData.append('Product_type', formData.Product_type);
      postData.append('Product_packing', formData.Product_packing);
console.log(formData.Image);
debugger
      const response = await axiosIns.post(
        '/product/19/create',
        postData,
        {
          headers: {
            'User-Agent': 'insomnia/9.3.2',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          },
        }
      );

      if (response.data.status === 'success') {
        toast.success(response.data.message);
        setFormData({
          Name: '',
          Description: '',
          Image: null,
          Expiry_date: '',
          Unit: '',
          Product_type: '',
          Product_packing: '',
        });
      } else {
        toast.error(response.data.message || 'Failed to create product.');
      }
    } catch (error:any) {

        console.error('Error response:', error.response);
        toast.error(
          `Error: ${
            error.response?.data.message || 'Failed to create product.'
          }`
        );

    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          thêm mới
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              sản phẩm
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="Name">Name:</label>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="Description">Description:</label>
                  <input
                    type="text"
                    id="Description"
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="Image">Image URL:</label>
                  <input
                    type="file"
                    id="Image"
                    name="Image"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="Expiry_date">Expiry Date:</label>
                  <input
                    type="text"
                    id="Expiry_date"
                    name="Expiry_date"
                    value={formData.Expiry_date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="Unit">Unit:</label>
                  <input
                    type="text"
                    id="Unit"
                    name="Unit"
                    value={formData.Unit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="Product_type">Product Type:</label>
                  <input
                    type="text"
                    id="Product_type"
                    name="Product_type"
                    value={formData.Product_type}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="Product_packing">Product Packing:</label>
                  <input
                    type="text"
                    id="Product_packing"
                    name="Product_packing"
                    value={formData.Product_packing}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Create Product</button>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CreateProductForm;
