import React, { useState } from 'react'
import BannerDisplay from './banners/BannerDisplay';
import SongView from './SongView';
import PlaylistView from './PlaylistView';

const View = ({ setShowPlaylistError, showPlaylistError, showError, showSearchError, setQuery, setSearchResults, searchResults }) => {

    const [customPlaylist, setCustomPlaylist] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showRefresh, setShowRefresh] = useState(false);
    const [playlists, setPlaylists] = useState([]);
    const [playlistToView, setPlaylistToView] = useState()

    const addToPlaylist = (songToAdd) => {
        if (playlistToView) {
            const updatedPlaylist = {
                ...playlistToView,
                songs: [...playlistToView.songs, songToAdd],
            };
            setPlaylistToView(updatedPlaylist);
            setPlaylists((prev) =>
                prev.map((p) => (p.id === updatedPlaylist.id ? updatedPlaylist : p))
            );
        } else {
            setCustomPlaylist([...customPlaylist, songToAdd]);
        }
        setSearchResults(searchResults.filter(song => song.trackId !== songToAdd.trackId));
    };

    const removeFromPlaylist = (songToRemove) => {
        if (playlistToView) {
            const updatedPlaylist = {
                ...playlistToView,
                songs: playlistToView.songs.filter(song => song.trackId !== songToRemove.trackId),
            };
            setPlaylistToView(updatedPlaylist);
            setPlaylists((prev) =>
                prev.map((p) => (p.id === updatedPlaylist.id ? updatedPlaylist : p))
            );
        } else {
            setCustomPlaylist(customPlaylist.filter(song => song.trackId !== songToRemove.trackId));
            setSearchResults([songToRemove, ...searchResults]); // this line 
        }
    };

    const savePlaylist = () => {
        if (playlistName.length == 0) {
            setShowPlaylistError(true);
            setTimeout(()=> {
                setShowPlaylistError(false);
            }, 3000)
        } else {
            const newPlaylist=  {
                id: Date.now(),
                name: playlistName,
                songs: [...customPlaylist],
                image: customPlaylist[0].artworkUrl100,
            };
            setPlaylists((prev)=> [newPlaylist, ...prev]);
            refresh("save");
        }
    };

    const refresh = (type) => {
        (type=='save') ? setShowSuccess(true) : setShowRefresh(true) ;
        setSearchResults([])
        setCustomPlaylist([]);
        setPlaylistName('');
        setQuery('');
        setPlaylistToView(null);
        setTimeout(() => {
            type=='save' ? setShowSuccess(false) : setShowRefresh(false);
        }, 3000);
    };

    return (
        <div>
            <BannerDisplay showRefresh={showRefresh} showSuccess={showSuccess} showError={showError} showPlaylistError={showPlaylistError} showSearchError={showSearchError}/>
            <SongView
                searchResults={searchResults}
                addToPlaylist={addToPlaylist}
                customPlaylist={customPlaylist}
                removeFromPlaylist={removeFromPlaylist}
                savePlaylist={savePlaylist}
                playlistName={playlistName}
                setPlaylistName={setPlaylistName}
                refresh={refresh} 
                playlistToView={playlistToView}
                setPlaylistToView={setPlaylistToView}
                setPlaylists={setPlaylists}
                playlists={playlists}
                />
            <PlaylistView playlists={playlists} setPlaylistToView={setPlaylistToView} playlistToView={playlistToView}/>
        </div>
    )
}

export default View
