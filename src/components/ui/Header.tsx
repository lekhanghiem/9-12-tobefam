'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Image from 'next/image';

import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import LocalSwitcher from './local-switcher';
import CheckToken from '../Pages/user/checkToken';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
type Anchor = 'right';
const Page = () => {
  const t = useTranslations('Headers');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
 const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
     <Box


      sx={{ width:"250px" ,height:'100vh' ,backgroundColor:'#7bffd76a'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List

      >
        {['Hổ trợ', 'Tin tức', 'Ứng dụng', 'về chúng tôi','Đăng nhập'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton

            >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              {/* <ListItemText primary={text} /> */}
              <Link href='#' >{text}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );
  return (
    <div className="w-full sticky top-0 xl:top-[-87px] z-50">
      <div className="flex lg:flex-row flex-col justify-between bgheader py-3 lg:px-20 px-10 w-full gap-y-3">
        <nav className="grid grid-cols-3 gap-3 lg:gap-10">
          <div className="flex gap-4 justify-center">
            <div>
              <Image
                src="/img/header/Vector.svg"
                alt="err"
                width={60}
                height={60}
                className="items-center flex"
              />
            </div>
            <div className="flex items-center"> {t('Tải ứng dụng')}</div>
          </div>
          <div className="flex gap-4 justify-center">
            <div>
              <Image
                src="/img/header/Union.svg"
                alt="err"
                width={60}
                height={60}
                className="items-center flex"
              />
            </div>
            <div className="flex items-center"> {t('Thông báo')}</div>
          </div>
          <div className="flex gap-4 justify-center">
            <div>
              <Image
                src="/img/header/Group1.svg"
                alt="err"
                width={60}
                height={60}
                className="items-center flex"
              />
            </div>
            <div className="flex items-center"> {t('Hỗ trợ')}</div>
          </div>
        </nav>
        <nav className="lg:gap-20 gap-10 grid grid-cols-3">
          {[
            ['./', '/img/header/Subtract.svg'],
            ['Thông báo', '/img/header/Group2.svg'],
            ['Hỗ trợ', '/img/header/Subtract1.svg'],
          ].map(([url, img]) => (
            <div
              key={img}
              className="flex items-center justify-center gap-4  lg:block hidden"
            >
              <Link href={url}>
                <Image src={img} alt={img} width={60} height={60} />
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <nav className="flex gap-20 w-full px-8 border-2 rounded-full py-1 bg-[#d6e8fe] items-center">
        <Link className="lg:w-3/12 w-8/12 flex justify-center" href="./">
          <Image
            src="/img/header/LogoTobe.svg"
            alt="Logo"
            width={287}
            height={91}
          />
        </Link>
            <div>
      <Button className='lg:hidden' onClick={toggleDrawer('right', true)}>  <MenuIcon  sx={{fontSize:'40px',color:'black'}}/></Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>

        <div className="hidden lg:flex w-8/12 justify-center gap-4">
          {[
            [t('Hỗ trợ'), '/'],
            [t('Ứng dụng'), '/areaList'],
            [t('Tin tức'), '/listproduct'],
            [t('Về chúng tôi'), '#'],
          ].map(([title, url]) => (
            <div
              key={url}
              className="relative"
              onMouseEnter={
                title === t('Về chúng tôi') ? handleMouseEnter : undefined
              }
              onMouseLeave={
                title === t('Về chúng tôi') ? handleMouseLeave : undefined
              }
            >
              <Link
                href={url}
                className="font-bold rounded-lg px-3 py-2 text-slate-700 font-medium hover:scale-110 hover:text-green-500 text-3xl whitespace-nowrap"
              >
                {title}
              </Link>

              {title === t('Về chúng tôi') && isDropdownOpen && (
                <div
                  className="absolute left-24 mt-2 h-[180px] w-80 bg-[#419C70] opacity-70 border border-gray-300  shadow-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 h-[60px] whitespace-nowrap text-3xl text-gray-700 items-center hover:text-white flex justify-center  "
                  >
                    {t('Hoạt động danh mục')}
                  </Link>
                  <div className="bg-white h-[1px] w-60 mx-auto"></div>
                  <Link
                    href="#"
                    className="block px-4 py-2 h-[60px] whitespace-nowrap text-3xl text-gray-700 items-center hover:text-white flex justify-center  "
                  >
                    {t('Thành tựu')}
                  </Link>
                  <div className="bg-white h-[1px] w-60 mx-auto"></div>
                  <Link
                    href="/lienhe"
                    className="block px-4 py-2 h-[60px] whitespace-nowrap text-3xl text-gray-700 items-center hover:text-white flex justify-center  "
                  >
                    {t('Tư vấn miễn phí')}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <LocalSwitcher />
        </div>
        <div className="hidden lg:flex w-1/12 justify-end">
          <CheckToken />
        </div>
      </nav>

    </div>
  );
};

export default Page;
