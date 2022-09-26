import React, { useEffect, useState } from 'react';
import { FaPlusSquare, FaMinusSquare, FaPlayCircle } from "react-icons/fa"

function Player(props) {

  const {url, songName, savedSongs, saveSong, removeSong} = props;
  const [isCurrentSongSaved, setIsCurrentSongSaved] = useState(false)
  
  const saveSongCallback = () => {
    saveSong({name: songName, url: url})
  }

  const removeSongCallback = () => {
    removeSong({name: songName})
  }

  useEffect( () => {
    // Is the current song saved?
    let saved = savedSongs.some( (song) => {
      return (song.name === songName)
    } )
    if(saved) {
      setIsCurrentSongSaved(true)
    } else {
      setIsCurrentSongSaved(false)
    }

  }, [savedSongs, songName, url])


  return (
    <footer>
      <div className="current-song">
        <span>Currently playing: {songName}</span>
        {!isCurrentSongSaved && <button className="save-button" type="button" onClick={saveSongCallback}><FaPlusSquare/></button>}
        {isCurrentSongSaved && <button className="remove-button" type="button" onClick={removeSongCallback}><FaMinusSquare/></button>}  
      </div>
      <div className="playButton">
        {url && <audio src={url} controls loop autoPlay={true}></audio>}
      </div>
      <div className="volumeControl">

      </div>
    </footer>
  )
}

export default Player