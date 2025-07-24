import React from 'react'
import Playlist from './Playlist'

const PlaylistView = ({ playlists, setPlaylistToView, playlistToView }) => {
  return (
    <div className='flex flex-col px-auto py-6 w-4/5 max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg'>
        <h2 className='mb-4 text-3xl text-gray-900 font-semibold ml-10'>Playlists</h2>
        <div className='flex justify-center pl-10 pr-4'>
            <div className='flex justify-start gap-6 overflow-x-scroll w-[51rem]'>
                {playlists.length == 0 && <h3 className='text-gray-500/80'>You haven't created any playlists yet!</h3>}
                {playlists.map((playlist)=>(
                    <Playlist key={playlist.id} playlist={playlist} setPlaylistToView={setPlaylistToView} playlistToView={playlistToView} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default PlaylistView
