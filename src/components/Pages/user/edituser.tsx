// components/EditCompanyForm.tsx
'use client';

import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import axiosIns from '../../../store/api/axiosIns';
import { schemaedituser } from '@/app/[locale]/utility/schema';
import { useDispatch } from 'react-redux';

interface FormData {
   phone?: string | undefined; email: string;
}

const EditCompanyForm = ({ id }: { id: string }) => {
  // Setup useForm hook with yup validation
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schemaedituser),
    defaultValues: { phone: '', email: '' },
  });
    const dispatch =useDispatch()

  // Handle form submission
  const onSubmit = async (values: FormData) => {

// dispatch(dispatch());
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        toast.error('No token');
        return;
      }

      const response = await axiosIns.put(
        `/account/edit-user-info`,
        values,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        toast.success('User info updated successfully');
        // Redirect after successful update
        window.location.href = `/`;
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
      </div>
      <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
        Update User Info
      </Button>
    </form>
  );
};

export default EditCompanyForm;
