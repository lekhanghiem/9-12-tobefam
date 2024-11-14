'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import { Button } from '@mui/material';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Customicon from '../../ui/pages/Customicon';
import CustomButton from '@/components/ui/pages/Custombutton';
import { FormVerify } from '@/types/types';
import { actionVerify } from '@/store/features/Login/VerifySlice';
import { schemmaVerify } from '@/app/utility/schema';

const Verify: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormVerify>({
    resolver: yupResolver(schemmaVerify),
  });

  const onSubmit: SubmitHandler<FormVerify> = async (data) => {
    try {
      const response = await dispatch(actionVerify(data));
      if (response.payload) {
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau.');
    }
  };

  return (
    <div className="w-screen h-full">
      <div className="pt-20 bglog">
        <div className="w-11/12 h-full mx-auto bg-custom-log py-10" style={{ borderRadius: '32px' }}>
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
            <div className="flex justify-center py-5">
              <Button
                onClick={() => (window.location.href = 'https://www.google.com/intl/vi/gmail/about/')}
                sx={{ color: 'white', bgcolor: 'green' }}
                startIcon={<MarkEmailReadIcon />}
              >
                Kiểm Tra Gmail
              </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pt-5">
                <div className="text-2xl font-bold text-white pb-3">
                  Nhập mã xác nhận <span className="text-red-600">(*)</span>
                </div>
                <TextField
                  {...register('code')}
                  variant="outlined"
                  fullWidth
                  type='text'
                  error={!!errors.code}
                  helperText={errors.code ? errors.code.message : ''}
                  sx={{
                    width: '100%',
                    height: 50,
                    backgroundColor: 'white',
                    borderRadius: '40px',
                    '& .MuiOutlinedInput-root': {
                      height: '100%',
                      borderRadius: '40px',
                      '& fieldset': {
                        border: '2px solid gray',
                        borderRadius: '40px',
                      },
                    },
                    '&:hover .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'gray',
                      },
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'blue',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'black',
                      fontSize: '20px',
                      paddingTop: '10px',
                    },
                  }}
                />
              </div>
              <div className="py-5">
                <CustomButton >
                  Gửi mã
                </CustomButton>
              </div>
              <div className="text-right">
                <span className="text-white pr-3">Không nhận được mã?</span>
                <Link href='#' className='text-blue-600' onClick={() => router.back()}>Trở lại</Link>
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
