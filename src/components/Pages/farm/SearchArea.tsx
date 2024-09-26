import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchArea } from '@/store/features/todos/SearchAreaSlice';
import { useAppSelector } from '@/store/hooks';

function SearchArea(props: any) {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState< number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      category: category,
      search: search.toString(),
    };
    dispatch(searchArea(payload));
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <button onClick={handleSearch}>123</button>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by name ..."
          inputProps={{ 'aria-label': 'search' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Cập nhật state search
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as number)} // Cập nhật state category
          displayEmpty
          inputProps={{ 'aria-label': 'Category' }}
        >
          <MenuItem value={1}>Name</MenuItem>
          <MenuItem value={2}>Type</MenuItem>
          <MenuItem value={3}>Status</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SearchArea;