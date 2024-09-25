import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSearchAreaMutation } from '@/store/features/todos/SearchAreaRTK';
import { Area } from '@/types/types';
import { useAppRouterContext } from '@/context/AppContext';

function SearchArea() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(1);
  const [type, setType] = useState<number | string>('');
  const [status, setStatus] = useState<number | string>('');

  const [searchArea, { data, error, isLoading }] = useSearchAreaMutation();

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [search, type, status]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value as number);
    setSearch('');
    setType('');
    setStatus('');
  };

  const handleSearch = async () => {
    let payload: any = {};

    if (category === 1 && search.trim()) {
      payload = { search, category };
    } else if (category === 2 && type) {
      payload = { search: type, category };
    } else if (category === 3 && status) {
      payload = { search: status, category };
    }

    if (Object.keys(payload).length > 0) {
      try {
        await searchArea(payload);
        console.log('Searching with payload:', payload);
      } catch (err) {
        console.error('Error during search:', err);
      }
    } else {
      console.log('Please fill in the required fields');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <FormControl sx={{ minWidth: 120 }}>
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
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the form from reloading the page
              handleSearch();
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by name ..."
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={handleSearchChange}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        ) : category === 2 ? (
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <Select
              labelId="type-select-label"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="" disabled>
                Select Region
              </MenuItem>
              <MenuItem value="1">Region A</MenuItem>
              <MenuItem value="2">Region B</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="">Select Status</MenuItem>
              <MenuItem value="1">Active</MenuItem>
              <MenuItem value="2">Inactive</MenuItem>
            </Select>
          </FormControl>
        )}
      </Box>

      {/* Display search results */}
      {/* You can add a component here to display searchResults */}
    </Box>
  );
}

export default SearchArea;
