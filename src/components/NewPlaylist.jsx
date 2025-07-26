import React from 'react'
import SongItem from './SongItem'
import SaveButton from './buttons/SaveButton'
import DeleteButton from './buttons/DeleteButton';

const NewPlaylist = ({ songs, onRemove, onSave, playlistName, setPlaylistName, playlistToView, setPlaylistToView, setPlaylists, playlists }) => {
  const isViewing = !!playlistToView;
  const songsToRender = isViewing ? playlistToView.songs : songs;

  const deletePlaylist = (playlistToDelete) => {
    setPlaylists(playlists.filter((playlist)=> (
        playlistToDelete.id !== playlist.id
    )));
    setPlaylistToView(null);
  }

  return (
    <div className='flex flex-col justify-between h-full pb-4 bg-stone-200/80 min-h-[20rem] rounded-lg mb-4 shadow-md dark:bg-white/10'>
      <div className='pt-6 px-4'>
        {!isViewing && (
          <input
            className='focus:outline-none mb-4 text-3xl text-black/60 font-semibold w-full bg-gray-900/5 rounded-md px-2 py-1 caret-rose-600 dark:bg-stone-900 dark:text-gray-300 dark:placeholder:text-gray-500'
            placeholder='my playlist...'
            type='text'
            onChange={(e) => setPlaylistName(e.target.value)}
            value={playlistName}
          />
        )}

        {isViewing && 
        <div className='flex items-center justify-between'>
            <div className='px-2 relative mb-2'>
                <h4 className='uppercase text-sm font-bold text-gray-400 dark:text-gray-500'>Currently Viewing</h4>
                <h2 className='mb-4 text-3xl text-gray-900 font-semibold dark:text-gray-200'>{playlistToView.name}</h2>
            </div>
            <div className='mr-1'>
                <DeleteButton deletePlaylist={() => deletePlaylist(playlistToView)}/>
            </div>
        </div>    
        }

        {(isViewing && songsToRender.length == 0) && <h3 className='text-gray-500/80 text-center dark:text-gray-400'>Your playlist is empty</h3>}

        <div className='flex flex-col gap-2 max-h-[46.5rem] overflow-y-auto relative bottom-2'>
          {songsToRender.map((song) => (
            <div className='flex-shrink-0' key={song.trackId}>
              <SongItem
                onRemove={() => onRemove(song)} 
                songName={song.trackName}
                songArtist={song.artistName}
                isInPlaylist={true}
                showDeleteItem={isViewing ? true : false}
                imageUrl={song.artworkUrl100}
                viewArtist={song.artistViewUrl}
                viewTrack={song.trackViewUrl}
                viewAlbum={song.collectionViewUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {!isViewing && (
        <div className='flex flex-col items-center gap-2'>
          <h3 className='dark:text-gray-300'>{songs.length === 1 ? '1 song' : `${songs.length} songs`}</h3>
          <SaveButton songs={songs} onSave={onSave} />
        </div>
      )}
    </div>
  );
};

export default NewPlaylist;
