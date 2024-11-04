'use client';

import React, { useState, useEffect, useContext } from 'react';
import { useLocale } from 'next-intl';
import { Avatar, Menu, MenuItem, Typography, Box, Divider, IconButton } from '@mui/material';
import { Person, List, Logout } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';  // Correct import for Link component
import { SearchContext } from '@/context/AppContext';
import axiosIns from '../../../store/api/axiosIns';

const LogoutButton = () => {
  const router = useRouter();

  const [hasToken, setHasToken] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
const [profile, setProfile] = useState<any | null>(null);

useEffect(() => {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setProfile(JSON.parse(storedUser));
    } else {
      console.warn("No user found in localStorage");
    }
  } catch (error) {
    console.error("Failed to parse user data:", error);
    setProfile(null); // Reset profile in case of error
  }
}, []);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setHasToken(!!token);
    const handleStorageChange = () => {
      const token = localStorage.getItem('accessToken');
      setHasToken(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axiosIns.post('/account/logout', {});
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      // localStorage.removeItem('userAbilities');
      toast.success(response?.data?.message || 'Đăng xuất thành công');
      setHasToken(false);  // Update state to hide the button
      router.push(`/`);  // Redirect to login page
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error);
      toast.error('Đã xảy ra lỗi khi đăng xuất.');
    }
  };

  return hasToken ? (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <div onClick={handleClick} className="flex items-center gap-1 hover:bg-gray-400 rounded-xl px-3">
        <IconButton>
          <Avatar alt="User Avatar" src="/img/profile/user.svg" />
        </IconButton>
        <div className="flex-col">
          <Typography variant="body1" fontWeight="bold">
            {profile?.username}
          </Typography>
          <Typography variant="caption" color="text.secondary">
         {profile?.role_id === 1 ? (
  <div>Producer</div>
) : profile?.role_id === 2 ? (
  <div>123</div>
) : (
  <div>admin</div>
)}
          </Typography>
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{ elevation: 3, sx: { width: 200, mt: 1 } }}
      >
        <Typography sx={{ px: 2, py: 1.5, color: 'gray' }}>Welcome</Typography>

        <MenuItem onClick={handleClose}>
          <Link href='/profile'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Person /> My Profile
            </Box>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <List sx={{ mr: 1 }} /> Orders
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout}>
          <Logout sx={{ mr: 1 }} /> Log out
        </MenuItem>
      </Menu>
    </Box>
  ) : (

<div>
  <Link href="/login">
    <Image
      className="hover:scale-125"
      src="/img/header/Groupuser.svg"
      alt="User Icon"
      width={52}
      height={52}
      priority
    />
  </Link>
</div>
  );
};

export default LogoutButton;
