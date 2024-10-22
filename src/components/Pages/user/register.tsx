'use client';
import Customicon from '../../ui/Customicon';

import {schemaregister} from '../../../app/utility/schema'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


import Link from 'next/link';
import { Button, Checkbox, FormControlLabel, Grid, Paper, styled } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '@/components/ui/Custombutton';
import { actionRegister } from '@/store/features/Login/RegisterSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import isAuth from '@/middleware/isAuth';
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



type FormValues = { password?: string | undefined; username: string; email: string; company_name: string; confirmPassword: string; role_id: number; };
const label = { inputProps: { 'aria-label': 'vai trò' } };
const Register: React.FC = () => {
  const { register, handleSubmit,  control,formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schemaregister),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [reenterPassword, setReenterPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const router = useRouter();
  const t = useTranslations('Register');
  const dispatch = useDispatch<AppDispatch>()

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    dispatch(actionRegister(data)).then((res)=>{
      if (res.payload ) {
      }
    })

  };
  return (
  <div className='py-10'>
      <div className="bg-custom-log z-0 h-full text-white  w-11/12 mx-auto rounded-3xl py-10">
      <Grid container spacing={2}>
        <Grid item xs={1} lg={3}>
          <div className="pl-1 lg:pl-20 py-5">
            <Link href="./">
              <ArrowBackIcon
                sx={{
                  color: 'gray',
                  fontSize: '22px',
                  zIndex: '15',
                }}
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={10} lg={6}>
          <div>
            <div className="bglog">
              <div

              >
                <div className="w-full flex justify-center py-5">
                  <Image
                    src="/img/authu/login/logo.png"
                    alt="Logo"
                    width={235}
                    height={527}
                  />
                </div>
                <div className="">
                  <div className="font-bold text-4xl text-center">
                    {t('Đăng ký')}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-3">
                      <div className="py-3 text-3xl">{t('Họ và tên')}</div>
                      <div className="flex items-center h-[50px]">
                        <div className="h-[50px] w-[60px] flex justify-center items-center border-2 bg-[#71d8e6] border-gray-500 border-r-0 px-2 rounded-l-[40px]">
                          <Image
                            src="/img/authu/login/Folder.png"
                            alt="Username Icon"
                            width={48}
                            height={48}
                          />
                        </div>
                        <TextField
                          sx={{
                            height: 50,
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: '0px 40px 40px 0px',
                            '& .MuiOutlinedInput-root': {
                              height: '100%',
                              borderRadius: '0px 40px 40px 0px',
                              '& fieldset': {
                                border: '2px solid gray',
                                borderRadius: '0px 40px 40px 0px',
                              },
                            },
                            '&:hover .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'gray',
                              },
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'black',
                              fontSize: '15px',
                              paddingTop: '10px',
                            },
                          }}
                          id="username"
                          {...register('username')}
                          label={t('Vui lòng nhập họ và tên')}
                          variant="outlined"
                        />
                      </div>
                      <p className='text-red-600 pt-3'>{errors.username?.message}</p>

                    </div>
                    <div className="py-3">
                      <div className="py-3 text-3xl">
                        {t('Email hoặc số điện thoại')}
                      </div>
                      <div className="flex items-center h-[50px]">
                        <div className="h-[50px] w-[60px] flex justify-center items-center border-2 bg-[#71d8e6] border-gray-500 border-r-0 px-2 rounded-l-[40px]">
                          <Image
                            src="/img/authu/login/Folder.png"
                            alt="Email Icon"
                            width={48}
                            height={48}
                          />
                        </div>
                        <TextField
                          sx={{
                            height: 50,
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: '0px 40px 40px 0px',
                            '& .MuiOutlinedInput-root': {
                              height: '100%',
                              borderRadius: '0px 40px 40px 0px',
                              '& fieldset': {
                                border: '2px solid gray',
                                borderRadius: '0px 40px 40px 0px',
                              },
                            },
                            '&:hover .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'gray',
                              },
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'black',
                              fontSize: '15px',
                              paddingTop: '10px',
                            },
                          }}
                          id="email"
                          {...register('email')}
                          label={t('Vui lòng nhập email hoặc số điện thoại')}
                          variant="outlined"
                        />
                      </div>
                        <p className='text-red-600 pt-3'>{errors.email?.message}</p>
                    </div>

                    <div className="py-3">
                      <div className="py-3 text-3xl">{t('Tên công ty')}</div>
                      <div className="flex items-center h-[50px]">
                        <div className="h-[50px] w-[60px] flex justify-center items-center border-2 bg-[#71d8e6] border-gray-500 border-r-0 px-2 rounded-l-[40px]">
                          <Image
                            src="/img/authu/login/Folder.png"
                            alt="Company Icon"
                            width={48}
                            height={48}
                          />
                        </div>
                        <TextField
                          sx={{
                            height: 50,
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: '0px 40px 40px 0px',
                            '& .MuiOutlinedInput-root': {
                              height: '100%',
                              borderRadius: '0px 40px 40px 0px',
                              '& fieldset': {
                                border: '2px solid gray',
                                borderRadius: '0px 40px 40px 0px',
                              },
                            },
                            '&:hover .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'gray',
                              },
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'black',
                              fontSize: '15px',
                              paddingTop: '10px',
                            },
                          }}
                          id="company_name"
                          {...register('company_name')}
                          label={t('Vui lòng nhập tên công ty')}
                          variant="outlined"
                        />
                      </div>
                        <p className='text-red-600 pt-3'>{errors.company_name?.message}</p>
                    </div>

                    <div className="py-3">
                      <div className="py-3 text-3xl">{t('Mật khẩu')}</div>
                      <div className="flex items-center h-[50px]">
                        <div className="h-[50px] w-[60px] flex justify-center items-center border-2 bg-[#71d8e6] border-gray-500 border-r-0 px-2 rounded-l-[40px]">
                          <Image
                            src="/img/authu/login/Folder.png"
                            alt="Password Icon"
                            width={48}
                            height={48}
                          />
                        </div>
                        <TextField
                          sx={{
                            height: 50,
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: '0px 40px 40px 0px',
                            '& .MuiOutlinedInput-root': {
                              height: '100%',
                              borderRadius: '0px 40px 40px 0px',
                              '& fieldset': {
                                border: '2px solid gray',
                                borderRadius: '0px 40px 40px 0px',
                              },
                            },
                            '&:hover .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'gray',
                              },
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'black',
                              fontSize: '15px',
                              paddingTop: '10px',
                            },
                          }}
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          {...register('password')}
                          label={t('Vui lòng nhập mật khẩu')}
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                 tabIndex={-1}

                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                       <p className='text-red-600 pt-3'>{errors.password?.message}</p>
                    </div>
                    <div className="py-3">
                      <div className="py-3 text-3xl">
                        {t('Nhập lại mật khẩu')}
                      </div>
                      <div className="flex items-center h-[50px]">
                        <div className="h-[50px] w-[60px] flex justify-center items-center border-2 bg-[#71d8e6] border-gray-500 border-r-0 px-2 rounded-l-[40px]">
                          <Image
                            src="/img/authu/login/Folder.png"
                            alt="Re-enter Password Icon"
                            width={48}
                            height={48}
                          />
                        </div>
                        <TextField
                          sx={{
                            height: 50,
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: '0px 40px 40px 0px',
                            '& .MuiOutlinedInput-root': {
                              height: '100%',
                              borderRadius: '0px 40px 40px 0px',
                              '& fieldset': {
                                border: '2px solid gray',
                                borderRadius: '0px 40px 40px 0px',
                              },
                            },
                            '&:hover .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'gray',
                              },
                            },
                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'black',
                              fontSize: '15px',
                              paddingTop: '10px',
                            },
                          }}
                          id="reenter_password"
                          type={showPassword ? 'text' : 'password'}
                                                   {...register('confirmPassword')}

                          onChange={(e) => setReenterPassword(e.target.value)}

                          label={t('Vui lòng nhập lại mật khẩu')}
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                 tabIndex={-1}

                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                       <p className='text-red-600 pt-3'>{errors.confirmPassword?.message}</p>
                    </div>
   <Controller
          name="role_id"
          control={control}
          render={({ field }) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value === 1}
                    onChange={() => field.onChange(1)}
                  />
                }
                label="Nông dân"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value === 2}
                    onChange={() => field.onChange(2)}
                  />
                }
                label="Người dùng"
              />
            </>
          )}
        />
       <p className='text-red-600 pt-3'>{errors.role_id?.message}</p>
        <div className="flex gap-2 pt-5 justify-end">
                      <div className="flex items-center">
                        <Checkbox {...label} onChange={handleClickShowPassword}
                                 tabIndex={-1}
                         />
                        <div className="flex items-center">Hiện mật khẩu</div>
                      </div>
                    </div>
      <CustomButton>
       {t('Đăng ký')}
      </CustomButton>
                  </form>
                   <div className="text-right">
                    <span>Đã có tài khoản </span>
                    <Link href="./login" className="text-blue-600">Đăng nhập</Link>
                  </div>
                   <Customicon />
                </div>
              </div>
            </div>
          </div>
        </Grid>
         <Grid item xs={1} lg={3}></Grid>
      </Grid>
    </div>
  </div>
  );
};

export default isAuth(Register);


