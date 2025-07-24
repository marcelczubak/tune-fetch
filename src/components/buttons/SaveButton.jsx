import React from 'react'

const SaveButton = ({ onSave, songs }) => {

  return (
    <button disabled={songs.length == 0} onClick={onSave} className={`bg-rose-800/80 shadow-md text-sm font-bold tracking-wide uppercase py-3 px-5 text-white rounded-xl ${songs.length == 0 ? 'opacity-40' : 'hover:cursor-pointer hover:scale-105 transition-transform duration-250' }`}> 
        Save Playlist
    </button>
  )
}

export default SaveButton
