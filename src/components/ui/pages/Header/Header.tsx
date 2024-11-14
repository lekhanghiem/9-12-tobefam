'use client';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import LocalSwitcher from '../LocalSwitcher';
import CheckToken from '../../../Pages/user/Logout';
import { usePathname } from 'next/navigation';
import Header1 from './Header1';
import MenuMobile from './MenuMobile';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow:'none',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',

}));

const Page = () => {
  const path = usePathname();
const locale = useLocale();
console.log(path)
console.log(locale)
  const t = useTranslations('All');

  const [dropdownState, setDropdownState] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (label: string) => {
    setDropdownState((prev) => ({ ...prev, [label]: true }));
  };

  const handleMouseLeave = (label: string) => {
    setDropdownState((prev) => ({ ...prev, [label]: false }));
  };

  const Items = [
    {
      label: 'HOME',
      path: `/${locale}`,
    },
    {
      label: 'BENEFIT',
      path: `/${locale}/benefit`,
    },
    {
      label: 'SOLUTION',
      path:`/${locale}/solution` ,
    },
    {
      label: 'FOR CONSUMERS',
      path: '#',
      submenu: [
        { label: 'Seek an origin', path: `/${locale}/seek`},
        { label: 'Consumer phone application', path: '#' },
        { label: 'Point of sale', path: '#' },
        { label: 'Privacy Policy', path: '#' },
      ],
    },
     {
      label: 'ABOUT US',
      path: '#',
    },
    {
      label: 'NEWS',
      path: '#',
    },
    {
      label: 'CONTACT',
      path: '#',
    },
  ];

  if (path.includes('/dashboard') || path.includes('/profile') || path.includes('/user')) {
    return null;
  }

  return (
    <div className="w-full bg-[#ffffff] sticky top-0 z-50">
      <Header1 />



      <Box sx={{
        background:'linear-gradient(115.36deg, rgba(12, 244, 250, 0.2) 30%, rgba(64, 119, 247, 0.2) 80.55%, rgba(86, 67, 246, 0.2) 99.86%)',
        borderRadius:'40px'
      }}  >
        <Box sx={{ flexGrow: 1 ,py:2}}>
      <Grid container spacing={1}>
        <Grid size={{ xs:5 ,xl:2   }}>
          <Item>
              <Link className=" w-[200px] h-full flex justify-start px-3" href="./">
          <Image src="/img/header/LogoTobe.svg" alt="Logo" width={200} height={91}
          className='w-[200px] h-full'
          />
        </Link>
          </Item>
        </Grid>
        <Grid size={{ xs:5 ,xl:8   }}
         >
          <Item

          >
              <Box  sx={{
    display: {
      xs: 'none',   // Hide on extra-small screens
      xl: 'flex',   // Display as flex on extra-large screens and above
    },
  }}
              className="bg-lightblue p-4 ">
            <div className="flex ">
              {Items.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                  className="relative "
                >
                  <Link
                    href={item.path}
                    className={`font-bold text-3xl px-3 py-2 whitespace-nowrap ${
                      path === item.path ? 'text-green-500' : 'text-black'
                    } hover:text-green-500 `}
                  >
                   {t(item.label)}
                  </Link>
                  {item.submenu && dropdownState[item.label] && (
                    <ul className=" absolute rounded-xl left-10 top-10 bg-[#cffdfe] shadow-xl  p-5">
                      {item.submenu.map((sub, subIndex) => (
                        <li key={subIndex}
                        className={` block w-full  hover:bg-custom-dropdown  hover:shadow-xl mx-auto py-2 text-2xl font-bold  rounded-xl pt-3 whitespace-nowrap  ${
                              path === sub.path ? 'text-black' : 'text-gray-600'
                            } px-5 `}
                        >
                          <Link
                            href={sub.path}

                          >
                   {t(sub.label)}
                          </Link>

                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Box>
          </Item>
        </Grid>
        <Grid size={{ xs:2 ,xl:2  }}>
          <Item>
                <Box
                   sx={{
    display: {
      xs: 'none',
      xl: 'flex',
    },
    gap:1
  }} >
        <div className='flex items-center '>
          <LocalSwitcher />
        </div>
        <div className="">
          <CheckToken />
        </div>
        </Box>
        <Box
           sx={{
    display: {
      xs: 'flex',
      xl: 'none',
    },
  }} className='  justify-end'>
<MenuMobile/>

        </Box>
          </Item>
        </Grid>

      </Grid>
    </Box>




      </Box>
    </div>
  );
};

export default Page;
