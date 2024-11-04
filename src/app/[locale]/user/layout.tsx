'use client';
import React, { useState } from 'react';
import { Divider, IconButton } from '@mui/material';
import { MdOutlineMenuOpen } from 'react-icons/md';
import Link from 'next/link';
import CheckToken from '../../../components/Pages/user/Logout';
import LocalSwitcher from '@/components/ui/pages/LocalSwitcher';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { FaHome, FaProductHunt } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import FadeRight from '@/motion/FadeRight';
import FadeLeft from '@/motion/FadeLeft';

import Image from 'next/image'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  height: '100%',
  boxShadow: 'none',
  display: 'flex',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Dashboard = ({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) => {
  const [isOpen, setIsOpen] = useState(false);

    const tabs = [
    { id: 'profile', label: 'Trang chủ', href: '/user/', icon: <FaHome /> },
    { id: 'dashboard', label: 'Loại sản phẩm', href: '/user/listproduct', icon: <FaProductHunt /> },
    { id: 'settings', label: 'Quản lý tem', href: '/user/stampManegement', icon: <IoQrCodeOutline /> },
  ];
  return (
    <div className="relative h-full bg-gray-100 ">
      <Box
        sx={{
          flexGrow: 1,
          mx: 'auto',
          py: 2,
          boxShadow: 1,
          px: 3,
          background: 'linear-gradient(115.36deg, rgba(12, 244, 250, 0.2) 33.92%, rgba(64, 119, 247, 0.2) 80.55%, rgba(86, 67, 246, 0.2) 99.86%)'
        }}
      >
        <Grid container spacing={0} columns={12}>
          <Grid size={{ xs: 6, md: 3 }}>
            <Item>
              <div className="flex items-center justify-start">
                <IconButton
                  color="inherit"
                  aria-label="toggle drawer"
                  onMouseEnter={() => setIsOpen(true)}
                >
                  <MdOutlineMenuOpen style={{ fontSize: '25px', color: 'green' }} />
                </IconButton>
                <Link href='/' className='text-4xl text-green-400 font-bold'>Tobe farm</Link>
              </div>
            </Item>
          </Grid>
          <Grid size={{ xs: 1, md: 6 }}>
            <Item
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <div className='text-4xl font-bold text-green-500'>
                QR bảo vệ thương hiệu - Nông sản chất lượng, niềm tin bền lâu!
              </div>
            </Item>
          </Grid>
          <Grid size={{ xs: 5, md: 3 }}>
            <Item className='flex items-center justify-end gap-3'>
              <div className='md:flex hidden'>
                <LocalSwitcher />
              </div>
              <div>
                <CheckToken />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {isOpen && (
        <>
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>

          {/* Sidebar as overlay */}
          <aside
            className="fixed top-0 left-0 h-full w-[40%] bg-white md:w-[20%] p-5 z-20 shadow-lg"
            onMouseLeave={() => setIsOpen(false)} // Close the drawer when mouse leaves
          >
            <nav className="mt-6">
              <ul className="flex flex-col space-y-1 text-sm font-medium text-gray-500">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <Link href={tab.href} passHref>
                      <button
                        onClick={() => setIsOpen(false)} // Close menu after selecting a tab
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full hover:bg-green-300`}
                      >
                        <div className="flex items-center gap-3 text-2xl text-black font-bold">
                          <div>{tab.icon}</div>
                          <div>{tab.label}</div>
                        </div>
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}

      {/* Main content */}
      <main className=" h-full w-full">
        {children}
      </main>
      <footer>
        <div className='bg-[#0a1f30]'>
          <div className="flex flex-col lg:flex-row lg:justify-between py-5 lg:px-20 px-3">
            <FadeLeft className="text-[#97C7FF] flex justify-end text-2xl">
              CopyRight © 2020 - 2024 TOBE FARM. All Rights Reserved.
            </FadeLeft>
            <FadeRight className="flex justify-end gap-7 lg:pt-0 pt-4">
              {['telegram', 'twitter', 'youtube', 'facebook'].map((platform) => (
                <IconButton key={platform} className="hover:scale-150">
                  <Image
                    src={`/img/footer/${platform}.svg`}
                    alt={platform}
                    width={45}
                    height={43}
                    priority
                  />
                </IconButton>
              ))}
            </FadeRight>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
