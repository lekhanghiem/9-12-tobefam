import React from 'react'
import { CiSaveDown2 } from "react-icons/ci";
import { Box, Button, Typography, SvgIcon } from '@mui/material';
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import {CustomIcon,DownloadIcon,LookupIcon} from './CustomIcons'
import { toast } from 'react-toastify';
const QrCode = () => {
   const imageSrc = '/img/profile/img.png'; // Path to the image file
  const productCode = 'PM0007550005';

  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'maQR.png';
 alert('bạn có muốn lưu QR');
     toast.success('Đang tải');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
       <div className=" px-10 flex justify-center items-start py-10">
  <div className="  w-full">
    <div className="p-5">
      <h2 className="text-2xl font-bold text-gray-800">Mô tả sản phẩm</h2>
      <p className="text-gray-500">Thông tin cơ bản giới thiệu sản phẩm</p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="bg-green-100 rounded-lg w-80 h-80 ">
  <Image
          src={imageSrc}
          alt="QR Code"
          width={300}
          height={300}
          className="object-fill w-full h-full p-4"
        />
</div>

       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography color="textSecondary">
        <strong className='text-black'>Mã sản phẩm:</strong> <span style={{ color: '#51b765' }}>PM0007550005</span>
      </Typography>

      <Button
          variant="contained"
          startIcon={<CiSaveDown2 />}
          fullWidth
          onClick={handleDownload}
          sx={{
            color: 'green.600',
            backgroundColor: '#51b765',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: '#229238',
            },
          }}
        >
          Tải xuống tem
        </Button>

      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        fullWidth
        sx={{
          color: 'green.600',
          backgroundColor: '#51b765',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#229238',
          },
        }}
      >
        Ghi nhật ký
      </Button>

      <Button
        variant="contained"
        startIcon={<CiSearch />}
        fullWidth
        sx={{
          color: 'white',
          backgroundColor: '#51b765',
          fontWeight: 'bold',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#229238',
          },
        }}
      >
        Tra cứu
      </Button>
    </Box>
    </div>
  </div>
</div>
    </div>
  )
}

export default QrCode