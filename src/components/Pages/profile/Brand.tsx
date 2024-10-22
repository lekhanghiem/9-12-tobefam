'use client'
import Image from 'next/image'
import { Button, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FaHome } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { Close, CloudUpload } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { ChangeEvent, useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '10px',
  // border:'2px solid #490057',
   boxShadow: '0 4px 8px rgba(104, 108, 104, 0.2)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Brand = () => {
  const [selectedImages, setSelectedImages] = useState<(string | null)[]>([null, null, null]);

  // Hàm xử lý khi người dùng chọn ảnh
  const handleImageChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Tạo URL cho ảnh tạm thời
      const updatedImages = [...selectedImages];
      updatedImages[index] = imageUrl;
      setSelectedImages(updatedImages); // Cập nhật state
    }
  };

  // Hàm xử lý khi xóa ảnh
  const handleRemoveImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages[index] = null; // Đặt ảnh tại ô tương ứng thành null
    setSelectedImages(updatedImages); // Cập nhật state
  };
  return (
   <div className='h-full w-full '>
<div className='p-5'>
  <div className=''>
  <div className='flex-col'>
  <div className='flex-col gap-3 text-4xl font-bold '>
Thương hiệu
</div>
<div className='pt-3 text-gray-500 text-xl pb-3'>
  Thiết lập logo và banner
</div>
</div>
<div className='py-3'>
<div className='h-[1px] bg-gray-300 w-full'></div>

</div>

<div className='flex justify-between py-3'>
  <div className='flex-col gap-3 text-2xl font-bold py-3'>
Ảnh bìa hiện tại
</div>
<div className='flex items-center'>
   <Button sx={{
    backgroundColor: 'red',
    color: 'white'
   }}>Xóa</Button>
</div>
</div>


<div>
<Image src='/img/profile/img.png'alt=' /img/profile/img.png' width={10000} height={4000} className='h-full'/>

</div>
<div className='pt-5'>
<div className='h-[1px] bg-gray-300 w-full'></div>

</div>
<div className='flex justify-between py-3'>
  <div className='flex-col gap-3 text-2xl font-bold py-3'>
Tải lên ảnh bìa mới
</div>
<div className='flex items-center'>
   <Button sx={{
    backgroundColor: 'green',
    color: 'white'
   }}>Lưu</Button>
</div>
</div>
<div>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
           {Array.from({ length: 1 }).map((_, index) => (
             <Grid item xs={12} md={12}
          key={index}
             >
            <Item    sx={{
              height:'200px',
  display: 'flex',
        justifyContent: 'center',
            border: '2px dashed #e0e0e0',
            borderRadius: 4,
            alignItems: 'center',
            backgroundColor: '#f9fafe',
            position: 'relative',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0 0 10px rgba(0, 128, 0, 0.3)',
            },
          }}>
        <Paper
          elevation={0}
        >
          {selectedImages[index] ? (
            <>

              <Image
                src={selectedImages[index]!}
                alt={`Uploaded ${index}`}
                // width={10000} height={10000}
                fill={true}
                className='h-full w-full rounded-xl '
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
                onClick={() => handleRemoveImage(index)}
              >
                <CloseIcon   sx={{ color: 'red',fontSize: 20 }} />
              </IconButton>
            </>
          ) : (
            <>
              <CloudUpload sx={{ color: 'green', fontSize: 32 }} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange(index)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer',
                }}
              />
            </>
          )}
        </Paper>
        </Item>
          </Grid>
      ))}

        </Grid>
      </Box>
</div>
</div>
</div>
    </div>
  )
}

export default Brand