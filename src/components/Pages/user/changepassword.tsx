// ChangePasswordForm.tsx
'use client';
import { useLocale } from 'next-intl';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axiosIns from '../../../store/api/axiosIns';

import { request } from 'http';

const ChangePasswordForm: React.FC = () => {
  const router = useRouter();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'oldPassword') setOldPassword(value);
    else if (name === 'newPassword') setNewPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (newPassword !== confirmPassword) {
      toast.error('Mật khẩu không khớp');
      return;
    }

    const token = localStorage.getItem('accessToken');

    if (!token) {
      toast.error('No access token found. Please log in again.');
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    const data = {
      old_password: oldPassword,
      new_password: newPassword,
      re_new_password: confirmPassword,
    };

    try {
      const response = await axiosIns.post(
        '/account/change-password',
        data,
        {
          headers,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message || 'Đổi mật khẩu thành công!');
        router.push(`/`);
      } else {
        toast.error('Failed to change password. Please try again later.');
      }
    } catch (error) {
      toast.error('Nhập lại mật khẩu cũ');
      // if (error.response) {
      //   toast.error(error.response.data.message || 'Failed to change password');
      // } else if (error.request) {
      //   toast.error('Network error. Please try again later.');
      // } else {
      //   toast.error('Error changing password. Please try again later.');
      // }
    }
  };
  const locale = useLocale();

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div>đổi mật khẩu</div>
        <div>
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={oldPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
