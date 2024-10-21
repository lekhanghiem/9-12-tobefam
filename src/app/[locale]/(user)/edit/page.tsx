'use client';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  username: string;
  password?: string;
  verification_code?: string | null;
  verify: boolean;
  expires_at?: string | null;
  user_info_id: number;
  company_info_id: number;
  role_id: number;
}

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setProfile(parsedUser);
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
      }
    }
  }, []);

  if (!profile) {
    return <p>No user data found.</p>;
  }

  return (
    <div>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>User ID:</strong> {profile.id}</p>
      <p><strong>Role ID:</strong> {profile.role_id}</p>
    </div>
  );
};

export default UserProfile;
