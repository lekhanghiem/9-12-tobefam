'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Area } from '@/types/types';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchArea } from '@/store/features/Area/SearchAreaSlice';

interface SearchContextType {
  searchAreas: Area[];
  handleSearch: (search: string, category: number) => void;
}

// Tạo context
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchAreas, setSearchAreas] = useState<Area[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  // Lấy dữ liệu tìm kiếm từ Redux store
  const data = useSelector((state: any) => state.Search.data);

  const handleSearch = (search: string, category: number) => {
    const payload = { category, search };
    dispatch(searchArea(payload)); // Dispatch hành động tìm kiếm
  };

  useEffect(() => {

    if (data?.areas) {
      setSearchAreas(data.areas);

    }
  }, [data]);
  console.log(data?.areas,'data');
  return (
    <SearchContext.Provider value={{ searchAreas, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};