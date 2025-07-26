import React from 'react'
import { TbMusicSearch } from "react-icons/tb";

const SearchButton = ({ handleSearch }) => {

  return (
    <button onClick={handleSearch} className='bg-rose-100 dark:bg-rose-700 w-14 h-14 rounded-lg hover:cursor-pointer flex flex-none group items-center justify-center hover:shadow-rose-100/50'>
        <TbMusicSearch className='transition-transform duration-250 text-rose-700 dark:text-rose-100 text-2xl font-bold group-hover:scale-110 group-hover:font-extrabold' />
    </button>
  )
}

export default SearchButton
