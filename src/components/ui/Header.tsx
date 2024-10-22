'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';
import LocalSwitcher from './local-switcher';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import CheckToken from '../Pages/user/checkToken';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

const Page = () => {
  const Items = [
    { label: 'Hỗ trợ', path: '/' },
    { label: 'Ứng dụng', path: '/areaList' },
    { label: 'Tin tức', path: '/listproduct' },
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

  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const t = useTranslations('Headers');

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/dashboard') || path.includes('/vi/profile')) {
      setShouldRender(false);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="w-full sticky top-0 xl:top-[-87px] z-50">
      {/* Header Section */}
      <div className="flex lg:flex-row flex-col justify-between bgheader py-3 lg:px-20 px-10 gap-y-3">
        <nav className="grid grid-cols-3 gap-3 lg:gap-10">
          {[
            ['Tải ứng dụng', '/img/header/Vector.svg'],
            ['Thông báo', '/img/header/Union.svg'],
            ['Hỗ trợ', '/img/header/Group1.svg'],
          ].map(([text, img], index) => (
            <div key={index} className="flex gap-4 justify-center">
              <Image src={img} alt="icon" width={60} height={60} />
              <div className="flex items-center">{t(text)}</div>
            </div>
          ))}
        </nav>

        {/* Secondary Nav */}
        <nav className="lg:gap-20 gap-10 grid grid-cols-3">
          {[
            ['./', '/img/header/Subtract.svg'],
            ['Thông báo', '/img/header/Group2.svg'],
            ['Hỗ trợ', '/img/header/Subtract1.svg'],
          ].map(([url, img], index) => (
            <div key={index} className="lg:block hidden  items-center justify-center gap-4">
              <Link href={url}>
                <Image src={img} alt="icon" width={60} height={60} />
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Navigation */}
      <nav className="flex gap-20 w-full px-8 border-2 rounded-full py-1 bg-[#d6e8fe] items-center">
        <Link className="lg:w-3/12 w-8/12 flex justify-center" href="./">
          <Image src="/img/header/LogoTobe.svg" alt="Logo" width={287} height={91} />
        </Link>

        {/* Mobile Drawer Toggle */}
        <div className="pt-3 lg:hidden">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              <Link href="./" className="flex w-[70%] mx-auto justify-center py-5">
                <Image src="/img/header/LogoTobe.svg" alt="Logo" width={287} height={91} />
              </Link>
              <Divider />
              <nav className="bg-lightblue p-4">
                <div className="flex flex-col">
                  {Items.map((item, index) => (
                    <button
                      key={index}
                      className="bg-white text-gray-600 py-3 px-3 rounded-lg hover:bg-green-400 transition"
                      onMouseEnter={item.submenu ? handleMouseEnter : undefined}
                      onMouseLeave={item.submenu ? handleMouseLeave : undefined}
                    >
                      <Link href={item.path} className="font-bold text-4xl">
                        {item.label}
                      </Link>

                      {item.submenu && isDropdownOpen && (
                        <div className="absolute bg-[#419C70] rounded-md shadow-lg pb-5">
                          {item.submenu.map((sub, subIndex) => (
                            <div key={subIndex} className="pt-3">
                              <Link href={sub.path} className="block text-2xl font-bold">
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
              </nav>
            </Box>
          </Drawer>
        </div>

        <div className="hidden lg:flex w-8/12 justify-center gap-4">
          <nav className="bg-lightblue p-4">
            <div className="flex space-x-8">
              {Items.map((item, index) => (
                <div key={index} className="relative">
                  <Link href={item.path} className="font-bold text-4xl">
                    {item.label}
                  </Link>
                  {item.submenu && isDropdownOpen && (
                    <div className="absolute bg-[#419C70] shadow-lg pb-5">
                      {item.submenu.map((sub, subIndex) => (
                        <div key={subIndex} className="pt-3">
                          <Link href={sub.path} className="block text-2xl font-bold">
                            {sub.label}
                          </Link>
                          <div className="bg-white h-[1px] w-5/6 mx-auto" />
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
        <div className="hidden lg:flex">
          <CheckToken />
        </div>
      </nav>
    </div>
  );
};

export default Page;
