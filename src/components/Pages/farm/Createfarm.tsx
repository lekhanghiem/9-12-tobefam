'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { CreateFarm } from '@/app/utility/schema';
import { AppDispatch } from '@/store/store';
import { FormCreateFarm } from '@/types/types';
import { actionCreateFarm } from '@/store/features/Area/CreateFarmSlice';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTranslations } from 'next-intl';

// Hidden input for file upload
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
  color: 'red'
});

const CreateFarmUser = () => {
  const t = useTranslations('Profile');
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormCreateFarm>({
    resolver: yupResolver(CreateFarm),
  });

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview); // Cleanup URL object
    };
  }, [imagePreview]);

  const onSubmit: SubmitHandler<FormCreateFarm> = async (data) => {
    console.log(data,'data');
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value as string));
      if (image) formData.append('Image', image); // Append image if exists

      console.log(image, 'image');
      await dispatch(actionCreateFarm(data)); // Dispatch action to create farm
      toast.success('Farm created successfully!');
    } catch (error) {
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files;
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null); // Remove image and preview
  };

  return (
    <div className="h-full w-full">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="p-5">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">Edit User</h1>
              <p className="pt-3 text-gray-500 text-xl">Thay đổi gmail và số điện thoại tài khoản</p>
            </div>
            <Button type="submit" sx={{ backgroundColor: 'green', color: 'white' }}>Xác nhận</Button>
          </div>

          <div className="py-3">
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>

          {/* Form Fields */}
          <FormField label="Name" register={register('Name')} error={errors.Name?.message} />
          <FormField label="Address" register={register('Address')} error={errors.Address?.message} />
          <FormField label="Description" register={register('description')} error={errors.description?.message} />

          <Box sx={{ pt: 1 }}>
            <div className="text-2xl font-bold pb-3">
              Area Type<span className="text-red-600">(*)</span>
            </div>
            <FormControl fullWidth variant="outlined" error={!!errors.Area_type}>
              <Controller
                name="Area_type"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select {...field} labelId="area-type-label" id="area-type">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">Rau củ</MenuItem>
                    <MenuItem value="2">Hoa quả</MenuItem>
                  </Select>
                )}
              />
              {errors.Area_type && <p className="text-red-600">{errors.Area_type.message}</p>}
            </FormControl>
          </Box>

          {/* Image Upload Field */}

          <Box mt={3}>
            <label htmlFor="upload-image">
              <VisuallyHiddenInput
                id="upload-image"
                type="file"
                accept="image/*"
                {...register('Image')}
                onChange={handleFileChange}
              />
              <Button fullWidth component="span" startIcon={<CloudUploadIcon />} variant="contained" sx={{ background: 'green' }}>
                Upload Image
              </Button>
            </label>
          </Box>

          {imagePreview && (
            <div className="flex justify-center mt-2">
              <Image src={imagePreview} alt="Image Preview" width={100} height={100} />
              <Button onClick={handleRemoveImage} color="error" variant="outlined" style={{ marginLeft: '8px' }}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

type FormFieldProps = {
  label: string;
  register: any;
  error?: string;
};

const FormField = ({ label, register, error }: FormFieldProps) => (
  <div className="pt-3">
    <h2 className="text-2xl font-bold">
      {label} <span className="text-red-600">(*)</span>
    </h2>
    <Box mt={2}>
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
        }}
      />
    </Box>
  </div>
);

export default CreateFarmUser;
