'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Solve from "./lienhe";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";
import { useTranslations } from "next-intl";

const Footer = () => {

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
   border: 'none',
  boxShadow: 'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const t=useTranslations('HomePage')
  return (
    <div className="w-full h-full bg-[#012133]  ">
      <Solve/>
      <div className=" ">
        <div className=" w-full pt-10">
 <FadeDown>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            <div className="flex flex-col gap-10 w-8/12 mx-auto">
            <div className="flex justify-center  " >
                <Image src="/img/header/LogoTobe.svg" alt="" width={200} height={53} className="" />
            </div>
            <div
                className="no-underline text-center hover:text-blue-500 text-[#97c7ff] text-3xl leading-10"
              >
           {t('Blockchain')}
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <div className="grid grid-cols-3   px-2 gap-5">

            <div className="flex flex-col ">
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                href="#"
              >
              {t('Về chúng tôi')}
              </Link>


              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                href="#"
              >
                           {t('Liên hệ')}

              </Link>

              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                href="#"
              >
                            {t('Blog')}

              </Link>
            </div>
            <div className="flex flex-col ">
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                href="#"
              >
                            {t('Hỗ trợ')}

              </Link>
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                href="#"
              >
                                       {t('FAQ')}

              </Link>
            </div>
            <div className="flex flex-col ">
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                href="#"
              >
                              {t('Điều khoản')}

              </Link>
              <Link
                className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                href="#"
              >
                              {t('Chính sách bảo mật')}

              </Link>
            </div>
          </div></Item>
        </Grid>

      </Grid>
    </Box>
 </FadeDown>



        </div>

        <div className="py-5 ">
          <div className="bg-[#FFFFFF] w-11/12 mx-auto  pt-1" />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between py-5  lg:px-20 px-3">
          <FadeLeft className="text-[#97C7FF] flex justify-end text-xl">CopyRight © 2020 - 2024 TOBE FARM. All Rights Reserved.</FadeLeft>
          <div className="">
            <FadeRight className="flex justify-end gap-7 lg:pt-0 pt-4">
              <div className="hover:scale-150">
                <Image src="/img/footer/telegram.svg" alt="/img/footer/telegram.svg" width={25} height={23} />
              </div>
              <div className="hover:scale-150">
                <Image src="/img/footer/tiwtter.svg" alt="/img/footer/tiwtter.svg" width={25} height={23} />
              </div>
              <div className="hover:scale-150">
                <Image src="/img/footer/youtube.svg" alt="/img/footer/youtube.svg" width={25} height={23} />
              </div>
              <div className="hover:scale-150">
                <Image src="/img/footer/facebook.svg" alt="/img/footer/facebook.svg" width={25} height={23} />
              </div>
            </FadeRight>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
