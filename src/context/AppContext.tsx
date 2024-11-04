'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Area, User } from '@/types/types';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchArea } from '@/store/features/Area/SearchAreaSlice';

interface SearchContextType {
  searchAreas: Area[];
  handleSearch: any;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalPages: number | undefined;
  category: string;
  search: string;
  loading:boolean;
}

// Create context
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchAreas, setSearchAreas] = useState<Area[]>([]);
  const [category, setCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const {error,data,loading} = useSelector((state: any) => state.Search);

  const handleSearch = async (newSearch: string, newCategory: string) => {
    setSearch(newSearch);
    setCategory(newCategory);

    const payload = { category: newCategory, search: newSearch, page };
    const result = await dispatch(searchArea(payload));
    setSearchAreas(result?.payload?.areas || []);
  };

  const handlePageChange = async (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    const payload = { category, search, page: value };
    const result = await dispatch(searchArea(payload));
    setSearchAreas(result?.payload?.areas || []);

  };

  const totalPages =data?.totalPages;

  return (
    <SearchContext.Provider
      value={{
        searchAreas,
        handleSearch,
        page,
        handlePageChange,
        totalPages,
        category,
        search,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
