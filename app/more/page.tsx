'use client'
import { MoreManga } from '@/components';
import { useSearchParams } from 'next/navigation'
import React from 'react';

const page = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get("page");
    const params = searchParams.get("title");

  return (
    <div className='w-full h-screen overflow-y-scroll'>
      <MoreManga pageNumber={page} titleManga={params} />
    </div>
  );
}

export default page
