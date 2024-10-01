'use client';
import Customicon from '../../ui/Customicon';

import { useLocale } from 'next-intl';
import {schemalogin} from '../../../app/[locale]/utility/schema'

import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Grid, Paper, styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '@/components/ui/Custombutton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { actionLogin } from '@/store/features/Area/authSlice';
import { useAppSelector } from '@/store/hooks';
import isAuthu from '../../../middleware/isAuth'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



type FormValues = {
  email: string;
  password: string;
};

const Loginn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const dispatch = useDispatch<AppDispatch>()
  const {loading,data} = useAppSelector((state)=> state.auth.login)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schemalogin),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    dispatch(actionLogin(data)).then((res)=>{
      if (res.payload ) {
      }
    })

  };

  const handleClickShowPassword = () => setShowPassword(prev => !prev);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();
// console.log(loading,data);

  return (
    <div className='py-20'>

    <div className="bg-custom-log z-0 h-full text-white py-10 w-11/12 mx-auto rounded-3xl">
      <Grid container spacing={2}>
        <Grid item xs={1} lg={3}>
          <div className="pl-5 lg:pl-20 py-5">
            <Link href="./">
              <ArrowBackIcon sx={{ color: 'gray', fontSize: '22px', zIndex: '15' }} />
            </Link>
          </div>
        </Grid>
        <Grid item xs={10} lg={6}>
          <div>
            <div className="bglog">
              <div className="mx-auto" style={{ borderRadius: '32px' }}>
                <div className="w-full flex justify-center py-5">
                  <Image src="/img/authu/login/logo.png" alt="Logo" width={235} height={527} />
                </div>
                <div>
                  <div className="font-bold text-4xl text-center">Đăng nhập</div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-5">
                      <div className="py-3 text-3xl">Email hoặc số điện thoại</div>
                      <div className="flex items-center h-[50px]">
                        <div className="h-[50px] w-[60px] flex justify-center items-center border-2 bg-[#71d8e6] border-gray-500 border-r-0 px-2 rounded-l-[40px]">
                          <Image src="/img/authu/login/Folder.png" alt="Email Icon" width={48} height={48} />
                        </div>
                        <TextField
                          {...register("email")}
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
                              fontSize: '20px',
                              paddingTop: '10px',
                            },
                          }}
                          id="outlined-adornment-email"
                          type="text"
                          label="Vui lòng nhập email hoặc số điện thoại"
                          variant="outlined"
                        />

                      </div>
                          <p className='text-red-600 pt-3'>{errors.email?.message}</p>
                    </div>
                    <div>
                      <div className="py-3 text-3xl">Mật khẩu</div>
                      <div className="flex items-center h-[50px]">
                        <div className="h-[50px] w-[60px] flex justify-center items-center border-2 bg-[#71d8e6] border-gray-500 border-r-0 px-2 rounded-l-[40px]">
                          <Image src="/img/authu/login/Lock.png" alt="Password Icon" width={48} height={48} />
                        </div>
                        <TextField
                          {...register("password")}
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
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          label="Nhập mật khẩu"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end"
                              >
                                <IconButton
                                 tabIndex={-1}
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />

                      </div>
                      <p className='text-red-600 pt-3'>{errors.password?.message}</p>
                    </div>
                    <div className="flex gap-2 pt-5 justify-end">
                      <div className="flex items-center">
                        <Checkbox {...label} onChange={handleClickShowPassword}
                                 tabIndex={-1}
                         />
                        <div className="flex items-center">Hiện mật khẩu</div>
                      </div>
                    </div>
                    <div className="pb-10">
                       <CustomButton>
        Đăng nhập
      </CustomButton>
                    </div>
                  </form>
                  <div className="text-right">
                    <span>Chưa có tài khoản </span>
                    <Link href="./register" className="text-blue-600">Đăng ký</Link>
                  </div>
                   <Customicon />

                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={1} lg={3} />
      </Grid>
    </div>
    </div>
  );
};

export default isAuthu(Loginn);
