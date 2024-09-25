import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTranslations } from 'next-intl';
import { useCreateSearchAreaMutation } from '@/store/features/todos/SearchAreaRTK';
import { Area } from '@/types/types';
import ChangeStatus from './ChangeStatus'; // Import the ChangeStatus component

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: '#E0FFFF',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    transform: 'scale(1.25)',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface SearchAreaProps {
  setSearchResults: React.Dispatch<React.SetStateAction<Area[]>>;
}

const SearchArea: React.FC<SearchAreaProps> = ({ setSearchResults }) => {
  const [category, setCategory] = useState<'1' | '2' | '3'>('1');
  const [search, setSearch] = useState<string>('');
  const [type, setType] = useState<string>('1');
  const [status, setStatus] = useState<string>('1');

  const [createSearchArea, { data }] = useCreateSearchAreaMutation();
  const t = useTranslations('a');

  const handleSearch = async () => {
    const data = { category, search, type, status };
    try {
      const result = await createSearchArea(data).unwrap();
      setSearchResults(result?.data?.areas || []);
      setSearch(''); // Clear search input after success
      console.log('Search successful:', result?.data?.areas);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  useEffect(() => {
    if (search) {
      const timer = setTimeout(() => {
        handleSearch();
      }, 300); // Debounce delay
      return () => clearTimeout(timer);
    }
  }, [category, search, type, status]);

  useEffect(() => {
    if (data?.data?.areas) {
      setSearchResults(data.data.areas);
      console.log('Search results updated:', data.data.areas);
    }
  }, [data]);

  return (
    <div>
      <div className="flex gap-10">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="h-10 bg-[#1a76d3] text-white rounded-md"
              value={category}
              onChange={(e) => {
                const newCategory = e.target.value as '1' | '2' | '3';
                setCategory(newCategory);
                setSearch(''); // Reset search on category change
                setType('1');
                setStatus('1');
              }}
            >
              <MenuItem value="1">{t('Tên đối tượng')}</MenuItem>
              <MenuItem value="2">{t('Vùng sản xuất')}</MenuItem>
              <MenuItem value="3">{t('Trạng Thái')}</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {category === '1' && (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('Tìm kiếm')}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </Search>
        )}

        {category === '2' && (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="h-10 bg-[#1a76d3] text-white rounded-md"
                value={type}
                onChange={(e) => setType(e.target.value as string)}
              >
                <MenuItem value="1">{t('Vùng nuôi trồng')}</MenuItem>
                <MenuItem value="2">{t('Vùng chế biến')}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}

        {category === '3' && (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="h-10 bg-[#1a76d3] text-white rounded-md"
                value={status}
                onChange={(e) => setStatus(e.target.value as string)}
              >
                <MenuItem value="1">{t('Đang hoạt động')}</MenuItem>
                <MenuItem value="2">{t('Ngừng hoạt động')}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}

        {/* Include ChangeStatus component and pass handleSearch as a prop */}
        <ChangeStatus handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default SearchArea;
