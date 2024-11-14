'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import User from '../../../Pages/profile/User';
import { IoMenu } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";

const drawerWidth = 240;

const MenuMobile = () => {
  const t = useTranslations('All');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState<{ [key: string]: boolean }>({});

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMouseEnter = (label: string) => {
    setDropdownState((prev) => ({ ...prev, [label]: true }));
  };

  const handleMouseLeave = (label: string) => {
    setDropdownState((prev) => ({ ...prev, [label]: false }));
  };

  const Items = [
    { label: 'HOME', path: '/' },
    { label: 'BENEFIT', path: '/benefit' },
    { label: 'SOLUTION', path: '/solution' },
    {
      label: 'FOR CONSUMERS',
      path: '#',
      submenu: [
        { label: 'Seek an origin', path: '/seek' },
        { label: 'Consumer phone application', path: '#' },
        { label: 'Point of sale', path: '#' },
        { label: 'Privacy Policy', path: '#' },
      ],
    },
    { label: 'ABOUT US', path: '#' },
    { label: 'NEWS', path: '#' },
    { label: 'CONTACT', path: '#' },
  ];

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
      >
        {mobileOpen ? <MdOutlineMenuOpen fontSize={50} /> : <IoMenu fontSize={50} />}
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start' }}>
          <Link className="flex w-[70%] mx-auto justify-center py-5" href="/">
            <Image src="/img/header/LogoTobe.svg" alt="Logo" width={287} height={91} />
          </Link>
          <Divider />
          <nav className="bg-lightblue p-4">
            <div className="flex flex-col gap-5">
              {Items.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                >
                  <Link
                    href={item.path}
                    className="font-bold text-4xl px-3 py-2 text-slate-700 hover:text-green-400"
                    onClick={handleDrawerToggle} // Close drawer on click
                  >
                    {item.label}
                  </Link>
                  {item.submenu && dropdownState[item.label] && (
                    <div className="relative bg-[#419C70] rounded-md shadow-lg pb-5 z-50">
                      {item.submenu.map((sub, subIndex) => (
                        <div key={subIndex} className="pt-3">
                          <Link
                            href={sub.path}
                            className="block px-4 py-2 text-4xl text-gray-700 font-bold hover:text-white"
                            onClick={handleDrawerToggle} // Close drawer on submenu click
                          >
                            {sub.label}
                          </Link>
                          {subIndex !== item.submenu.length - 1 && (
                            <div className="bg-white h-[1px]" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-20 flex justify-center">
              <User />
            </div>
          </nav>
        </Box>
      </Drawer>
    </div>
  );
};

export default MenuMobile;
