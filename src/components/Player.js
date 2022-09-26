import React, {useEffect, useState} from 'react';

function Player(props) {

  const {url, songName, saveSong, savedSongs} = props;
  const [isCurrentSongSaved, setIsCurrentSongSaved] = useState(false)
  const saveSongCallback = () => {
    saveSong({name: songName, url: url})
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

  }, [savedSongs, songName])


  return (
    <footer>
      <div className="current-song">
        <span>Currently playing: {songName}</span>
        {!isCurrentSongSaved && <button className="save-button" type="button" onClick={saveSongCallback}>Save</button>}  
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