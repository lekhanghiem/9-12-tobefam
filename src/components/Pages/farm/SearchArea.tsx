import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { SearchContext } from '@/context/AppContext';

function SearchArea(props: any) {
   const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<number>(1);
const  {handleSearch}  = useContext(SearchContext)||{};


const handleClick = () => {
  if (!handleSearch) {
    throw new Error('err');
  }
  handleSearch(search, category);
};
  return (
    <Box sx={{ display: 'flex',  gap: 3 }}>
<FormControl sx={{ minWidth: 100,width:'20%' }}>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as number)} // Update category state
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
          <IconButton onClick={handleClick} sx={{ ml: 1 }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Paper>

        ) : category === 2 ? (
                <FormControl sx={{ minWidth: 120 }}>
        <Select sx={{ width:'100%' }}
          value={search}
            onChange={(e) => setSearch(e.target.value)} // Update category state
          displayEmpty
          inputProps={{ 'aria-label': 'Category' }}
        >
          <MenuItem value={1}onClick={handleClick}>Vegetable Farming(Olericulture)</MenuItem>
          <MenuItem value={2}onClick={handleClick}>	Fruit Farming (Pomology)</MenuItem>
        </Select>

      </FormControl>
        ) : category === 3 ? (
        <FormControl sx={{ minWidth: 120,width:'95%' }}>
        <Select sx={{ width:'100%' }}
          value={search}
            onChange={(e) => setSearch(e.target.value)} // Update category state
          displayEmpty
          inputProps={{ 'aria-label': 'Category' }}
        >
          <MenuItem value={1}onClick={handleClick}>	Stop production</MenuItem>
          <MenuItem value={2}onClick={handleClick}>In production</MenuItem>
        </Select>

      </FormControl>
        ) : null}




    </Box>
  );
}

export default SearchArea;
