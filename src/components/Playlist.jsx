import React from 'react'
import ViewPlaylistButton from './buttons/ViewPlaylistButton'

const Playlist = ({ playlist, setPlaylistToView, playlistToView }) => {

    const togglePlaylistView = () => {
        (playlistToView?.id === playlist.id) ? setPlaylistToView(null) : setPlaylistToView(playlist);
    }

  return (
    <div className='relative w-64 h-64 shadow-lg rounded-xl flex-shrink-0 flex justify-center overflow-hidden hover:scale-[1.02] transition-all duration-300 mx-2'>
        <img className='saturate-[1.4] brightness-[1.1] scale-150 absolute opacity-90 object-cover inset-0 w-full h-full blur-md' src={playlist.image || 'https://media.pitchfork.com/photos/65770f942ea681f1383d0597/master/pass/Childish-Gambino-Because-the-Internet.jpg'}/>
        <div className='absolute inset-0 w-full h-full backdrop-blur-2xl'></div>

        <div className='relative rounded-xl bg-radial w-full h-full py-5 px-2 flex items-end'>
            <div className='flex px-4 items-center justify-between w-full'>
                <h1 className='z-40 text-white font-semibold text-xl text-shadow-md'>{playlist.name || 'untitled'}</h1>
                <ViewPlaylistButton togglePlaylistView={togglePlaylistView} displayBackButton={playlistToView?.id === playlist.id}/>
            </div>
        </div>
    </div>   
  )
}
export default Playlist