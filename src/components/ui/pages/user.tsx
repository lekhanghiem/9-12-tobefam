import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const user = () => {
  return (
    <div>
      <Link href="123/login">
        <Image
          className="hover:scale-125 w-full h-full"
          src="/img/header/Groupuser.svg"
          alt="User Icon"
          width={52}
          height={52}
          priority
        />
      </Link>
    </div>
  );
};

export default user;
