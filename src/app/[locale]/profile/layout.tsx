'use client';
import React, { Children } from 'react';
import { FaHome, FaProductHunt, FaUsers, FaChartLine, FaBullhorn, FaQuestionCircle } from 'react-icons/fa';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
const Dashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };
const items = [
  { name: 'Home', icon: <FaHome />, href: './' },
  { name: 'Area list', icon: <FaProductHunt />, href: './areaList' },
  { name: 'Product', icon: <FaUsers />, href: './listproduct' },
  { name: 'Thông tin tài khoản', icon: <FaHome />, href: './profile' },
  { name: 'Thiết lập', icon: <FaChartLine />, href: '#' },
  { name: 'Đổi mật khẩu', icon: <FaBullhorn />, href: '#' },
];

  return (

    <div className="flex h-full bg-gray-100">

 <aside className={`h-screen   bg-white ${ isOpen===true? 'w-[300px]':'w-[70px]'}`} >
        <div className="flex items-center justify-between w-full   px-4 py-5 rounded-lg transition">
          <div className="flex items-center  px-5">
             <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'block' } }}
          >
            {
              isOpen===true?
               <MdOutlineMenuOpen   style={{ fontSize: '25px' }} />:
              <MdOutlineMenu   style={{ fontSize: '25px' }} />
            }
          </IconButton>
             <span className={`text-4xl font-bold ${ isOpen===true? 'opacity-100':'opacity-0'}`}><Link href='profile'>Profile</Link>  <span className={`text-sm text-gray-400 pt-5 ${ isOpen===true? 'opacity-100':'opacity-0'}`}>  v.01</span></span>

          </div>
        </div>
        <Divider />

        <nav className="mt-6  px-5">
          {items.map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-between w-full mx-auto px-4 py-5 bg-white text-gray-600 rounded-lg hover:text-white hover:bg-purple-600 transition"
            >
              <Link href={item.href}> <div className="flex items-center  gap-3 text-2xl">
                <span>{item.icon}</span>
                <span className={ `text-xl font-medium whitespace-nowrap ${isOpen=== true ? 'opacity-100' : 'opacity-0'}`}>{item.name}</span>
              </div></Link>
            </button>
          ))}
        </nav>

      </aside>
      <main className="flex-1 p-10  h-[100%] py-5 ">
        <div className=' w-full h-full bg-white shadow-md rounded-xl'>

 <div className='w-full h-[400px] relative '>
   <div className='absolute bottom-20 right-20'>
  <Button
    color="secondary"
    sx={{
      border: '1px solid #A303A0',
      bgcolor:'white'
    }}
  >
    Edit Cover Photo
  </Button>
</div>
<Image src='/img/profile/img.png'alt=' /img/profile/img.png' width={10000000} height={4000} className='h-full'/>
  <Image src='/img/profile/user.svg'alt='/img/profile/user.svg' width={179} height={179} className='absolute left-20 bottom-[-50px]'/>
          <div className='text-4xl  absolute bottom-[-80px] text-[#A303A0] left-40'>

          </div>

  </div>
 <div className='flex justify-end mr-5 pt-5'>
  <Button
    color="secondary"
    sx={{
      border: '1px solid #A303A0',
    }}
  >
    Edit Profile
  </Button>
</div>
        <div className='pt-5'>{children}</div>

      </div>


      </main>
    </div>
  );
};

export default Dashboard;
