'use client';
import React, { useEffect, useState, useCallback } from 'react';
import axiosIns from '../../../store/api/axiosIns';

import {
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Typography,
  Alert,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
interface Image {
  url: string;
}

interface Product {
  Name: string;
  Description: string;
  Image: Image;
  product_code: string;
  Expiry_date: number;
  Unit: number;
  Product_status: number;
  certify: Image;
  Product_date: string;
  Product_type: number;
  Product_packing: number;
}

type Results = Product[];
type ApiResponse = /*unresolved*/ any;

type Category = '1' | '2' | '3';
type Type = '' | '1' | '2';
type Status = '' | '1' | '2';

interface SearchProductProps {
  setFilteredProducts: any | React.Dispatch<React.SetStateAction<Results>>;
}

const SearchProduct: React.FC<SearchProductProps> = ({
  setFilteredProducts,
}) => {
  const [category, setCategory] = useState<Category>('1');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [type, setType] = useState<Type>('');
  const [status, setStatus] = useState<Status>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchResults = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken') || '';

      let requestData: any = { category };

      if (category === '1') {
        requestData.search = searchTerm;
      } else if (category === '2') {
        requestData.search = type;
      } else if (category === '3') {
        requestData.search = status;
      }

      setLoading(true);
      setError(null);

      const response = await axiosIns.post<ApiResponse, any>(
        'http://192.168.0.106:3001/search/19/product',
        requestData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setFilteredProducts(response.data);
    } catch (error) {
      setError('Error fetching search results. Please try again.');
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  }, [category, searchTerm, type, status, setFilteredProducts]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [fetchResults]);

  return (
    <div className="flex gap-10">
      <Typography variant="h6" gutterBottom>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as Category);
              setSearchTerm(''); // Reset search input when category changes
              setType(''); // Reset type when category changes
              setStatus(''); // Reset status when category changes
            }}
            label="Category"
          >
            <MenuItem value="1">Tên đối tượng</MenuItem>
            <MenuItem value="2">Vùng sản xuất</MenuItem>
            <MenuItem value="3">Trạng thái</MenuItem>
          </Select>
        </FormControl>
      </Typography>

      {category === '1' && (
        <FormControl
          variant="outlined"
          sx={{ minWidth: '200px', width: 400, borderRadius: '40px' }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </FormControl>
      )}

      {category === '2' && (
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="type-select-label">Vùng sản xuất</InputLabel>
          <Select
            labelId="type-select-label"
            value={type}
            onChange={(e) => setType(e.target.value as Type)}
            label="Vùng sản xuất"
          >
            <MenuItem value="" disabled>
              Chọn vùng
            </MenuItem>
            <MenuItem value="1">Vùng nuôi trồng</MenuItem>
            <MenuItem value="2">Vùng chế biến</MenuItem>
          </Select>
        </FormControl>
      )}

      {category === '3' && (
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="status-select-label">Trạng thái</InputLabel>
          <Select
            labelId="status-select-label"
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            label="Trạng thái"
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="1">Đang hoạt động</MenuItem>
            <MenuItem value="2">Ngừng hoạt động</MenuItem>
          </Select>
        </FormControl>
      )}

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default SearchProduct;
