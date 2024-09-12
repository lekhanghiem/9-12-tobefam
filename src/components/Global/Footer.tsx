// "use client";

// import FadeDown from "@/motion/FadeDown";
// import FadeUp from "@/motion/FadeUp";
// import {
//   IconBrandFacebook,
//   IconBrandTelegram,
//   IconBrandX,
//   IconBrandYoutube,
// } from "@tabler/icons-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Footer = () => {
//   const pathname = usePathname();
//   return (
//     <>
//       {!pathname.includes("dashboard") ? (
//         <footer>
//           <div className="bg-black bg-gradient-footer relative bg-no-repeat bg-cover bg-center">
//             <div className="container section-py">
//               <div className="grid grid-cols-12 gap-2">
//                 <div className="col-span-12 xl:col-span-3">
//                   <FadeUp>
//                     <h2 className="section-title gap-mb-24">
//                       <Link href="/" className="text-white">
//                         <Image
//                           src={"null"}
//                           width={250}
//                           height={60}
//                           alt={`Logo`}
//                           className="mx-auto max-w-64 sm:max-w-none"
//                         />
//                       </Link>
//                     </h2>
//                   </FadeUp>
//                 </div>
//                 <div className="col-span-12 lg:col-span-9 xl:col-span-7">
//                   <div className="grid grid-cols-12 lg:gap-2 gap-7">
//                     <div className="col-span-4 lg:col-span-3">
//                       <FadeDown>
//                         <h4 className="my-text-24 text-primary-0 gap-mb-40">
//                           Company
//                         </h4>
//                       </FadeDown>
//                       <FadeUp>
//                         <ul className="grid lg:gap-3 md:gap-2.5 gap-1.5 list-inside list-none text-primary ">
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/vision"
//                             >
//                               Vision
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/mission"
//                             >
//                               Mission
//                             </Link>
//                           </li>

//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/media-kit"
//                             >
//                               Media Kit
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/career"
//                             >
//                               Careers
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/contact-us"
//                             >
//                               Contact Us
//                             </Link>
//                           </li>
//                         </ul>
//                       </FadeUp>
//                     </div>
//                     <div className="col-span-4 lg:col-span-3">
//                       <FadeDown>
//                         <h4 className="my-text-24 text-primary-0 gap-mb-40">
//                           Individuals
//                         </h4>
//                       </FadeDown>
//                       <FadeUp>
//                         <ul className="grid lg:gap-3 md:gap-2.5 gap-1.5 list-inside list-none text-primary ">
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="#"
//                             >
//                               Join here
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/now-coin"
//                             >
//                               NOW coin
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/staking"
//                             >
//                               Staking
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/environment"
//                             >
//                               Environment
//                             </Link>
//                           </li>
//                         </ul>
//                       </FadeUp>
//                     </div>
//                     <div className="col-span-4 lg:col-span-3">
//                       <FadeDown>
//                         <h4 className="my-text-24 text-primary-0 gap-mb-40">
//                           Legal
//                         </h4>
//                       </FadeDown>
//                       <FadeUp>
//                         <ul className="grid lg:gap-3 md:gap-2.5 gap-1.5 list-inside list-none text-primary ">
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/disclaimer"
//                             >
//                               Disclaimer
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/terms-conditions"
//                             >
//                               Terms of Service
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/privacy-policy"
//                             >
//                               Privacy Policy
//                             </Link>
//                           </li>
//                         </ul>
//                       </FadeUp>
//                     </div>
//                     <div className="col-span-6 lg:col-span-3">
//                       <FadeDown>
//                         <h4 className="my-text-24 text-primary-0 gap-mb-40">
//                           Community
//                         </h4>
//                       </FadeDown>
//                       <FadeUp>
//                         <ul className="grid lg:gap-3 md:gap-2.5 gap-1.5 list-inside list-none text-primary ">
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/ecosystem"
//                             >
//                               Ecosystem
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/hackathon"
//                             >
//                               Hackathon
//                             </Link>
//                           </li>
//                           <li className="hover:translate-x-2 my-transition">
//                             <Link
//                               className="my-text-16 hover:text-primary-1 text-primary-0 my-transition"
//                               href="/blog"
//                             >
//                               Blog
//                             </Link>
//                           </li>
//                         </ul>
//                       </FadeUp>
//                     </div>
//                     <div className="col-span-6 lg:col-span-3 lg:hidden flex flex-col gap-3">
//                       <FadeDown>
//                         <h4 className="my-text-24 text-primary-0 gap-mb-40">
//                           {" "}
//                           Get Connected
//                         </h4>
//                       </FadeDown>
//                       <FadeUp className="flex flex-wrap gap-3">
//                         <Link
//                           href="https://www.facebook.com/NOWblockchain?mibextid=LQQJ4d"
//                           className="btn-outline-round border-primary-0 text-primary-0 "
//                           aria-label="socal-facebook"
//                           target="blank"
//                         >
//                           <IconBrandFacebook className="xxl:w-6 xxl:h-6 w-5 h-5 " />
//                         </Link>
//                         <Link
//                           href="https://www.youtube.com/@NOWBlockchain"
//                           className="btn-outline-round border-primary-0 text-primary-0 "
//                           aria-label="socal-instagram"
//                           target="blank"
//                         >
//                           <IconBrandYoutube className="xxl:w-6 xxl:h-6 w-5 h-5" />
//                         </Link>
//                         <Link
//                           href="https://twitter.com/nowblockchainx?s=21&t=_sFF4qF8bFhkNCmSKnt2Kg"
//                           className="btn-outline-round border-primary-0 text-primary-0 "
//                           aria-label="socal-twitter"
//                           target="blank"
//                         >
//                           <IconBrandX className="xxl:w-6 xxl:h-6 w-5 h-5" />
//                         </Link>
//                         <Link
//                           href="https://t.me/nowblockchain"
//                           className="btn-outline-round border-primary-0 text-primary-0 "
//                           aria-label="socal-linkedin"
//                           target="blank"
//                         >
//                           <IconBrandTelegram className="xxl:w-6 xxl:h-6 w-5 h-5" />
//                         </Link>
//                       </FadeUp>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="hidden lg:block lg:mt-0 lg:col-span-3 xl:col-span-2">
//                   <div className="flex flex-col gap-3">
//                     <FadeDown>
//                       <h4 className="my-text-24 text-primary-0 gap-mb-40">
//                         {" "}
//                         Get Connected
//                       </h4>
//                     </FadeDown>
//                     <FadeUp className="flex flex-wrap gap-3 text-primary-0">
//                       <Link
//                         href="https://www.facebook.com/NOWblockchain?mibextid=LQQJ4d"
//                         className="btn-outline-round border-primary-0 text-primary-0 "
//                         aria-label="socal-facebook"
//                         target="blank"
//                       >
//                         <IconBrandFacebook className="xxl:w-6 xxl:h-6 w-5 h-5" />
//                       </Link>
//                       <Link
//                         href="https://www.youtube.com/@NOWBlockchain"
//                         className="btn-outline-round border-primary-0 text-primary-0 "
//                         aria-label="socal-instagram"
//                         target="blank"
//                       >
//                         <IconBrandYoutube className="xxl:w-6 xxl:h-6 w-5 h-5" />
//                       </Link>
//                       <Link
//                         href="https://twitter.com/nowblockchainx?s=21&t=_sFF4qF8bFhkNCmSKnt2Kg"
//                         className="btn-outline-round border-primary-0 text-primary-0 "
//                         aria-label="socal-twitter"
//                         target="blank"
//                       >
//                         <IconBrandX className="xxl:w-6 xxl:h-6 w-5 h-5" />
//                       </Link>
//                       <Link
//                         href="https://t.me/nowblockchain"
//                         className="btn-outline-round border-primary-0 text-primary-0 "
//                         aria-label="socal-linkedin"
//                         target="blank"
//                       >
//                         <IconBrandTelegram className="xxl:w-6 xxl:h-6 w-5 h-5" />
//                       </Link>
//                     </FadeUp>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       ) : null}
//     </>
//   );
// };

// export default Footer;
