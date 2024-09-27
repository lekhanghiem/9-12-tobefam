'use client';
import React, { useState, useEffect } from 'react';
import axiosIns from '../../../store/api/axiosIns';
import { useLocale } from 'next-intl';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

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

interface Image {
  url: string;
}

interface Product {
  Name: string;
  Description: string;
  Image: Image;
  product_code: string;
  Expiry_date: string; // Assuming this is a string representing the date
  Unit: string;
  Product_status: string;
  certify: Image;
  Product_date: string; // Assuming this is a string representing the date
  Product_type: number;
  Product_packing: number;
  qr_code: string; // Assuming qr_code is a URL or string
}

interface EditProductFormProps {
  product: Product | null;
  isOpen: boolean;
  onCancel: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  onCancel,
  onSave,
  isOpen,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    product?.Image.url || null
  );
  const [editProduct, setEditProduct] = useState<Product | null>(product);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (product) {
      setEditProduct(product);
      setImagePreview(product.Image.url);
    }
  }, [product]);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleEditChange = (
    e: any | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditProduct({
        ...editProduct,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editProduct) return; // Guard clause for null product

    setLoading(true);

    const formData = new FormData();
    formData.append('product_code', editProduct.product_code);
    formData.append('Name', editProduct.Name);
    formData.append('Description', editProduct.Description);
    if (image) {
      formData.append('Image', image);
    } else {
      formData.append('Image', editProduct.Image.url);
    }
    formData.append('Expiry_date', editProduct.Expiry_date);
    formData.append('Unit', editProduct.Unit);
    formData.append('Product_type', editProduct.Product_type.toString());
    formData.append('Product_packing', editProduct.Product_packing.toString());

    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token found');

      const response = await axiosIns.put(
        `/product/edit/${editProduct.product_code}`,
        formData,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.status === 'success') {
        toast.success(response.data.message || 'Product updated successfully.');
        onSave({ ...editProduct });
        handleClose();
        router.push(`/listproduct`);
      } else {
        toast.error(response.data.message || 'Failed to update product.');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update product.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setImage(null);
    setImagePreview(product?.Image.url || null); // Reset preview
    onCancel();
  };

  if (!editProduct) return null; // Don't render if no product

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex justify-between">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Product
            <div>{editProduct.Product_date}</div>
          </Typography>
          {editProduct.qr_code && (
            <Typography>
              <Image
                src={editProduct.qr_code}
                alt="QR Code"
                width={100}
                height={100}
              />
            </Typography>
          )}
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleEditSubmit}>
            <TextField
              label="Name"
              name="Name"
              value={editProduct.Name}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Description"
              name="Description"
              value={editProduct.Description}
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
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              </div>
            )}
            <TextField
              type="text"
              label="Expiry Date"
              name="Expiry_date"
              value={editProduct.Expiry_date}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
              required
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Unit</InputLabel>
              <Select
                name="Unit"
                value={editProduct.Unit}
                onChange={handleEditChange}
                label="Unit"
              >
                <MenuItem value="1">Day</MenuItem>
                <MenuItem value="2">Month</MenuItem>
                <MenuItem value="3">Year</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" required>
              <InputLabel id="product-type-label">Product Type</InputLabel>
              <Select
                labelId="product-type-label"
                id="product-type"
                name="Product_type"
                value={editProduct.Product_type}
                onChange={handleEditChange}
                label="Product Type"
              >
                <MenuItem value={1}>Vegetable</MenuItem>
                <MenuItem value={2}>Fruit</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="product-packing-label">Packing</InputLabel>
              <Select
                labelId="product-packing-label"
                id="product-packing"
                name="Product_packing"
                value={editProduct.Product_packing}
                onChange={handleEditChange}
                label="Packing"
              >
                <MenuItem value={1}>Product</MenuItem>
                <MenuItem value={2}>Kilogram</MenuItem>
              </Select>
            </FormControl>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Save'}
              </Button>
              <Button
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleClose}
                disabled={loading}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
};

export default EditProductForm;
