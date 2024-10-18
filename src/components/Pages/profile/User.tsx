'use client'
import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, Typography, Box, Divider, IconButton } from '@mui/material';
import { Person, List, Logout } from '@mui/icons-material';
import Link from 'next/link'

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const userString = localStorage.getItem('user');

const profile = userString ? JSON.parse(userString) : null;
  return (
    <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <div onClick={handleClick} className='flex items-center gap-1 hover:bg-gray-400 rounded-xl px-3'>

        <IconButton >
        <Avatar alt="/img/profile/user.svg" src="/img/profile/user.svg" />
      </IconButton>
     <div className='flex-col'>
       <Typography variant="body1" fontWeight="bold">
        {profile?.user?.username}123
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Manufacturer
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
        PaperProps={{
          elevation: 3,
          sx: { width: 200, mt: 1 },
        }}
      >
        <Typography sx={{ px: 2, py: 1.5, color: 'gray' }}>Welcome</Typography>

        <Link href='/vi/profile'>
        <MenuItem onClick={handleClose}>

      <div>
            <Person  /> My profile
      </div>
        </MenuItem>
          </Link>

        <MenuItem onClick={handleClose}>
          <List sx={{ mr: 1 }} /> Orders
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>
          <Logout sx={{ mr: 1 }} /> Log out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
