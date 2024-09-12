// import {
//   Box,
//   Divider,
//   Drawer,
//   Stack,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import Logo from "~/images/next.svg";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FC } from "react";
// import { Scrollbar } from "../Scrollbar";
// import { SideNavItem } from "./side-nav-item";
// import { items } from "./config";

// const SideNav: FC<any> = (props) => {
//   const { open, onClose } = props;
//   const theme = useTheme();
//   const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
//   const pathname = usePathname();
//   function sanitizePath(pathname: string) {
//     if (pathname.length > 1 && pathname.endsWith("/")) {
//       pathname = pathname.slice(0, -1);
//     }
//     return pathname;
//   }
//   const content = (
//     <Scrollbar
//       sx={
//         {
//           // height: "100vh",
//           // "& .simplebar-content": {
//           //   height: "100%",
//           // },
//           // "& .simplebar-placeholder": {
//           //   height: "auto !important",
//           // },
//           // "& .simplebar-scrollbar:before": {
//           //   background: "#F40074",
//           // },
//         }
//       }
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           // height: "100%",
//         }}
//       >
//         <Box sx={{ mb: 2 }}>
//           <Link href="/">
//             <Box
//               sx={{
//                 alignItems: "center",
//                 cursor: "pointer",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-center",
//                 gap: 2,
//               }}
//             >
//               <Image src={Logo} alt="Site Logo" className="rounded-lg " />
//             </Box>
//           </Link>
//         </Box>
//         <Divider sx={{ borderColor: "#F40074" }} />
//         <Box
//           component="nav"
//           sx={{
//             flexGrow: 1,
//             py: 3,
//           }}
//         >
//           <Stack
//             component="ul"
//             spacing={1}
//             sx={{
//               listStyle: "none",
//               p: 0,
//               m: 0,
//             }}
//           >
//             {items.map((item) => {
//               const sanitizedPath = sanitizePath(pathname);
//               const active = item.path ? sanitizedPath === item.path : false;
//               return (
//                 <SideNavItem
//                   active={active}
//                   icon={item.icon}
//                   key={item.title}
//                   path={item.path}
//                   title={item.title}
//                 />
//               );
//             })}
//           </Stack>
//         </Box>
//       </Box>
//     </Scrollbar>
//   );

//   if (lgUp) {
//     return (
//       // <Drawer
//       //   anchor="left"
//       //   open
//       //   PaperProps={{
//       //     sx: {
//       //       color: "#2f2b3de0",
//       //       width: 280,
//       //       backgroundColor: "rgba(255, 255, 255, 0.7)",
//       //       zIndex: "300 !important",
//       //       top: "100px",
//       //       left: "50px",
//       //       padding: "10px",
//       //       borderRadius: "10px",
//       //     },
//       //   }}
//       //   sx={{ zIndex: "300 !important" }}
//       //   variant="permanent"
//       // >
//       //   {content}
//       // </Drawer>
//       <div className="p-5 md:p-6 rounded-[28px] sm:rounded-[32px] lg:h-[90%] xl:h-[88%] h-full w-[280px]  text-[#2f2b3de0] bg-transparent-paper z-[300]">
//         {content}
//       </div>
//     );
//   }

//   return (
//     <Drawer
//       anchor="left"
//       onClose={onClose}
//       open={open}
//       PaperProps={{
//         sx: {
//           color: "#2f2b3de0",
//           width: 280,
//           backgroundColor: "#F8F9FA",
//           top: "0",
//           padding: 2,
//         },
//       }}
//       sx={{ zIndex: "1200 !important" }}
//       variant="temporary"
//     >
//       {content}
//     </Drawer>
//   );
// };

// export default SideNav;
