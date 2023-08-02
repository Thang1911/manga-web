'use client'
import { searchValueProps } from '@/types'
import { searchManga } from '@/utils'
import React from 'react'
import { useState, useEffect } from "react";

const SearchManga =  ({searchValue}: searchValueProps) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const results = async() => {
      const listSearch = await searchManga(searchValue);
      
      console.log(listSearch)
    }
    results();
  }, [searchValue]);
 
  return (
    <div>
      
    </div>
  )
}

export default SearchManga
