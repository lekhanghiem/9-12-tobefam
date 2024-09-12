// AreaStatusToggle.tsx
'use client';
import React, { useState } from 'react';
import axiosIns from '../../../store/api/axiosIns';

import { toast } from 'react-toastify';
import { Button, CircularProgress, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

interface AreaStatusToggleProps {
  product_code: number;
  initialStatus: number;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const AreaStatusToggle: React.FC<AreaStatusToggleProps> = ({
  setIsUpdate,
  product_code,
  initialStatus,
}) => {
  const [status, setStatus] = useState<number>(initialStatus);
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const handleToggleStatus = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        toast.error('Không tìm thấy token');
        return;
      }

      const newStatus = status === 1 ? 2 : 1;
      const response = await axiosIns.patch(
        `/product/${product_code}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Đã cập nhật trạng thái sản phẩm thành công');
        setStatus(newStatus);
        setIsUpdate((prev) => !prev);
      } else {
        throw new Error('Có lỗi xảy ra khi cập nhật trạng thái sản phẩm');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu cập nhật trạng thái:', error);
      toast.error('Có lỗi xảy ra khi gửi yêu cầu');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color={status === 1 ? 'primary' : 'secondary'}
        onClick={handleToggleStatus}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} />
        ) : status === 1 ? (
          'Tắt'
        ) : (
          'Bật'
        )}
      </Button>
      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert severity="error" onClose={handleSnackbarClose}>
          Có lỗi xảy ra khi cập nhật trạng thái sản phẩm
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default AreaStatusToggle;
