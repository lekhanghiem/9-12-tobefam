'use client';
import * as React from 'react';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Product } from '@/types/types';
import { Box, Pagination, Tooltip } from '@mui/material';
import SearchProduct from './SearchProduct';
import CreateProduct from './CreateProduct';
import { useAppSelector } from '@/store/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ChangeStatusProduct from './ChangeStatusProduct';
import { setPage } from '@/store/features/Product/SearchSlice';
import { AppDispatch } from '@/store/store';
import EditProduct from './EditProduct';
import Loading from '@/components/Global/Loading';

export default function BasicTable() {
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  // const [page, setPage] = useState(1)
  const dispatch = useDispatch<AppDispatch>();

  const { data ,totalPages,page,loading  } = useSelector((state: any) => state?.SearchSlice);
  useEffect(() => {
    if (data && data.products) {
      setSearchProducts(data?.products);
    }
  }, [data]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
    // setPage(value);
  };
 const rows = searchProducts?.map((product: Product) => ({
  Name:product.Name,
  Description: product.Description,
  Image: product.Image?.url,
  product_code: product.product_code,
  Expiry_date: product.Expiry_date,
  Unit: product.Unit,
  Product_status: product.Product_status,
  Product_date: product.Product_date,
  Product_type: product.Product_type,
  Product_packing: product.Product_packing,
  qr_code: product.qr_code,
}));


  return (
    <Box style={{ backgroundImage: `url('/img/home/Group48096598.png')` }}>
      <Box sx={{ py: '20px', backgroundImage: `url('/img/home/Group48096598.png')` }}>
        <Box sx={{ width: '90%', mx: 'auto', backgroundColor: '#ffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '32px', pb: '30px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%', mx: 'auto', py: '50px' }}>
            <Box>
              <SearchProduct page={page} searchProducts={searchProducts}/>
            </Box>
            <Box>
              <CreateProduct />
            </Box>
          </Box>

         {loading ===true ? <Loading/>: <TableContainer>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" colSpan={2} sx={{ fontSize: '15px' }}>Name</TableCell>
                  <TableCell align="left" sx={{ fontSize: '15px' }}>Type</TableCell>
                  <TableCell align="left" sx={{ fontSize: '15px' }}>Status</TableCell>
                  <TableCell align="left" colSpan={2} sx={{ fontSize: '15px' }}>Actions</TableCell>
                  <TableCell align="left" sx={{ fontSize: '15px' }}>qr_code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.product_code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell
                      sx={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                      align="left"
                      component="th"
                      scope="row"
                    >
                      <Tooltip title={row.Name} arrow>
                        <span>{row.Name}</span>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="left">
                      <Image src={row.Image} width={40} height={40} alt="Product" />
                    </TableCell>
                    <TableCell align="left">{row.Product_type}</TableCell>
                    <TableCell align="left">{row.Product_status}</TableCell>
                    <TableCell align="left">
                      <EditProduct row={row} product_code={row.product_code} />
                    </TableCell>
                    <TableCell align="left">
                      <ChangeStatusProduct product_status={row.Product_status} product_code={row.product_code}/>
                    </TableCell>
                    <TableCell align="left"><Image src={row.qr_code} width='40' height='40' alt="qr_code" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>}

          <Pagination
            color='primary'
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            sx={{ marginTop: 2, justifyContent: 'center', display: 'flex' }}
          />
        </Box>
      </Box>
    </Box>
  );
}