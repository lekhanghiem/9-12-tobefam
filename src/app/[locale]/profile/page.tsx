'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaHome } from 'react-icons/fa';
import Account from '@/components/Pages/profile/Account';
import Contact from '@/components/Pages/profile/Contact';
import ChangePassword from '@/components/Pages/profile/ChangePassword';
import Brand from '@/components/Pages/profile/Brand';
import EditUser from '@/components/Pages/profile/EditUser';
import SettingProfile from '@/components/Pages/profile/SettingProfile';
import { useState } from 'react';
import EditCompanyUser from '@/components/Pages/profile/EditCompanyUser';

interface TabItem {
  id: number;
  label: string;
  icon: JSX.Element;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Box sx={{
            width:'100%'
          }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabItems: TabItem[] = [
    { id: 0, label: 'Thông tin tài khoản', icon: <FaHome /> },
    { id: 1, label: 'Thông tin liên lạc', icon: <FaHome /> },
    { id: 2, label: 'Thương hiệu', icon: <FaHome /> },
    { id: 3, label: 'Thiết lập', icon: <FaHome /> },
    { id: 4, label: 'Đổi mật khẩu', icon: <FaHome /> },
    { id: 5, label: 'Đổi thông tin email, số điện thoại', icon: <FaHome /> },
    { id: 5, label: 'Edit Company', icon: <FaHome /> },
  ];
  return (
    <div>
      <Box sx={{ flexGrow: 1, bgcolor: 'white', display: 'flex', height: 50, width: '100%', }}>
        <Tabs
        sx={{
      width: {
      xs: '350px', // 350px on small screens
      md: '100%',  // 100% on medium and larger screens
    },
    display: 'flex',
    overflowX: 'auto', // Ensure horizontal scrolling
    overflowY: 'hidden', // Prevent vertical overflow
    // whiteSpace: 'nowrap', // Prevent line breaks inside the tabs
    '& .MuiTabs-flexContainer': {
      display: 'inline-flex', // Make sure the tabs stay in one line
    },
  }}
  value={value}
  onChange={handleChange}
  aria-label="Vertical tabs"
  variant="scrollable"
  scrollButtons="auto">
          {tabItems.map((item, index) => (
              <Tab
              key={index}

              sx={{
                border:'none',
                textTransform: 'none',
                borderRadius: '8px',
                // minWidth: 120,
                '&.Mui-selected': {
                  backgroundColor: '#E0E0E0',
                  color: 'white',
                  border:'none',
                },
                '&:hover': {
                  backgroundColor: '#54b762',
                },
              }}
              label={
                <div className="flex gap-3 text-black">
                  <div>{item.icon}</div>
                  <div>{item.label}</div>
                </div>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
       <div className=''>
         <TabPanel value={value} index={0}>
                          <Account />
        </TabPanel>
        <TabPanel value={value} index={1}>
                       <Contact/>
        </TabPanel>
        <TabPanel value={value} index={2}>
                 {/* <EditCompany/> */}

                        <Brand />

        </TabPanel>
        <TabPanel value={value} index={3}>
        <SettingProfile/>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <ChangePassword/>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <EditUser/>
        </TabPanel>
        <TabPanel value={value} index={6}>

        </TabPanel>
       </div>
    </div>
  );
}
