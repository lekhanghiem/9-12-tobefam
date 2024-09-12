'use client';
import { useState, useEffect } from 'react';
import axiosIns from '../../../store/api/axiosIns';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTranslations } from 'next-intl';

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

interface Image {
  url: string;
}

type SearchResult = {
  id: number;
  User_id: number;
  Area_type: number;
  Name: string;
  Address: string;
  Image: Image;
  description: string;
  Area_status: number;
};

type ApiResponse = {
  status: string;
  message: string;
  data: SearchResult[];
};

interface SearchAreaProps {
  onSearchResults: (results: SearchResult[]) => void;
}

const SearchArea: React.FC<SearchAreaProps> = ({ onSearchResults }) => {
  const [category, setCategory] = useState<'1' | '2' | '3'>('1');
  const [search, setSearch] = useState<string>('');
  const [type, setType] = useState<string>('1');
  const [status, setStatus] = useState<string>('1');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchResults = async (query: string = '', cat: string = '') => {
    try {
      const token = localStorage.getItem('accessToken') || '';

      const requestData = {
        category: cat,
        search: query,
      };

      setLoading(true);
      setError(null);

      const response = await axiosIns.post<ApiResponse>(
        'search/area',
        requestData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.status === 'success') {
        onSearchResults(response.data.data);
      } else {
        setError('No results found or there was an error.');
        onSearchResults([]);
      }
    } catch (error) {
      setError('Error fetching search results. Please try again.');
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (category === '1') {
        fetchResults(search, category);
      } else if (category === '2') {
        fetchResults(type, category);
      } else if (category === '3') {
        fetchResults(status, category);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, category, type, status]);

  const t = useTranslations('a');

  return (
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
              setSearch('');
              setType('1'); // Reset to default type
              setStatus('1'); // Reset to default status
            }}
          >
            <MenuItem value="1">{t('Tên đối tượng')}</MenuItem>
            <MenuItem value="2">{t('Vùng sản xuất')}</MenuItem>
            <MenuItem value="3">{t('Trạng Thái')}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {category === '1' && (
        <fieldset>
          <div>
            <Search
              sx={{
                bgcolor: 'white',
                '&.Mui-focused': {
                  backgroundColor: 'white',
                },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{
                  '&:hover': {
                    transform: 'scale(1.15)',
                  },
                }}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('Tìm kiếm')}
                inputProps={{ 'aria-label': 'Search' }}
              />
            </Search>
          </div>
        </fieldset>
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

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default SearchArea;
