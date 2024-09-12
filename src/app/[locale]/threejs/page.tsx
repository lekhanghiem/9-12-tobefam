'use client'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { actionText } from '@/store/features/todos/TextSlice';
import { useAppSelector } from '@/store/hooks';
import { Area ,TextState} from '@/types/types';
import { Button } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Area_type', headerName: 'Area Type', width: 130 },
  { field: 'Address', headerName: 'Address', width: 200 },
  { field: 'Image', headerName: 'Image URL', width: 150 },
  { field: 'description', headerName: 'Description', width: 200 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data } = useAppSelector((state) => state.TextSlice.text);

  // State to manage the area list
  const arealist =useSelector((state:any) => state.TextSlice.text.data.data)

  useEffect(() => {
    dispatch(actionText());
  }, [dispatch]);

  // Update the state when data is available
  useEffect(() => {
  }, [data]);
console.log('list',arealist);
  const rows =
      arealist?.map((area: Area) => ({
        id: area.id,
        Name: area.Name,
        Area_type: area.Area_type,
        Address: area.Address,
        Image: area?.Image?.url || 'N/A',
        description: area.description,
      }))

  return (
    <div>
      <Paper sx={{ height: 400, width: '100%' }}>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        )}
      </Paper>
    </div>
  );
}
