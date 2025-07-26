import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import View from './components/View';
import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showError, setShowError] = useState(false);
  const [showPlaylistError, setShowPlaylistError] = useState(false);
  const [showSearchError, setShowSearchError] = useState(false);
  const [searchedOnce, setSearchedOnce] = useState(false);

  async function fetchSongs(query) {
    if (query.length > 0) {
      const res = await fetch(`https://itunes.apple.com/search?media=music&attribute=mixTerm&country=IE&term=${encodeURIComponent(query)}&limit=30`);
      const data = await res.json();
      console.log(data.results);
      if (data.results.length > 0) {
        setSearchResults(data.results);
        setQuery('');
        setSearchedOnce(true);
      } else {
        setShowSearchError(true);
        setTimeout(() => setShowSearchError(false), 3000);
      }
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  }

  return (
    <div className="bg-stone-100 dark:bg-zinc-900 min-w-4xl max-w-5xl py-8 rounded-2xl border border-rose-100 dark:border-rose-700/20 shadow-2xl shadow-rose-300/30 dark:shadow-rose-500/25 flex flex-col">
        
        <div className="p-6">
            <div className="flex justify-center mb-8">
              <NavBar />
            </div>
            <div className="flex justify-center">
              <SearchBar fetchSongs={fetchSongs} setQuery={setQuery} query={query} />
            </div>
        </div>

        {searchedOnce && 
        <>
            <hr className="border-t border-gray-200 dark:border-gray-700 mx-6 my-3" />
            <div className="flex-grow p-6">
                <View 
                  showError={showError} 
                  setShowPlaylistError={setShowPlaylistError}
                  showPlaylistError={showPlaylistError}
                  showSearchError={showSearchError}
                  searchResults={searchResults} 
                  setQuery={setQuery} 
                  setSearchResults={setSearchResults}  
                />
            </div>
        </>
        }
    </div>
  );
}

export default App;
