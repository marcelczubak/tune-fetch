import React from 'react'
import { IoRefreshOutline } from "react-icons/io5";

const RefreshBanner = () => {
  return (
    <div className="flex items-center gap-3 bg-yellow-100 border-1 border-yellow-200/50 text-yellow-500 font-semibold px-3 py-2 rounded-md shadow-lg transition-all duration-300 z-50 w-fit">
        <IoRefreshOutline />
        <p>Refresh successful!</p>
    </div>
  )
}

export default RefreshBanner
