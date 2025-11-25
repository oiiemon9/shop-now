'use client';

import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const value = {
    searchText,
    setSearchText,
  };
  return <SearchContext value={value}>{children}</SearchContext>;
}
