import React from 'react'
import Playlist from './Playlist'

const PlaylistView = ({ playlists, setPlaylistToView, playlistToView }) => {
  return (
    <div className='flex flex-col px-auto py-6 w-3xl mx-auto rounded-lg shadow-lg dark:bg-zinc-800'>
        <h2 className='mb-4 text-3xl text-gray-900 font-semibold ml-10 dark:text-gray-200'>Playlists</h2>
        <div className='flex justify-center pl-10 pr-4'>
            <div className='flex justify-start gap-6 overflow-x-auto w-[51rem] py-4 -my-4 px-4 -mx-4'>
                {playlists.length === 0 && <h3 className='text-gray-500/80 dark:text-gray-400'>You haven't created any playlists yet!</h3>}
                {playlists.map((playlist) => (
                    <Playlist
                        key={playlist.id}
                        playlist={playlist}
                        setPlaylistToView={setPlaylistToView}
                        playlistToView={playlistToView}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default PlaylistView
