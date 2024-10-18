import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaUserEdit } from "react-icons/fa";
const Page = () => {
  return (
    <div className="">
     <div>  <AccountCircleIcon sx={{ fontSize:'6rem'}} /></div>
      <div>
<FaUserEdit className='text-6xl' />
      </div>
    </div>
  );
};

export default Page;
