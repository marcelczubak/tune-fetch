import React from 'react';
import RefreshButton from './buttons/RefreshButton';
import SearchResults from './SearchResults';
import NewPlaylist from './NewPlaylist';

const SongView = ({ searchResults, addToPlaylist, customPlaylist, removeFromPlaylist, savePlaylist, playlistName, setPlaylistName,  refresh, playlistToView, setPlaylistToView, setPlaylists, playlists }) => {
  return (
    <div className="max-h-[65rem] relative flex flex-row pb-6 pr-3 w-3xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-zinc-800 mb-2">
      <div className="basis-7/12 h-full overflow-y-auto p-4">
        <SearchResults songs={searchResults} onAdd={addToPlaylist} />
        <div className="text-center relative bottom-4">
          {searchResults.length === 0 ? (
            <h3 className="text-gray-500/80 dark:text-gray-400">
              Search for songs to add them to your playlist!
            </h3>
          ) : (
            <h5 className="text-xs text-gray-500/80 dark:text-gray-400">
              tap + to add songs to your custom playlist
            </h5>
          )}
        </div>
      </div>
      <div className="basis-5/12 h-full overflow-y-auto py-4 px-2">
        <NewPlaylist
          songs={customPlaylist}
          onRemove={removeFromPlaylist}
          onSave={savePlaylist}
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
          playlistToView={playlistToView}
          setPlaylistToView={setPlaylistToView}
          setPlaylists={setPlaylists}
          playlists={playlists}
        />
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <RefreshButton startAgain={refresh} />
      </div>
    </div>
  );
};

export default SongView;
