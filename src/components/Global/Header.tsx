// 'use client';
// import Head from 'next/head';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'transparent',
//   boxShadow: 'none',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));
// const Header = () => {
//   const [isclick, setisclick] = useState(false);
//   const toggleNavbar = () => {
//     setisclick(!isclick);
//   };
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: 'HOME', href: { pathname: '/', query: { name: 'test' } } },
//     { name: 'BENEFIT', href: '/benefit' },
//     { name: 'SOLUTION', href: '/solution' },
//     {
//       name: 'FOR CONSUMERS',
//       dropdown: true,
//       items: [
//         { name: 'Seek an origin', href: '/seek' },
//         { name: 'Consumer phone application', href: '#' },
//         { name: 'Point of sale', href: '#' },
//         { name: 'Privacy Policy', href: '#' },
//       ],
//     },
//     { name: 'ABOUT US', href: '/about-us' },
//     { name: 'NEWS', href: '/news' },
//     { name: 'CONTACT', href: '/contact' },
//   ];
//   return (
//     <div className="bg-[#012133]">
//       <div className="  sticky top-0 z-50 ">
//         <Head>
//           <title>Trang chủ - EG Fam</title>
//           <meta name="description" content="Trang web của cộng đồng EG Fam" />
//           <meta property="og:title" content="Trang chủ - EG Fam" />
//           <meta
//             property="og:description"
//             content="Trang web của cộng đồng EG Fam"
//           />
//           <meta property="og:type" content="website" />
//         </Head>

//         <div>
//           <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} xl={3}>
//                 <Item>
//                   <div className="  flex justify-center">
//                     <Image
//                       src="/images/HOME/logo.png"
//                       alt=""
//                       width={287}
//                       height={53}
//                     />
//                   </div>
//                 </Item>
//               </Grid>
//               <Grid item xs={12} xl={9}>
//                 <Item>
//                   <div className=" w-full">
//                     <div className="flex flex-col gap-3 ">
//                       <div className="flex xl:flex-row flex-col text-white w-full text-xl justify-end pr-3">
//                         <p className=" ">Tel-icon : +234 81 - 3624 - 379 - 6</p>
//                         <p className="">Email : @gmail.com</p>
//                         <p className=" ">Get Directions</p>
//                       </div>
//                       <div className=" xl:block hidden">
//                         {/* <MenuIcon
//                           sx={{ fontSize: 60, backgroundColor: 'white' }}
//                         /> */}
//                       </div>

//                       <div className="relative  hidden xl:block">
//                         <div className="  h-24 w-full bg-custom-bgmenu   diamond "></div>

//                         <nav className="dark:bg-gray-700 w-full">
//                           <div className="w-full">
//                             <div className="absolute  left-10 top-4">
//                               <ul className="flex font-bold mt-0 text-3xl whitespace-nowrap gap-5 ">
//                                 {menuItems.map((item, index) => (
//                                   <li
//                                     key={index}
//                                     className="font-bold hover:bg-white py-3 rounded-md hover:border-white"
//                                   >
//                                     {item.dropdown ? (
//                                       <div className="dropdown relative">
//                                         <div className="flex gap-1">
//                                           <Link
//                                             href="#"
//                                             className="dark:text-white hover:underline"
//                                           >
//                                             {item.name}
//                                           </Link>
//                                           <div className="pt-1">
//                                             <Image
//                                               src="/images/HOME/arrow1.png"
//                                               alt=""
//                                               width={17}
//                                               height={20}
//                                             />
//                                           </div>
//                                         </div>
//                                         <div className="dropdown-content absolute left-0">
//                                           <ul className="dropdown-menu absolute justify-center bg-white rounded-md px-4 py-1">
//                                             {item.items.map(
//                                               (subItem, subIndex) => (
//                                                 <li
//                                                   key={subIndex}
//                                                   className="font-bold py-2 px-9 hover:bg-[#01fb94] rounded-md"
//                                                 >
//                                                   <Link
//                                                     href={subItem.href}
//                                                     className="text-black"
//                                                   >
//                                                     {subItem.name}
//                                                   </Link>
//                                                 </li>
//                                               )
//                                             )}
//                                           </ul>
//                                         </div>
//                                       </div>
//                                     ) : (
//                                       <Link
//                                         href={item.href}
//                                         className="dark:text-white hover:underline"
//                                       >
//                                         {item.name}
//                                       </Link>
//                                     )}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           </div>
//                         </nav>
//                       </div>
//                     </div>
//                   </div>
//                 </Item>
//               </Grid>
//             </Grid>
//           </Box>
//           <div className="w-full flex lg:flex-row flex-col py-5">
//             <div className="basis-3/12 w-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
