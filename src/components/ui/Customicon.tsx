import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Ensure you have this import for the Image component

const LanguageSelection = () => {
  return (
     <Box
      sx={{
        display: 'flex',
        gap: { xs: 5, lg: 10 },
        justifyContent: 'center',
        color: 'white',
        paddingY:'10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Image
          src="/img/authu/login/Maskgroup1.png"
          alt="Vietnamese"
          width={82}
          height={82}
        />
        <Typography variant="h4">Tiếng Việt</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Image
          src="/img/authu/login/Maskgroup.png"
          alt="English"
          width={82}
          height={82}
        />
        <Typography variant="h4">English</Typography>
      </Box>
    </Box>
  );
};

export default LanguageSelection;
