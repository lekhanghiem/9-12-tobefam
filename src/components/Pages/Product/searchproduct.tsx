'use client'
import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { searchProduct, setCategory, setSearch } from '@/store/features/Product/SearchProductSlice';
import { Product } from '@/types/types';
import { SearchContext } from '@/context/AppContext';
interface SearchProps{
  page:number
  searchProducts:Product[];
}
const SearchProduct: React.FC<SearchProps> = ({ page,searchProducts }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, search  } = useSelector((state: any) => state?.SearchSlice);

useEffect(() => {
    const timer = setTimeout(() => {
      handleClick();
    }, 500);

    return () => clearTimeout(timer);
  }, [category, search, page]);

const handleClick = async() => {
    const payload = { category, search, page };
   await dispatch(searchProduct(payload));

  };

  const handleCategoryChange = (event:SelectChangeEvent<any>) => {
    const selectedCategory = event.target.value as number;
    dispatch(setCategory(selectedCategory)); // Dispatch the action to update the category in Redux
  };

  const handleSearchChange = (event: any) => {
    dispatch(setSearch(event.target.value)); // Dispatch the action to update the search input in Redux
  };
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <FormControl sx={{ minWidth: 100, width: '20%' }}>
        <Select
          value={category}
        onChange={handleCategoryChange}
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
               onChange={handleSearchChange}
            />
            <IconButton sx={{ ml: 1 }} aria-label="search" >
              <SearchIcon />
            </IconButton>
          </Box>
        </Paper>
      ) : category === 2 ? (
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            sx={{ width: '100%' }}
            value={search}
             onChange={handleSearchChange}
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
     onChange={handleSearchChange}
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

export default SearchProduct;
