import React, { useState, useEffect, useContext } from 'react';
import axiosIns from '../../../store/api/axiosIns';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Area } from '@/types/types';
import { SearchContext } from '@/context/AppContext';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { actionEditArea } from '@/store/features/Area/EditAreaSlice';

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

interface EditProps {
  id: string;
  row: any;
}

const AreasForm: React.FC<EditProps> = ({ id, row }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Area>(row);
  const { refetch } = useContext(SearchContext) || {};
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Set initial form data from row when opened
    setFormData(row);
    setImagePreview(row?.Image || null);
  }, [row, isOpen]);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setImage(null);
    setImagePreview(row?.Image || null);
  };

  const handleEditChange = (e:any | React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };
const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const data = new FormData();
  data.append('Name', formData.Name);
  data.append('Address', formData.Address);
  data.append('Area_type', formData.Area_type.toString());
  data.append('description', formData.description);

  if (image) {
    data.append('Image', image);
  }

  try {
    await dispatch(actionEditArea({ id, data })).unwrap();
    refetch?.();
    handleClose();
  } catch (error) {
    toast.error('Failed to update area');
    console.error(error);
  } finally {
    setLoading(false);
  }
};



  if (!row) return null;

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Edit
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Area
          </Typography>
          <form onSubmit={handleEditSubmit}>
            <TextField
              label="Name"
              name="Name"
              value={formData.Name}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Address"
              name="Address"
              value={formData.Address}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              type="file"
              name="Image"
              InputLabelProps={{ shrink: true }}
              onChange={handleFileChange}
              fullWidth
              margin="normal"
              helperText="Select an image file"
            />
           {imagePreview && (
  <div className="flex justify-center mt-2">
    <Image
      src={imagePreview }
      alt="Image Preview"
      width={100}
      height={100}
    />
    <Button
      onClick={handleRemoveImage}
      color="error"
      variant="outlined"
      style={{ marginLeft: '8px' }}
    >
      Remove
    </Button>
  </div>
)}

            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="area-type-label">Area Type </InputLabel>
              <Select
                labelId="area-type-label"
                name="Area_type"
                value={formData.Area_type}
                onChange={handleEditChange}
              >
                <MenuItem value="1">Fruit Farming</MenuItem>
                <MenuItem value="2">Vegetable Farming</MenuItem>
              </Select>
            </FormControl>
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : 'Save'}
              </Button>
              <Button
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleClose}
                disabled={loading}
                style={{ marginLeft: '8px' }}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AreasForm;
