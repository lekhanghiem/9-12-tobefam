// 'use client';
// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { IoMenu, IoClose } from 'react-icons/io5';
// import LocalSwitcher from '../local-switcher';
// import CheckToken from '@/components/Pages/user/checkToken';

// const Page = () => {
//   const t = useTranslations('Headers');
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMouseEnter = () => setDropdownOpen(true);
//   const handleMouseLeave = () => setDropdownOpen(false);
//   const handleMenuToggle = () => setMenuOpen(!menuOpen);

//   return (
//     <div>
//       <div className="flex lg:flex-row flex-col justify-between bgheader py-3 lg:px-20 px-10 w-full gap-y-3">
//         <nav className="grid grid-cols-3 gap-3 lg:gap-10">
//           {[
//             ['/img/header/Vector.svg', t('Tải ứng dụng')],
//             ['/img/header/Union.svg', t('Thông báo')],
//             ['/img/header/Group1.svg', t('Hỗ trợ')],
//           ].map(([imgSrc, text], index) => (
//             <div key={index} className="flex gap-4 justify-center">
//               <Image
//                 src={imgSrc}
//                 alt="icon"
//                 width={60}
//                 height={60}
//                 className="items-center flex"
//               />
//               <div className="flex items-center">{text}</div>
//             </div>
//           ))}
//         </nav>
//         <nav className="lg:gap-20 gap-10 grid grid-cols-3">
//           {[
//             ['./', '/img/header/Subtract.svg'],
//             ['Thông báo', '/img/header/Group2.svg'],
//             ['Hỗ trợ', '/img/header/Subtract1.svg'],
//           ].map(([url, img], index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center gap-4 lg:block hidden"
//             >
//               <Link href={url}>
//                 <Image src={img} alt="icon" width={60} height={60} />
//               </Link>
//             </div>
//           ))}
//         </nav>
//       </div>

//       <nav className="flex gap-20 w-full px-8 border-2 rounded-full py-1 bg-[#d6e8fe] items-center">
//         <Link className="lg:w-3/12 w-8/12 flex justify-center" href="./">
//           <Image
//             src="/img/header/LogoTobe.svg"
//             alt="Logo"
//             width={287}
//             height={91}
//           />
//         </Link>
//         <div className="pt-3 lg:hidden" onClick={handleMenuToggle}>
//           {menuOpen ? (
//             <IoClose className="w-16 h-16 cursor-pointer" />
//           ) : (
//             <IoMenu className="w-16 h-16 cursor-pointer" />
//           )}
//         </div>
//         <div className="hidden lg:flex w-8/12 justify-center gap-4">
//           {[
//             [t('Hỗ trợ'), '/'],
//             [t('Ứng dụng'), '/areaList'],
//             [t('Tin tức'), '/listproduct'],
//             [t('Về chúng tôi'), '#'],
//           ].map(([title, url]) => (
//             <div
//               key={url}
//               className="relative"
//               onMouseEnter={
//                 title === t('Về chúng tôi') ? handleMouseEnter : undefined
//               }
//               onMouseLeave={
//                 title === t('Về chúng tôi') ? handleMouseLeave : undefined
//               }
//             >
//               <Link
//                 href={url}
//                 className="font-bold rounded-lg px-3 py-2 text-slate-700 font-medium hover:scale-110 hover:text-green-500 text-3xl whitespace-nowrap"
//               >
//                 {title}
//               </Link>

//               {title === t('Về chúng tôi') && isDropdownOpen && (
//                 <div
//                   className="absolute left-24 mt-2 h-[180px] w-80 bg-[#419C70] opacity-70 border border-gray-300 shadow-lg"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {[
//                     [t('Hoạt động danh mục'), '#'],
//                     [t('Thành tựu'), '#'],
//                     [t('Tư vấn miễn phí'), '#'],
//                   ].map(([dropdownTitle, dropdownUrl], index) => (
//                     <React.Fragment key={index}>
//                       <Link
//                         href={dropdownUrl}
//                         className="block px-4 py-2 h-[60px] whitespace-nowrap text-3xl text-gray-700 items-center hover:text-white flex justify-center"
//                       >
//                         {dropdownTitle}
//                       </Link>
//                       {index < 2 && (
//                         <div className="bg-white h-[1px] w-60 mx-auto"></div>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div>
//           <LocalSwitcher />
//         </div>
//         <div className="hidden lg:flex w-1/12 justify-end">
//           <CheckToken />
//         </div>
//       </nav>
//       <nav className={menuOpen ? 'block' : 'hidden'}>
//         {[
//           ['Giới thiệu', '/'],
//           ['Ứng dụng', '/team'],
//           ['Tin tức', '/projects'],
//           ['Về chúng tôi', '#'],
//           ['Đăng nhập', '/login'],
//         ].map(([title, url]) => (
//           <nav key={url} className="lg:hidden">
//             <ul className="bg-[#d6e8fe]">
//               <li>
//                 <Link
//                   href={url}
//                   className="hover:scale-125 rounded-lg text-slate-700 font-medium hover:text-slate-900 text-xl whitespace-nowrap"
//                 >
//                   <span className="hover:scale-125">{title}</span>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Page;
