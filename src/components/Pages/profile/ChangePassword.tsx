import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { actionChangePassword } from '@/store/features/Login/ChangePasswordSlice';
import { ChangePassword } from '@/app/utility/schema';
import { FormDataPassword } from '@/types/types';
import { toast } from "react-toastify";
import { useTranslations } from 'next-intl';



const Contact = () => {
  const t = useTranslations('Profile')
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const dispatch = useDispatch<AppDispatch>();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataPassword>({
    resolver: yupResolver(ChangePassword),
  });
const onSubmit: SubmitHandler<FormDataPassword> = async (data) => {
    try {
      const response = await dispatch(actionChangePassword(data));

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
              <div className="text-4xl font-bold">{t('Đổi mật khẩu')}</div>
              <div className="pt-3 text-gray-500 text-xl">
                {t('Thay đổi mật khẩu tài khoản')}
              </div>
            </div>
            <div className='flex items-center'>
              <Button
              type="submit"
              sx={{ backgroundColor: 'green', color: 'white' }}
            >
              {t('Xác nhận')}
            </Button>
            </div>
          </div>

          <div className="py-3">
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>

          <PasswordField
               label={`${t('Mật khẩu cũ')}`}

            register={register('old_password')}
            error={errors.old_password?.message}
            showPassword={showPassword}
          />

          <PasswordField
               label={`${t('Mật khẩu mới')}`}

            register={register('new_password')}
            error={errors.new_password?.message}
            showPassword={showPassword}
          />

          <PasswordField
               label={`${t('Nhập lại mật khẩu mới')}`}

            register={register('re_new_password')}
            error={errors.re_new_password?.message}
            showPassword={showPassword}
          />

          <FormControlLabel
            control={
              <Switch
                checked={showPassword}
                onChange={handleTogglePassword}
                color="success"
              />
            }
               label={`${t('Hiển thị mật khẩu')}`}

            sx={{ marginTop: '8px' }}
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
  showPassword: boolean;
};

const PasswordField = ({ label, register, error, showPassword }: PasswordFieldProps) => (
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
          type={showPassword ? 'text' : 'password'}
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
