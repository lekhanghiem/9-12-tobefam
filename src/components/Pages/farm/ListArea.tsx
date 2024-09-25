'use client'
import * as React from 'react';
import Image from 'next/image'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Area } from '@/types/types';
import { useListAreaQuery } from '@/store/features/todos/ListAreaRTK';
import ChangeStatus from './ChangeStatus';
import Edit from './Edit';

import { Box, Typography, Pagination, Tooltip } from '@mui/material';
import SearchArea from './SearchArea';
import { useEffect, useState } from 'react';
import Createfram from './Createfram';
interface AreasResponse{
  data:any;
  areas:Area[];
}
export default function BasicTable() {
  const [page, setPage] = useState<number>(1);
   const { data,refetch  } = useListAreaQuery<AreasResponse>(`?page=${page}`);
   const [isOpen, setIsOpen] = useState(false);
const [searchResults, setSearchResults] = useState<Area[]>([])
  const areas: Area[] = data?.data?.areas || [];
const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

  };
const totalPages=data?.data?.totalPages;

   useEffect(() => {

    refetch();
  }, [page, refetch]);
  const rows =
      (searchResults?.length > 0 ? searchResults : areas).map((area) => ({
        id: area.id,
        Name: area.Name,
        Area_type: area.Area_type,
        Area_status: area.Area_status,
        Address: area.Address,
        Image: area.Image?.url,
        description: area.description,
      }))


  return (
    <Box sx={{ py:'20px',backgroundColor:'#f9faff' }} >
 <Box sx={{ width:'90%',mx:'auto',backgroundColor:'#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  borderRadius: '12px',pb:'30px' }}>
  <Box sx={{ display:'flex', justifyContent:'space-between',width:'90%',mx:'auto',py:'50px' }}>
<Box>
  <SearchArea />
</Box>
<Box><Createfram/></Box>
 </Box>

    <TableContainer  sx={{}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={2}>Name of product type</TableCell>
            <TableCell align="left">type</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left" colSpan={2}>Actions</TableCell>
            <TableCell align="left">description</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
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

              <TableCell align="left"><Image src={row.Image} width='40' height='40' alt="Customer" /></TableCell>
              <TableCell align="left">{row.Area_type} </TableCell>
              <TableCell align="left">{row.Area_status}</TableCell>
               <TableCell align="left"><Edit />
               </TableCell>
               <TableCell align="left">
                <ChangeStatus  id={row.id} refetch={refetch} Area_status={row.Area_status}  />
                </TableCell>
              <TableCell align="left">{row.description} {row.Area_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>

      <Pagination
      color='primary'
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{ marginTop: 2, justifyContent: 'center', display: 'flex' }}
      />
 </Box>
    </Box>
  );
}