import { actionChangeStatus } from '@/store/features/Area/ChangeStatusSlice';
import { AppDispatch } from '@/store/store';
import { Box, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchContext } from '@/context/AppContext';
import { searchArea } from '@/store/features/Area/SearchAreaSlice';

interface ChangeStatusProps {
  id: string;
  Area_status: string;
}

const ChangeStatus: React.FC<ChangeStatusProps> = ({ id, Area_status }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleSearch,category,search } = useContext(SearchContext) || {};
  const handleClick = async () => {
    try {
      await dispatch(actionChangeStatus(id)).unwrap();

handleSearch(search,category)

    } catch (error) {
      console.error("Lỗi khi thay đổi trạng thái:", error);
    }
  };

  return (
    <Box onClick={handleClick}>
      {Area_status === 'In production' ? (
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