import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import RemoveButton from './RemoveButton'
import SaveButton from './SaveButton';

function Player(props) {

  const {songName, songHour, url, savedSongs, saveSong, removeSong} = props;
  const [isCurrentSongSaved, setIsCurrentSongSaved] = useState(false)

  useEffect( () => {
    const songIsSaved = savedSongs.some( (song) => {
      return (song.name === songName)
    } )
    songIsSaved ? setIsCurrentSongSaved(true) : setIsCurrentSongSaved(false)
  }, [savedSongs, songName, url])

  return (
    <footer>
      <div className="current-song">
        <span>Currently playing: {songName}</span>
        {isCurrentSongSaved ? <RemoveButton removeSong={removeSong} songName={songName}/>  : <SaveButton saveSong={saveSong} songName={songName} songHour={songHour} url={url} /> }
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

Player.propTypes = {
  songName: PropTypes.string,
  songHour: PropTypes.number,
  url: PropTypes.string,
  savedSongs: PropTypes.array,
  saveSong: PropTypes.func,
  removeSong: PropTypes.func
} 