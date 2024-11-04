'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Solve from "./lienhe";
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Divider, IconButton } from '@mui/material';
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation'
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: '#1A2027',
    }),
  }));
const Footer = () => {
  const t = useTranslations('HomePage');
  const path = usePathname()

   if (path.includes('/dashboard') || path.includes('/profile')|| path.includes('/user')) {
    return null;
  }


  return (
    <div className="w-full h-full bg-[#012133]">
      <Solve />
      <div className="w-full pt-10">
        <FadeDown>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Item>
                  <div className="flex flex-col gap-10 w-8/12 mx-auto">
                    <div className="flex justify-center">
                      <Image
                        src="/img/header/LogoTobe.svg"
                        alt="Logo Tobe"
                        width={200}
                        height={53}
                        priority
                      />
                    </div>
                    <div className="no-underline text-center hover:text-blue-500 text-[#97c7ff] text-3xl leading-10">
                      {t('Blockchain')}
                    </div>
                  </div>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item>
                  <div className="grid grid-cols-3 px-2 gap-5">
                    {[
                      ['Về chúng tôi', 'Liên hệ', 'Blog'],
                      ['Hỗ trợ', 'FAQ'],
                      ['Điều khoản', 'Chính sách bảo mật']
                    ].map((group, idx) => (
                      <div key={idx} className="flex flex-col">
                        {group.map((label) => (
                          <Link
                            key={label}
                            href="#"
                            className="no-underline py-2 text-center hover:text-blue-500 text-[#97c7ff] text-xl"
                          >
                            {t(label)}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </FadeDown>
      </div>

      <div className="py-5">
        <Divider className="bg-[#FFFFFF] w-12/12 mx-auto" />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between py-5 lg:px-20 px-3">
        <FadeLeft className="text-[#97C7FF] flex justify-end text-2xl">
          CopyRight © 2020 - 2024 TOBE FARM. All Rights Reserved.
        </FadeLeft>
        <FadeRight className="flex justify-end gap-7 lg:pt-0 pt-4">
          {['telegram', 'twitter', 'youtube', 'facebook'].map((platform) => (
            <IconButton key={platform} className="hover:scale-150">
              <Image
                src={`/img/footer/${platform}.svg`}
                alt={platform}
                width={45}
                height={43}
                priority
              />
            </IconButton>
          ))}
        </FadeRight>
      </div>
    </div>
  );
};

export default Footer;
