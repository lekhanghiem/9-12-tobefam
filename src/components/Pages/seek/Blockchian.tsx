'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
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

                  boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.5)',
                  '&.Mui-focused': {
                    outline: 'none',
                    border: 'none',

                  },
                   '&:hover .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#023552',
            },
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#023552',
          },
            '& .Mui-focused .MuiInputLabel-root': {
      color: '#023552',
    },
    '& .MuiInputLabel-root': {
      color: '#f8fbfc', // Màu của label khi không focus
    },

                }}
              />
            </div>
            <div className="flex justify-center py-5">
<Button
  sx={{
        textTransform: 'none',
    background: 'linear-gradient(to right, #9DF75A, #02FFAC)',
    width:'20%',
    minWidth:'150px',
    '&:hover': {
      background: 'linear-gradient(to right, #02FFAC, #9DF75A)', // Reverse gradient on hover
    },
    borderRadius: '1.5rem', // Equivalent to 3xl in Tailwind
    fontSize: '1.25rem', // Equivalent to text-2xl in Tailwind
    color: 'black', // Text color
  }}
>
  Access
</Button>            </div>
          </form>
        </div>

      </div>
    );
  };


export default Blockchian;
