"use client";
import { searchValueProps } from '@/types';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const SearchBar = ({searchValue, setSearchValue} : searchValueProps) => {
    
  return (
    <div className='flex-grow w-full h-20 bg-neutral-600'>
      <header className="text-white sticky top-0 h-20 z-10 text-4xl flex items-center px-8">
        <MagnifyingGlassCircleIcon className="absolute top-7 left-10 text-neutral-800 h-6 w-6" />
        <input
          className="rounded-full bg-white w-96 pl-12 text-neutral-900 text-base py-2 font-normal outline-0"
          type="text"
        />
        <button 
            className='bg-neutral-400 w-20 h-10 text-lg ms-2 rounded-full'
        >
            Search
        </button>
      </header>
    </div>
  )
}

export default SearchBar
