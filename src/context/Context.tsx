'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SearchContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Initialize the Context with a default undefined value
export const Context = createContext<SearchContextType | undefined>(undefined);
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState('');
  return (
    <Context.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Custom hook to use the Search Context
export const useSearch = (): SearchContextType => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
