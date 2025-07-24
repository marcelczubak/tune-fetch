import React from 'react'
import { RxCross2 } from "react-icons/rx";

const ErrorBanner = ({ message }) => {
  return (
    <div className="flex items-center gap-3 bg-red-100 border-1 border-red-200/50 text-red-500 font-semibold px-3 py-2 rounded-md shadow-lg transition-all duration-300 z-50 w-fit">
        <RxCross2 />
        <p>{message}</p>
    </div>
  )
}

export default ErrorBanner
