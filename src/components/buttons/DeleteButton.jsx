import React from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";

const DeleteButton = ({ deletePlaylist }) => {
  return (
    <button onClick={deletePlaylist} className='p-1 rounded-full bg-rose-100 dark:bg-rose-700 shadow-lg hover:cursor-pointer group hover:scale-105 transition-all duration-150'>
        <MdOutlineDeleteForever className=' text-rose-700 dark:text-rose-100' size={22}/>
    </button>
  )
}

export default DeleteButton
