import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Tooltip } from '@mui/material';
import { Product } from '@/types/types';
import { SearchContext } from '@/context/AppContext';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { actionEditProduct } from '@/store/features/Product/EditProductSlice';
import { MdEditNote } from "react-icons/md";
import { searchProduct } from '@/store/features/Product/SearchSlice';

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

interface EditProductProps {
  product_code: string;
  row: any;
}

const AreasForm: React.FC<EditProductProps> = ({ product_code, row }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(row.Image);
  const [imagePreview, setImagePreview] = useState<any |null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Product>(row);
   const { category,search,page } = useSelector((state: any) => state?.SearchSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setFormData(row);
    setImagePreview(row?.Image|| null);
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
    setImagePreview(row?.Image|| null);
  };

  const handleEditChange = (e:any| SelectChangeEvent<number>|React.ChangeEvent<{ name?: string; value: unknown }>) => {
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
    data.append('Product_type', formData.Product_type.toString());
    data.append('Description', formData.Description);
    data.append('Unit', formData.Unit);

    data.append('Product_packing', formData.Product_packing);
    data.append('Expiry_date', formData.Expiry_date);

    if (image) {
      data.append('Image', image);
    }

    try {
      await dispatch(actionEditProduct({ product_code, data })).unwrap();
      const payload = { category, search, page };
   await dispatch(searchProduct(payload));
      handleClose();
    } catch (error) {
      toast.error('Failed to update product: ' + (error as Error).message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!row) return null;

  return (
    <div>
      <Tooltip title="Edit">
        <Button sx={{ backgroundColor: '#82eb87' }} onClick={handleOpen} variant="contained">
          <MdEditNote fontSize={23} />
        </Button>
      </Tooltip>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Product {formData.Name}
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
                  src={imagePreview}
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
              name="Description"
              value={formData.Description}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="product-type-label">Product Type {formData.Product_type}</InputLabel>
              <Select
                labelId="product-type-label"
                name="Product_type"
                value={formData.Product_type}
                onChange={handleEditChange}
              >
                <MenuItem value="1">Fruit Farming</MenuItem>
                <MenuItem value="2">Vegetable Farming</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="product-type-label"> Unit {formData.Unit}</InputLabel>
              <Select
                labelId="product-type-label"
                name="Unit"
                value={formData.Unit}
                onChange={handleEditChange}
              >
                <MenuItem value="1">Date</MenuItem>
                <MenuItem value="2">Month</MenuItem>
                <MenuItem value="3">Year</MenuItem>

              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="product-packing-label">Product Packing {formData.Product_packing}</InputLabel>
              <Select
                labelId="product-packing-label"
                name="Product_packing"
                value={formData.Product_packing}
                onChange={handleEditChange}
              >
                <MenuItem value="1">Packing  1</MenuItem>
                <MenuItem value="2">Packing  2</MenuItem>
              </Select>
            </FormControl>
           <FormControl fullWidth margin="normal">
  <TextField
    id="expiry-date"
    label="Expiry Date"
    type="number"
    name="Expiry_date"
    value={formData.Expiry_date}
    onChange={handleEditChange}
    InputLabelProps={{
      shrink: true, // Ensures the label doesn't overlap with the date value
    }}
    fullWidth
    required
  />
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
