import React from 'react'
import { Box, Button, Typography, SvgIcon } from '@mui/material';
import {  SvgIconProps } from '@mui/material';
import Image from 'next/image'
import {  IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { FaHome } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { Close, CloudUpload } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from 'next-intl';
import Grid from '@mui/material/Grid2';
import {CustomIcon,DownloadIcon,LookupIcon} from './CustomIcons'
import { toast } from 'react-toastify';
import QrCode from './QrCode';
const Item = styled(Paper)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#fff',
boxShadow:'none',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const DescriptionTabContent = () => {
   const [selectedImages, setSelectedImages] = useState<(string | null)[][]>([[], [], []]);

  const handleImageChange = (sectionIndex: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && selectedImages[sectionIndex].length < 3) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...selectedImages];
      updatedImages[sectionIndex] = [...updatedImages[sectionIndex], imageUrl];
      setSelectedImages(updatedImages);
    }
  };

  const handleRemoveImage = (sectionIndex: number, imageIndex: number) => {
    const updatedImages = [...selectedImages];
    updatedImages[sectionIndex] = updatedImages[sectionIndex].filter((_, idx) => idx !== imageIndex);
    setSelectedImages(updatedImages);
  };

  return (
    <div>
<QrCode/>
<div>
  <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-lg ">

  <div className="flex flex-col space-y-2">
    <label className="font-semibold">
      Tên sản phẩm <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      placeholder="Tên sản phẩm"
      className="p-3 border rounded-md focus:ring-2 focus:ring-green-500   hover:ring-green-600 border-green-500 outline-none"
      defaultValue="123"
    />
  </div>

  <div className="flex flex-col space-y-2">
  <label className="font-semibold">
    Loại sản phẩm <span className="text-red-500">*</span>
  </label>
  <select
    className="p-3 border rounded-md focus:ring-2  outline-none focus:ring-green-500 border-green-500"
    defaultValue="Trái cây"
  >
    <option value="Trái cây">Trái cây</option>
    <option value="Thịt">Thịt</option>
    <option value="Cá">Cá</option>
  </select>
</div>

  <div className="flex flex-col space-y-2">
    <label className="font-semibold">Giá bán lẻ đề nghị (vnd)</label>
    <input
      type="text"
      placeholder="Giá bán lẻ đề nghị (vnd)"
      className="p-3 border rounded-md focus:ring-2  outline-none focus:ring-gray-300 border-gray-300"
    />
  </div>

 <div className="flex flex-col space-y-2">
  <label className="font-semibold">
    Đơn vị bán <span className="text-red-500">*</span>
  </label>
  <select
    className="p-3 border rounded-md focus:ring-2  outline-none focus:ring-green-500 border-green-500"
    defaultValue="Sản phẩm"
  >
    <option value="Sản phẩm">Sản phẩm</option>
    <option value="Kilogram">Kilogram</option>
  </select>
</div>

  <div className="flex flex-col space-y-2">
    <label className="font-semibold">
      Mã GTIN <span className="text-gray-400">(?)</span>
    </label>
    <input
      type="text"
      placeholder="Mã GTIN"
      className="p-3 border rounded-md focus:ring-2  outline-none focus:ring-gray-300 border-gray-300"
    />
  </div>

  <div className="flex flex-col space-y-2">
    <label className="font-semibold">Thời hạn sử dụng</label>
    <input
      type="number"
      placeholder="Thời hạn sử dụng"
      className="p-3 border rounded-md focus:ring-2  outline-none focus:ring-green-500 border-green-500"
      defaultValue="1"
    />
  </div>

  <div className="flex flex-col space-y-2">
    <label className="font-semibold">Đơn vị</label>
    <input
      type="text"
      placeholder="Đơn vị"
      className="p-3 border rounded-md focus:ring-2  outline-none focus:ring-green-500 border-green-500"
      defaultValue="Tháng"
    />
  </div>

  <div className="flex flex-col space-y-2 col-span-2">
    <label className="font-semibold">Video giới thiệu</label>
    <input
      type="text"
      placeholder="Video giới thiệu"
      className="p-3 border rounded-md focus:ring-2   focus:ring-green-500 hover:border-green-500 outline-none"
    />
  </div>
</div>

</div>
 <Box sx={{ flexGrow: 1, pt: 5 }}>
      <Grid container spacing={5}>
        {['Hình ảnh sản phẩm', 'Hình ảnh chứng nhận', 'Hình ảnh thùng'].map((label, sectionIndex) => (
          <Grid  size={{ xs: 12, md: 4 }} key={sectionIndex}>
            <div className="py-3 text-black text-2xl">{label} (tối đa 3 ảnh)</div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '206px',
                border: '3px dashed #7b7474',
                borderRadius: 4,
                backgroundColor: '#f9fafe',
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 0 10px rgba(0, 128, 0, 0.3)',
                },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CloudUpload sx={{ color: 'green', fontSize: 32 }} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange(sectionIndex)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '200px',
                    opacity: 0,
                    cursor: 'pointer',
                  }}
                  aria-label={`Upload ${label} image`}
                />
              </Paper>
            </Box>

            <div className="mt-3 text-gray-600 text-2xl flex justify-center py-3">Các hình ảnh đã tải lên:</div>
            <Grid container spacing={2}>
              {selectedImages[sectionIndex].map((image, imageIndex) => (
                <Grid size={{ xs: 12, md: 4 }} key={imageIndex} sx={{ position: 'relative' }}>

                     <Image
                    src={image!}
                    alt={`Uploaded ${sectionIndex}-${imageIndex}`}
                    width={130}
                    height={130}
                    style={{
                      width: '100%',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      backgroundColor: 'white',
                      opacity: 0.7,
                      '&:hover': { backgroundColor: '#fa0a0a' },
                    }}
                    onClick={() => handleRemoveImage(sectionIndex, imageIndex)}
                  >
                    <CloseIcon sx={{ color: 'red', fontSize: 10 }} />
                  </IconButton>

                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
<div className="flex flex-col  col-span-2 py-5 gap-y-3">
    <label className="font-semibold">Mô tả sản phẩm</label>
    <input
      type="text"
      placeholder="Mô tả sản phẩm"
      className="p-3 border rounded-md focus:ring-2   focus:ring-green-500 hover:border-green-500 outline-none"
    />
  </div>
  <div className='text-2xl py-3'><span className='text-red-600'>(*)</span> Thông tin bắt buộc</div>
</div>
  )
}

export default DescriptionTabContent