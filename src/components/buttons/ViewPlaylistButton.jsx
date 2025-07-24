import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";


const ViewPlaylistButton = ({ togglePlaylistView, displayBackButton }) => {
  return (
    <button onClick={togglePlaylistView}className='p-1 rounded-full bg-white/15 shadow-lg hover:cursor-pointer group hover:bg-white transition-all duration-150'>
        {displayBackButton ? 
        <IoMdArrowBack className='group-hover:text-rose-800/80 text-white' size={22}/> :
        <MdMenuOpen className='group-hover:text-rose-800/80 text-white' size={22}/>
        }
    </button>
  )
}

export default ViewPlaylistButton
