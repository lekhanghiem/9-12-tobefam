'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Area } from '@/types/types';
import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchArea } from '@/store/features/Area/SearchAreaSlice';
import { useListAreaQuery } from '@/store/features/Area/ListAreaRTK';

// Adjust the interface for the Areas response
interface AreasResponse {
  data: {
    data: any;
    areas: Area[];
    totalPages: number;
  };
}

interface SearchContextType {
  searchAreas: Area[];
  handleSearch: (search: string, category: number) => void;
  areas: Area[];
  page: number;
  refetch: () => void;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalPages: number | undefined;
}

// Create context
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchAreas, setSearchAreas] = useState<Area[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const datas = useSelector((state: any) => state.Search.data);

  const handleSearch = (search: string, category: number) => {
    const payload = { category, search };
    dispatch(searchArea(payload));
  };

  useEffect(() => {
    if (datas?.areas) {
      setSearchAreas(datas.areas);
    }
  }, [datas]);

  const [page, setPage] = useState<number>(1);

  // Query with pagination using RTK Query
  const { data, refetch } = useListAreaQuery<AreasResponse>(`?page=${page}`);
  const areas: Area[] = data?.data?.areas || [];
  const totalPages = data?.data?.totalPages;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // useEffect(() => {
  //   refetch();
  // }, [page, refetch]);

  return (
    <SearchContext.Provider
      value={{
        searchAreas,
        handleSearch,
        areas,
        page,
        refetch,
        handlePageChange,
        totalPages,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Example usage of the SearchContext in a component
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
