'use client'
import React, { createContext, ReactNode, useState, useContext } from "react";
import { Area } from '@/types/types';

// Define the context
const AppRouterContext = createContext<any>(null);

// Create a custom hook for easier access to the context
export const useAppRouterContext = () => {
  return useContext(AppRouterContext);
};

interface AppProviderProps {
  children: ReactNode;
}

interface SearchContextType {
  searchResults: Area[];
  setSearchResults: (results: Area[]) => void;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  // Define your search results state
  const [searchResults, setSearchResults] = useState<Area[]>([]);

  // Define the context value to include search results and setter function
  const contextValue: SearchContextType = {
    searchResults,
    setSearchResults,
  };

  return (
    <AppRouterContext.Provider value={contextValue}>
      {children}
    </AppRouterContext.Provider>
  );
};
