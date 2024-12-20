'use client'
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import { EditCompany } from '@/app/utility/schema';
import { actionEditCompany } from '@/store/features/Login/EditCompanySlice';
import { AppDispatch } from '@/store/store';
import { FormEditCompany } from '@/types/types';
import {PasswordField} from '../../ui/pages/PasswordField'


const Contact = () => {

  const dispatch = useDispatch<AppDispatch>();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEditCompany>({
    resolver: yupResolver(EditCompany),
  });
const onSubmit: SubmitHandler<FormEditCompany> = async (data) => {
    try {
      const response = await dispatch(actionEditCompany(data));

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
              <div className="text-4xl font-bold">Edit Company</div>
              <div className="pt-3 text-gray-500 text-xl">
                Thay đổi tên công ty
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
            label="Company_name"
            register={register('Company_name')}
            error={errors.Company_name?.message}

          />

          <PasswordField
            label="district_code"
            register={register('district_code')}
            error={errors.district_code?.message}

          />
           <PasswordField
            label="wards_code"
            register={register('wards_code')}
            error={errors.wards_code?.message}

          />

          <PasswordField
            label="provinces_code"
            register={register('provinces_code')}
            error={errors.provinces_code?.message}

          /> <PasswordField
            label="description"
            register={register('description')}
            error={errors.description?.message}

          />

          <PasswordField
            label="Address"
            register={register('Address')}
            error={errors.Address?.message}

          />


        </div>
      </form>
    </div>
  );
};


export default Contact;
