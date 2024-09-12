'use client';
import { useLocale } from 'next-intl';

import React, { useState, useEffect } from 'react';
import axiosIns from '../../../store/api/axiosIns';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';

const LogoutButton = () => {
  const locale =useLocale();
  const router = useRouter();
  const [hasToken, setHasToken] = useState<boolean>(false);

  // Function to check the token
  const checkToken = () => {
    const token = localStorage.getItem('accessToken');
    setHasToken(!!token); // Update state based on token presence
  };

  // Check the token when component mounts
  useEffect(() => {
    checkToken();

    // Optional: Add an event listener to handle token changes
    const handleStorageChange = () => {
      checkToken();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        toast.error('Không tìm thấy token');
        return;
      }

      const response = await axiosIns.post('/account/logout', {});

      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userAbilities');

      toast.success(response?.data?.message || 'Đăng xuất thành công');
      setHasToken(false); // Update state to hide button
      router.push(`/login`); // Redirect to homepage or another route
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error);
      toast.error('Đã xảy ra lỗi khi đăng xuất.');
    }
  };

  // Render the button only if the token is present
  return hasToken ? (
    <button
      onClick={handleLogout}
      className="btlog text-center w-52 py-3 mx-auto"
    >
      Đăng xuất
    </button>
  ) : (
    <div>
      <Link href="/login">
        <Image
          className="hover:scale-125"
          src="/img/header/Groupuser.svg"
          alt="User Icon"
          width={52}
          height={52}
          priority
        />
      </Link>
    </div>
  ); // Do not render the button if no token
};

export default LogoutButton;
