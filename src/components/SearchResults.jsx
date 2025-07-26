import React from 'react'
import SongItem from './SongItem'

const SearchResults = ({ songs, onAdd }) => {
  return (
    <div className='p-6'>
        <h2 className='mb-4 px-2 text-3xl text-gray-900 font-semibold dark:text-gray-100'>Results</h2>
        <div className='flex flex-col gap-2'>
            {songs.slice(0,9).map((song)=> (
                <SongItem onAdd={() => onAdd(song)} songName={song.trackName} songArtist={song.artistName} albumName={song.collectionName} key={song.trackId} isInPlaylist={false} imageUrl={song.artworkUrl100} viewArtist={song.artistViewUrl} viewTrack={song.trackViewUrl} viewAlbum={song.collectionViewUrl}/>
            ))}
        </div>
    </div>
  )
}

export default SearchResults
