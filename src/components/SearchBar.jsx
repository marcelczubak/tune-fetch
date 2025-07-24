import React from 'react'
import SearchButton from './buttons/SearchButton';

const SearchBar = ({ query, setQuery, fetchSongs }) => {

    return (
        <div className='flex w-1/2 justify-between h-14 gap-4'>
            <input
                className='border-2 border-gray-200 bg-zinc-200/70 flex grow items-center rounded-lg focus:border-rose-600 focus:outline-none p-4 hover:cursor-pointer hover:placeholder-slate-600'
                placeholder='search for song and artist...'
                type='text'
                onChange={(e)=>setQuery(e.target.value)}
                onKeyDown={(e)=> {if(e.key === 'Enter') {fetchSongs(query)}}}
                value={query}
            />
            <SearchButton handleSearch={()=>fetchSongs(query)} />
        </div>
    )
}

export default SearchBar
