import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { SearchContext } from '@/context/AppContext';
import { Elsie } from 'next/font/google';

function SearchArea() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<number>(1);
  const { handleSearch } = useContext(SearchContext) || {};


  useEffect(() => {
      if (!handleSearch) {
        console.error('handleSearch function is missing');
      }else
      handleSearch(search, category);
  }, [search, category]);

  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <FormControl sx={{ minWidth: 100, width: '20%' }}>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as number)}
          displayEmpty
          inputProps={{ 'aria-label': 'Category' }}
        >
          <MenuItem value={1}>Name</MenuItem>
          <MenuItem value={2}>Type</MenuItem>
          <MenuItem value={3}>Status</MenuItem>
        </Select>
      </FormControl>

      {category === 1 ? (
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
        >
          <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by name ..."
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton sx={{ ml: 1 }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </Paper>
      ) : category === 2 ? (
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            sx={{ width: '100%' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Type' }}
          >
     <MenuItem value="" disabled>
      Select Type
    </MenuItem>

            <MenuItem value={1}>Fruit Farming (Pomology)</MenuItem>
            <MenuItem value={2}>Vegetable Farming (Olericulture)</MenuItem>
          </Select>
        </FormControl>
      ) : category === 3 ? (
       <FormControl sx={{ minWidth: 120, width: '95%' }}>
  <Select
    sx={{ width: '100%' }}
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    displayEmpty
    inputProps={{ 'aria-label': 'Status' }}
  >
    <MenuItem value=""disabled>
      Select status
    </MenuItem>
    <MenuItem value={1}>In production</MenuItem>
    <MenuItem value={2}>Stop production</MenuItem>
  </Select>
</FormControl>
      ) : null}
    </Box>
  );
}

export default SearchArea;
