'use client'
import React, { createContext, ReactNode, useState, useContext, useEffect } from "react";
const AppRouterContext = createContext<any>(null);

export const useAppRouterContext = () => {
  return useContext(AppRouterContext);
};

interface AppProviderProps {
  children: ReactNode;
}

interface SearchContextType {

}

export const AppProvider = ({ children }: AppProviderProps) => {

  const contextValue: SearchContextType = {
  };
  return (
    <AppRouterContext.Provider value={contextValue}>
      {children}
    </AppRouterContext.Provider>
  );
};
