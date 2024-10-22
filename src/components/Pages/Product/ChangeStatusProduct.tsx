import { AppDispatch } from '@/store/store';
import { Box, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeStatusProduct } from '@/store/features/Product/ChangeStatusProductSlice';
import { searchProduct } from '@/store/features/Product/SearchSlice';

interface ChangeStatusProps {
  product_status: string;
  product_code: string;
}

interface SearchPayload {
  category: number;
  search: string;
  page: number;
}
const ChangeStatus: React.FC<ChangeStatusProps> = ({ product_code, product_status }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { category,search,page } = useSelector((state: any) => state?.SearchSlice);

  const handleClick = async () => {
    try {
      await dispatch(actionChangeStatusProduct(product_code)).unwrap();
       const payload = { category, search, page };
   await dispatch(searchProduct(payload));
    } catch (error) {
      console.error("Lỗi khi thay đổi trạng thái:", error);
    }
  };


  return (
    <Box onClick={handleClick}>
      {product_status === 'In production' ? (
        <Button
          variant="contained"
          style={{
            backgroundColor: '#b2e0e0',
            color: '#00796b',
            border: '1px solid #00796b',
            borderRadius: '4px',
            width: '80px',
            height: '35px',
            textTransform: 'none',
          }}
        >
          Active
        </Button>
      ) : (
        <Button
          variant="contained"
          style={{
            backgroundColor: '#f8d7da',
            color: 'red',
            border: '1px solid red',
            borderRadius: '4px',
            width: '80px',
            height: '35px',
            textTransform: 'none',
          }}
        >
          Inactive
        </Button>
      )}
    </Box>
  );
};

export default ChangeStatus;