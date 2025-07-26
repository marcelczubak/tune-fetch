import React from 'react'
import { IoRefreshOutline } from "react-icons/io5";

const RefreshButton = ({ startAgain }) => {
  return (
    <button onClick={startAgain}className='p-1 rounded-full bg-white/15 shadow-lg relative top-0.5 hover:cursor-pointer group hover:bg-white transition-all duration-150'>
      <IoRefreshOutline className='group-hover:text-indigo-800/80 text-gray-500 dark:text-gray-100' size={18}/>
    </button>
  )
}

export default RefreshButton