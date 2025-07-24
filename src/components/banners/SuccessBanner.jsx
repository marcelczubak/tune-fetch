import React from 'react'
import { FaCheck } from "react-icons/fa6";

const SuccessBanner = () => {
  return (
    <div className="flex items-center gap-3 bg-emerald-100 border-1 border-emerald-200/50 text-emerald-500 font-semibold px-3 py-2 rounded-md shadow-lg transition-all duration-300 z-50 w-fit">
        <FaCheck />
        <p>Playlist saved successfully!</p>
    </div>
  )
}

export default SuccessBanner
