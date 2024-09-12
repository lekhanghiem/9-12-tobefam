'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axiosIns from '../../../store/api/axiosIns';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; // Import TextField từ Material-UI

// Định nghĩa interface FormData cho TypeScript
interface FormData {
  Company_name: string;
  district_code: string;
  wards_code: string;
  provinces_code: string;
  description: string;
  Address: string;
}

// Modal styling object cho MUI Box component
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditCompanyForm = () => {
  // State cho form data và error/success messages
  const [formData, setFormData] = useState<FormData>({
    Company_name: '',
    district_code: '',
    wards_code: '',
    provinces_code: '',
    description: '',
    Address: '',
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Function để mở modal
  const handleOpen = () => setOpen(true);

  // Function để đóng modal
  const handleClose = () => setOpen(false);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setError('No token found');
        return;
      }

      const response = await axiosIns.put(
        `/company/edit`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success('Company updated successfully');
        setMessage('Company updated successfully');
        setError(null);
      } else {
        toast.error('Error updating company');
        setMessage(null);
        setError('Error updating company');
      }
    } catch (error) {
      toast.error('Network error');
      setMessage(null);
      setError('Network error');
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-company-modal-title"
        aria-describedby="edit-company-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="Company Name"
                name="Company_name"
                value={formData.Company_name}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="District Code"
                name="district_code"
                value={formData.district_code}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="Wards Code"
                name="wards_code"
                value={formData.wards_code}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="Provinces Code"
                name="provinces_code"
                value={formData.provinces_code}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                label="Address"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Update Company
            </Button>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditCompanyForm;
