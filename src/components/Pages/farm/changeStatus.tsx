import { actionChangeStatus } from '@/store/features/todos/ChangeStatusSlice';
import { AppDispatch } from '@/store/store';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
interface ChangeStatusProps {
  id: number;
  Area_status: string;
  refetch: any;
  handleSearch: () => void;

}


const ChangeStatus: React.FC<ChangeStatusProps> = ({ id, Area_status, refetch ,handleSearch}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = async () => {
    try {

      // await dispatch(actionChangeStatus(id)).unwrap();
      // await handleUpdateSuccess();
      handleSearch();

      console.log(handleSearch);
    } catch (error) {
      console.error("Lỗi khi thay đổi trạng thái:", error);
    }
  };

  const handleUpdateSuccess = () => {
    refetch();

  };
const handleClicks = () => {
      handleSearch();
};
  return (
    <div>
<button onClick={handleClicks}>123</button>



      <Box onClick={handleClicks}>
        {Area_status === 'In production' ? (
          <Button
            variant="contained"
            style={{
              backgroundColor: '#b2e0e0',
              color: '#00796b', // Màu chữ
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
              color: 'red', // Màu chữ
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
    </div>
  );
};

export default ChangeStatus;