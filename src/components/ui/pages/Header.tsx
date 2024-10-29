'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import LocalSwitcher from './local-switcher';
import CheckToken from '../../Pages/user/CheckToken';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import User from '../../Pages/profile/User';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

const Page = () => {
  const path = usePathname();
  const t = useTranslations('Headers');

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const Items = [
    {
      label: 'Hỗ trợ',
      path: '/vi/',
    },
    {
      label: 'Ứng dụng',
      path: '/vi/areaList',
    },
    {
      label: 'Tin tức',
      path: '/vi/listproduct',
    },
    {
      label: 'Về chúng tôi',
      path: '#',
      submenu: [
        { label: 'Hoạt động danh mục', path: '#' },
        { label: 'Thành tựu', path: '#' },
        { label: 'Tư vấn miễn phí', path: '/lienhe' },
      ],
    },
  ];

  if (path.includes('/vi/dashboard') || path.includes('/vi/profile')) {
    return null;
  }

  return (
    <div className="w-full bg-[#f3f4f6] sticky top-0 z-50">
      <div className="flex lg:flex-row flex-col justify-between bgheader py-3 lg:px-20 px-10 w-full gap-y-3">
        <nav className="grid grid-cols-3 gap-3 lg:gap-10">
          {[
            ['/img/header/Vector.svg', t('Tải ứng dụng')],
            ['/img/header/Union.svg', t('Thông báo')],
            ['/img/header/Group1.svg', t('Hỗ trợ')],
          ].map(([imgSrc, text], index) => (
            <div key={index} className="flex gap-4 justify-center hover:scale-110">
              <Image src={imgSrc} alt="icon" width={30} height={30} />
              <div className="flex items-center">{text}</div>
            </div>
          ))}
        </nav>

        {/* Desktop Navigation */}
        <nav className="lg:gap-20 gap-10 grid grid-cols-3 hidden lg:flex">
          {[
            ['./', '/img/header/Subtract.svg'],
            ['Thông báo', '/img/header/Group2.svg'],
            ['Hỗ trợ', '/img/header/Subtract1.svg'],
          ].map(([url, img], index) => (
            <div key={index} className="items-center gap-4 hover:scale-110">
              <Link href={url}>
                <Image src={img} alt="icon" width={30} height={30} />
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Logo and Drawer (Mobile Menu) */}
      <nav className="flex gap-20 w-full px-8 border-2 rounded-full py-1 bg-[#d6e8fe] items-center">
        <Link className="lg:w-3/12 w-8/12 flex justify-center" href="./">
          <Image src="/img/header/LogoTobe.svg" alt="Logo" width={200} height={91} />
        </Link>
        <div className="pt-3 lg:hidden">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize="large" />
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
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              <Link className="flex w-[70%] mx-auto justify-center py-5" href="./">
                <Image src="/img/header/LogoTobe.svg" alt="Logo" width={287} height={91} />
              </Link>
              <Divider />
              <nav className="bg-lightblue p-4">
                <div className="flex flex-col">
                  {Items.map((item, index) => (
                    <button
                      key={index}
                      className="relative bg-white text-gray-600 py-3 px-3 rounded-lg hover:text-white hover:bg-green-400 transition"
                      onMouseEnter={item.submenu ? handleMouseEnter : undefined}
                      onMouseLeave={item.submenu ? handleMouseLeave : undefined}
                    >
                      <Link href={item.path} className="font-bold text-4xl px-3 py-2 text-slate-700 hover:text-white whitespace-nowrap">
                        {item.label}
                      </Link>
                      {item.submenu && isDropdownOpen && (
                        <div className="absolute left-10 top-16 bg-[#419C70] rounded-md shadow-lg pb-5">
                          {item.submenu.map((sub, subIndex) => (
                            <div key={subIndex} className="pt-3">
                              <Link
                                href={sub.path}
                                className="block px-4 py-2 text-2xl text-gray-700 font-bold hover:text-white whitespace-nowrap"
                              >
                                {sub.label}
                              </Link>
                              <div className="bg-white h-[1px] w-5/6 mx-auto" />
                            </div>
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="pt-20 flex justify-center">
                  <User />
                </div>
              </nav>
            </Box>
          </Drawer>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-8/12 justify-center gap-4">
          <nav className="bg-lightblue p-4">
            <div className="flex space-x-8">
              {Items.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={item.submenu ? handleMouseEnter : undefined}
                  onMouseLeave={item.submenu ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.path}
                    className={`font-bold text-4xl px-3 py-2 ${
                      path === item.path ? 'text-green-500' : 'text-black'
                    } hover:text-green-500`}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && isDropdownOpen && (
                    <div className="absolute left-10 top-10 bg-[#419C70] shadow-lg pb-3">
                      {item.submenu.map((sub, subIndex) => (
                        <div key={subIndex} className="pt-3">
                          <Link
                            href={sub.path}
                            className={`block px-4 py-2 text-2xl font-bold ${
                              path === sub.path ? 'text-white' : 'text-gray-700'
                            } hover:text-white`}
                          >
                            {sub.label}
                          </Link>
                          {subIndex !== item.submenu.length - 1 && (
                            <div className="bg-white h-[1px] w-5/6 mx-auto" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <LocalSwitcher />
        <div className="hidden lg:flex w-1/12 justify-end">
          <CheckToken />
        </div>
      </nav>
    </div>
  );
};

export default Page;
