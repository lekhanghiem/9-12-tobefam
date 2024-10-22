'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import LocalSwitcher from './local-switcher';
import CheckToken from '../Pages/user/checkToken';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import User from '../Pages/profile/User';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const drawerWidth = 240;

const Page = () => {

 const Items=[
    {
      "label": "Hỗ trợ",
      "path": "/"
    },
    {
      "label": "Ứng dụng",
      "path": "/areaList"
    },
    {
      "label": "Tin tức",
      "path": "/listproduct"
    },
    {
      "label": "Về chúng tôi",
      "path": "#",
      "submenu": [
        {
          "label": "Hoạt động danh mục",
          "path": "#"
        },
        {
          "label": "Thành tựu",
          "path": "#"
        },
        {
          "label": "Tư vấn miễn phí",
          "path": "/lienhe"
        }
      ]}
    ]

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const t = useTranslations('Headers');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

return <div className="w-full sticky top-0 xl:top-[-87px] z-50">


      <nav className="flex gap-20 w-full px-8 border-2 rounded-full py-1 bg-[#d6e8fe] items-center">
        <Link className="lg:w-3/12 w-8/12 flex justify-center" href="./">
          <Image
            src="/img/header/LogoTobe.svg"
            alt="Logo"
            width={287}
            height={91}
          />
        </Link>
        <div className="pt-3 lg:hidden" >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
<nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
         <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link className="flex w-[70%] mx-auto justify-center py-5" href="./">
          <Image
            src="/img/header/LogoTobe.svg"
            alt="Logo"
            width={287}
            height={91}
          />
        </Link>
      <Divider />
      <nav className="bg-lightblue p-4">
      <div className="flex flex-col ">
        {Items.map((item) => (
          <button
            key={item.path}
            className="relative bg-white text-gray-600 py-3 px-3 rounded-lg hover:text-white hover:bg-green-400 transition"
            onMouseEnter={item.submenu ? handleMouseEnter : undefined}
            onMouseLeave={item.submenu ? handleMouseLeave : undefined}
          >
            <Link
              href={item.path}
              className="font-bold text-4xl px-3 py-2 text-slate-700 hover:text-white "
            >
              {item.label}
            </Link>

            {item.submenu && isDropdownOpen && (
              <div className="absolute left-10 top-16 bg-[#419C70] rounded-md   shadow-lg pb-5">
                {item.submenu.map((sub) => (
                 <div  key={sub.path} className='pt-3'>
                   <Link
                    href={sub.path}
                    className="block px-4 py-2 text-2xl text-gray-700 font-bold hover:text-white whitespace-nowrap "
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
      <div className='pt-20 flex justify-center'>
        {/* <CheckToken/> */}
    <User/>

      </div>
    </nav>
    </Box>
        </Drawer>

      </nav>
        </div>
        <div className="hidden lg:flex w-8/12 justify-center gap-4">
  <nav className="bg-lightblue p-4">
      <div className="flex space-x-8">
        {Items.map((item) => (
          <div
            key={item.path}
            className="relative"
            onMouseEnter={item.submenu ? handleMouseEnter : undefined}
            onMouseLeave={item.submenu ? handleMouseLeave : undefined}
          >
            <Link
              href={item.path}
              className="font-bold text-4xl px-3 py-2 text-slate-700 hover:text-green-500"
            >
              {item.label}
            </Link>
            {item.submenu && isDropdownOpen && (
              <div className="absolute left-10 top-10 bg-[#419C70] opacity-90   shadow-lg pb-5">
                {item.submenu.map((sub) => (
                 <div  key={sub.path} className='pt-3'>
                   <Link
                    href={sub.path}
                    className="block px-4 py-2 text-2xl text-gray-700 font-bold hover:text-white whitespace-nowrap "
                  >
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
        <div>
          <LocalSwitcher />
        </div>
        <div className="hidden lg:flex w-1/12 justify-end">
          <CheckToken />
        </div>
      </nav>

    </div>;
};


export default Page;