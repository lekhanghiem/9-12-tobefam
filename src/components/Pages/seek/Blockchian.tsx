'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Solve from '@/components/Global/Solve';
import TextField from '@mui/material/TextField';
const Blockchian = () => {


    return (
      <div className="h-full w-full relative container mx-auto">
        <div className="py-10">
          <div className="absolute top-0">
            <div className=""></div>
          </div>
          <div className=" mx-auto w-4/12">
            <div className="">
              <Image src="/images/FORCONSUMERS/Qrcode.png" alt="" width={341} height={256} />
            </div>
          </div>
          <form  className="flex flex-col w-6/12 mx-auto">
            <div className="">
              <TextField
                className="w-full bg-[#023552] rounded-2xl border-none focus:outline-none"
                id="outlined-basic"
                label="Fill in the QR code number"
                variant="outlined"
                sx={{
                  '&.Mui-focused': {
                    outline: 'none',
                  },
                }}
              />
            </div>
            <div className="flex justify-center py-5">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#9DF75A] to-[#02FFAC] hover:from-[#02FFAC] hover:to-[#9DF75A] text-white font-bold w-56 h-10 rounded-3xl"
              >
                <div className="text-black"> Access</div>
              </button>
            </div>
          </form>
        </div>
        <div className="pb-10">
          <Solve />
        </div>
      </div>
    );
  };


export default Blockchian;
