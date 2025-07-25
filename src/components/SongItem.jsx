import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const SongItem = ({ songName, songArtist, albumName, onAdd, onRemove, isInPlaylist, imageUrl, viewTrack, viewArtist, viewAlbum, showDeleteItem }) => {
  return (
    <div className="relative overflow-hidden w-full rounded-md">
      <div>
        <img className="scale-250 absolute inset-0 w-full h-full object-cover rounded-md pointer-events-none select-none blur-lg" src={imageUrl} alt="album art background" />
        <div className="z-60 bg-gray-600/30 dark:bg-gray-900/40 absolute inset-0 w-full h-full object-cover rounded-md pointer-events-none select-none" />
      </div>

      <div className="relative flex items-center justify-between px-3 py-1.5 rounded-md z-90">
        <div className="flex items-center flex-1 min-w-0">
          <div className="w-8 flex justify-center mr-3 shrink-0">
            <img className="h-8 w-8 rounded-sm" src={imageUrl} alt="album art" />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <a href={viewTrack} className="hover:underline text-white font-semibold text-lg tracking-wide truncate dark:text-white">{songName}</a>
            <h3 className="text-white/90 font-medium text-sm truncate dark:text-gray-300">
              {albumName ? (
                <><a href={viewArtist} className="hover:underline">{songArtist}</a>  |  <a href={viewAlbum} className="hover:underline">{albumName}</a></>
              ) : (
                <a href={viewArtist} className="hover:underline">{songArtist}</a>
              )}
            </h3>
          </div>
        </div>

        <div className="ml-3 shrink-0">
          {showDeleteItem ? (
            <button className="group w-7 h-7 rounded-full bg-white/25 hover:bg-white hover:cursor-pointer flex items-center justify-center transition dark:bg-white/10" onClick={onRemove}>
              <RxCross2 className="text-white text-xl group-hover:mix-blend-difference pointer-events-none" />
            </button>
          ) : isInPlaylist ? (
            <button className="group w-7 h-7 rounded-full bg-white/25 hover:bg-white hover:cursor-pointer flex items-center justify-center transition dark:bg-white/10" onClick={onRemove}>
              <AiOutlineMinus className="text-white text-xl group-hover:mix-blend-difference pointer-events-none" />
            </button>
          ) : (
            <button className="group w-7 h-7 rounded-full bg-white/25 hover:bg-white hover:cursor-pointer flex items-center justify-center transition dark:bg-white/10" onClick={onAdd}>
              <AiOutlinePlus className="text-white text-xl group-hover:mix-blend-difference pointer-events-none" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongItem;
