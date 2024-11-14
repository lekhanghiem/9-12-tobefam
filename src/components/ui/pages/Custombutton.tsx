import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  return (
    <div className="text-left py-5">
      <Button
        className="btlog lg:text-2xl text-xl"
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          height: '50px',
          borderRadius: '40px',
          padding: '10px 40px',
          color: 'gray',
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
