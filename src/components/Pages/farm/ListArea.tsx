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
import ChangeStatus from './ChangeStatus';
import Edit from './Edit';

import { Box, Pagination, Tooltip } from '@mui/material';
import SearchArea from './SearchArea';
import { useContext } from 'react';
import Createfram from './Createfram';
import { SearchContext } from '@/context/AppContext';


export default function BasicTable() {
const  {searchAreas,totalPages,page,handlePageChange}  = useContext(SearchContext)||{};
console.log(totalPages,'pagetotltotal');
const rows = searchAreas?.map((area: Area) => ({
  id: area.id,
  Name: area.Name,
  Area_type: area.Area_type,
  Area_status: area.Area_status,
  Address: area.Address,
  Image: area.Image?.url,
  description: area.description,
})) || [];

  return (
    <div style={{ backgroundImage: `url('/img/home/Group48096598.png')` }}>


    <Box sx={{ py:'20px',backgroundImage:`url('/img/home/Group48096598.png')` }} >
 <Box sx={{ width:'90%',mx:'auto',backgroundColor:'#ffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  borderRadius: '32px',pb:'30px' }}>
  <Box sx={{ display:'flex', justifyContent:'space-between',width:'90%',mx:'auto',py:'50px' }}>
<Box>
  <SearchArea />
</Box>
<Box><Createfram/></Box>
 </Box>

    <TableContainer >
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
         <TableRow>
  <TableCell align="left" colSpan={2} sx={{ fontSize: '15px' }}>Name</TableCell>
  <TableCell align="left" sx={{ fontSize: '15px' }}>Type</TableCell>
  <TableCell align="left" sx={{ fontSize: '15px' }}>Status</TableCell>
  <TableCell align="left" colSpan={2} sx={{ fontSize: '15px' }}>Actions</TableCell>
  <TableCell align="left" sx={{ fontSize: '15px' }}>Address</TableCell>
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
               <TableCell align="left">
                <Edit id={row.id} row={row}    />
               </TableCell>
               <TableCell align="left">
                <ChangeStatus  id={row.id} Area_status={row.Area_status}  />
                </TableCell>
              <TableCell align="left">{row.Address} </TableCell>
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
      </div>
  );
}