import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { actionEditUser } from '@/store/features/Login/EditUserSlice';
import {  schemaEditUser } from '@/app/[locale]/utility/schema';
import { FormDataEditUser } from '@/types/types';
import { toast } from "react-toastify";



const Contact = () => {

  const dispatch = useDispatch<AppDispatch>();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataEditUser>({
    resolver: yupResolver(schemaEditUser),
  });
  console.log(errors,'errors');

const onSubmit: SubmitHandler<FormDataEditUser> = async (data) => {
    try {
      const response = await dispatch(actionEditUser(data));

      if (response.payload) {
        reset();
      } else {
        toast.error('Đổi mật khẩu thất bại, vui lòng thử lại.');
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau.');
    }
  };

  return (
    <div className="h-full w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5">
          <div className="flex justify-between">
            <div>
              <div className="text-4xl font-bold">Đổi mật khẩu</div>
              <div className="pt-3 text-gray-500 text-xl">
                Thay đổi mật khẩu tài khoản
              </div>
            </div>
            <div className='flex items-center'>
              <Button
              type="submit"
              sx={{ backgroundColor: 'green', color: 'white' }}
            >
              Xác nhận
            </Button>
            </div>
          </div>

          <div className="py-3">
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>



          <PasswordField
            label="Số điện thoại mới"
            register={register('Phone')}
            error={errors.Phone?.message}

          />

          <PasswordField
            label="Email mới"
            register={register('email')}
            error={errors.email?.message}

          />


        </div>
      </form>
    </div>
  );
};

type PasswordFieldProps = {
  label: string;
  register: any;
  error?: string;
};

const PasswordField = ({ label, register, error,  }: PasswordFieldProps) => (
  <div className="pt-3">
    <div className="text-2xl font-bold">
      {label} <span className="text-red-600">(*)</span>
    </div>
    <div className="pt-5">
      <Box>
        <TextField
          {...register}
          variant="outlined"
          fullWidth
          error={!!error}
          helperText={error || ''}
          sx={{
            '& .MuiInputLabel-root': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              transition: '0.3s',
              '& fieldset': { borderColor: 'green' },
              '&:hover fieldset': {
                borderColor: 'green',
                boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'green',
                boxShadow: '0 0 8px 2px rgba(0, 128, 0, 0.7)',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
          }}
        />
      </Box>
    </div>
  </div>
);

export default Contact;
