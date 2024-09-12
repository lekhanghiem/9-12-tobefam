// index.tsx
import React from 'react';
import Banner from './Banner';
import Gioithieu from './Gioithieu';
import Theodoi from './Theodoi';
import { TextField } from '@mui/material';
import Minhbach from './Minhbach';

const Index = () => {
  return (
    <div>
<Banner/>
      <Gioithieu/>
        <Theodoi/>
        <Minhbach/>

    </div>
  );
};

export default Index;
