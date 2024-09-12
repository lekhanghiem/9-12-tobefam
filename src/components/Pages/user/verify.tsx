'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import React, { useState, FormEvent } from 'react';
import axiosIns from '../../../store/api/axiosIns';
import { useLocale } from 'next-intl';

import { Button, Typography } from '@mui/material';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Customicon from '../../ui/Customicon';
import CustomButton from '@/components/ui/Custombutton';

const Verify: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
    const router = useRouter();

const handelClick=()=> {
    router.back();
};
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axiosIns.post(
        '/account/verify',
        { email, code }
      );
      window.location.href = `/login`;

      setMessage(response.data.message);
    } catch (error:any) {
        setError(error?.response?.data?.message || 'An error occurred');

    }
  };
const locale =useLocale();

  return (
    <div className="w-screen h-full">
      <div className="pt-20 bglog">
        <div
          className="w-11/12 h-full mx-auto bg-custom-log py-10"
          style={{ borderRadius: '32px' }}
        >
          <div className="w-full flex justify-center py-5">
            <Image
              src="/img/authu/login/logo.png"
              alt="Logo"
              width={235}
              height={527}
            />
          </div>
          <div className="w-10/12 lg:w-6/12 mx-auto">
            <div className="font-bold text-4xl text-center text-white">
              Xác minh email của bạn
            </div>
            <div className="flex justify-center py-5 ">
              <Button
                onClick={() =>
                  (window.location.href =
                    'https://www.google.com/intl/vi/gmail/about/')
                }
                sx={{ color: 'white', bgcolor: 'green' }}
                startIcon={<MarkEmailReadIcon />}
              >
                Kiểm Tra Gmail
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className=" pt-5">
                <TextField
                  sx={{
                    width: '100%',
                    height: 50,
                    backgroundColor: 'white',
                    borderRadius: '40px',
                    '& .MuiOutlinedInput-root': {
                      height: '100%',
                      borderRadius: '40px', // Apply rounded corners to the border
                      '& fieldset': {
                        border: '2px solid gray', // Default border color
                        borderRadius: '40px',
                      },
                    },
                    '&:hover .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray', // Border color on hover
                      },
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'blue', // Border color when focused
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'black',
                      fontSize: '20px',
                      paddingTop: '10px',
                    },
                  }}
                  id="outlined-adornment-password"
                  label="Nhập mã xác nhận"
                  variant="outlined"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="flex justify-center pt-3">
                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
              <div className="py-5">
                <CustomButton>
      Gửi mã
      </CustomButton>
              </div>
              <div className="text-right ">
                <span className="text-white pr-3">Không nhận được mã

                </span>
                   <Link href='#' className=' text-blue-600' onClick={handelClick}>Trở lại</Link>


              </div>


            </form>

            <Customicon />

          </div>
           <Link href='./' className='flex justify-end items-end pr-10 text-blue-600'>Trang chủ</Link>
        </div>
      </div>

    </div>
  );
};

export default Verify;
