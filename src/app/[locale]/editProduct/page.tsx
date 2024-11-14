'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { useTranslations } from 'next-intl';

import DescriptionTabContent from './DescriptionTabContent';
import Brand from './Brand';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffff',
  boxShadow: 'none',
  borderRadius: '12px',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Page = () => {
  const t = useTranslations('User')

  const [selectedTab, setSelectedTab] = useState('profile');

  // Function to handle tab click
  const handleTabClick = (tab:any) => {
    setSelectedTab(tab);
  };

  return (
   <div className='w-full h-full bg-[#f7f7f7] py-10'>
   <div className='py-20 w-11/12 mx-auto'>
     <div className="flex items-center justify-between py-10 px-6 bg-white shadow-md rounded-xl">
  <div className="flex space-x-2  text-gray-700 text-3xl font-bold">
    <a href="#" className="hover:text-indigo-600 text-black">Danh sách sản phẩm</a>
    <span>/</span>
    <a href="#" className="text-green-600 ">Chỉnh sửa</a>
  </div>

 <Button
              type="submit"
              sx={{ backgroundColor: 'green', color: 'white' }}
            >
              {t('Lưu lại')}
            </Button>
</div>
   </div>
     <div className=" w-11/12 mx-auto bg-[#f7f7f7]">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <li role="presentation">
              <div role="tablist">
  <button
    type="button"  // Fix for missing type attribute
    className={`inline-block p-4 rounded-t-lg ${selectedTab === 'profile' ? 'text-black dark:text-purple-500' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400'}`}
    onClick={() => handleTabClick('profile')}
    role="tab"
    aria-controls="styled-profile"
    aria-selected={selectedTab === 'profile'}
  >
    <span className="flex items-center gap-3">
      <span className={`p-10 ${selectedTab === 'profile' ? 'bg-green-500' : 'bg-gray-400'} text-2xl font-bold text-white`}>
        1
      </span>
      <div className="flex flex-col">
        <span className={`${selectedTab === 'profile' ? 'text-green-400' : 'text-black'} text-2xl font-bold`}>Mô tả</span>
        <span className="text-gray-500">Mô tả sản phẩm</span>
      </div>
    </span>
  </button>
</div>
              </li>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <li role="presentation" >
              <div role="tablist">
  <button
    type="button" // Adds button type to prevent unintended behavior
    className={`inline-block p-4 rounded-t-lg ${selectedTab === 'dashboard' ? 'text-black dark:text-purple-500' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400'}`}
    onClick={() => handleTabClick('dashboard')}
    role="tab"
    aria-controls="styled-dashboard"
    aria-selected={selectedTab === 'dashboard'}
  >
    <div className="flex items-center gap-3">
      <div className={`p-10 ${selectedTab === 'dashboard' ? 'bg-green-500' : 'bg-gray-400'} text-2xl font-bold text-white`}>
        2
      </div>
      <div className="flex flex-col">
        <span className={`${selectedTab === 'dashboard' ? 'text-green-400' : 'text-black'} text-2xl font-bold`}>Nhãn hiệu</span>
        <span className="text-gray-500">Thông tin nhãn hiệu</span>
      </div>
    </div>
  </button>
</div>
              </li>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div id="default-styled-tab-content" className=' h-full  w-full  pt-10 '>
        <div
          className={`rounded-lg bg-[#ffff] dark:bg-gray-800 ${selectedTab === 'profile' ? 'block' : 'hidden'} px-5`}
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
<DescriptionTabContent/>


        </div>
        <div
          className={` rounded-lg bg-gray-50 dark:bg-gray-800 ${selectedTab === 'dashboard' ? 'block' : 'hidden'}`}
          id="styled-dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
         <Brand/>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Page;
