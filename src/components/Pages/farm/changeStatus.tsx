'use client';
import React, { useState } from 'react';
import axiosIns from '../../../store/api/axiosIns';

import { Button, CircularProgress, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

interface AreaStatusToggleProps {
  areaId: number;
  initialStatus: boolean;
  setIsUpdate: any;
}

const AreaStatusToggle: React.FC<AreaStatusToggleProps> = ({
  setIsUpdate,
  areaId,
  initialStatus,
}) => {
  const [isActive, setIsActive] = useState(initialStatus);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const t = useTranslations('a');

  const handleToggleStatus = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        toast.error('Không tìm thấy token');
        return;
      }

      const newStatus = !isActive;
      const response = await axiosIns.patch(

        `/area/${areaId}/status`, // Sửa URL API
        { status: newStatus },
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {


        toast.success(`${t('Đã cập nhật trạng thái khu vực')}`);
        setIsActive(newStatus);
        setIsUpdate((prev: boolean) => !prev);
      } else {
        throw new Error(
          `${t('Có lỗi xảy ra khi cập nhật trạng thái khu vực')}`
        );
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu cập nhật trạng thái:', error);
      setSnackbarOpen(true); // Hiển thị snackbar khi có lỗi
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
        color={isActive ? 'primary' : 'secondary'}
        onClick={handleToggleStatus}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} />
        ) : isActive ? (
          `${t('Tắt')}`
        ) : (
          `${t('Bật')}`
        )}
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert severity="error" onClose={handleSnackbarClose}>
          {t('Có lỗi xảy ra khi cập nhật trạng thái khu vực')}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AreaStatusToggle;
