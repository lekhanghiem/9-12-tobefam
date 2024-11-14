import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Select,
  MenuItem,
  Pagination,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SprintStamp from '../../Pages/stampManegement/SprintStamp'
import OrderPrintStamp from '../../Pages/stampManegement/OrderPrintStamp'

export default function HistoryPage() {
  const buttonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '10px',
    padding: '8px 16px',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#43A047',
    },
  };

  return (
    <div className='w-11/12 mx-auto py-10'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='mx-auto md:mx-1'>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Lịch sử kích hoạt tem
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mt={4} mb={2}>
            <Breadcrumbs>
              <Link color="inherit" href="/" underline="hover">
                Home
              </Link>
              <Typography className='text-green-400'>Lịch sử kích hoạt tem</Typography>
            </Breadcrumbs>
          </Stack>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col md:flex-row items-center'>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} mb={2}>
            <Select defaultValue="Tất cả" sx={{ minWidth: 120, backgroundColor: '#4CAF50', color: 'white', borderRadius: '10px' }}>
              <MenuItem value="Tất cả">Tất cả</MenuItem>
              {/* Add more options here if needed */}
            </Select>
            <Stack direction="row" spacing={2}>
             <div className='flex items-center'>
               <SprintStamp/>
             </div>
             <div className='flex items-center'>
             <OrderPrintStamp/>

             </div>
              <div className='flex items-center'>
                <Link href='/user/theStamp'>
              <Button variant="contained" startIcon={<AddIcon />} sx={buttonStyles}>
                Kích hoạt tem
              </Button>
                </Link>
              </div>
            </Stack>
          </Stack>
        </div>
      </div>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: '16px', boxShadow: 'none' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Loại tem</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Tem bắt đầu</TableCell>
              <TableCell>Tem kết thúc</TableCell>
              <TableCell>Ngày hết hạn</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={7} align="center" style={{ color: '#FF5722' }}>
                KHÔNG CÓ DỮ LIỆU
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2} sx={{px:2}}>
          <Pagination count={5} color="primary" />
          <Stack direction="row" alignItems="center">
            <Typography>Hiển thị:</Typography>
            <Select defaultValue={5} sx={{ ml: 1, minWidth: 60 }}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
            <Typography> hàng</Typography>
          </Stack>
        </Stack>
      </TableContainer>
    </div>
  );
}
