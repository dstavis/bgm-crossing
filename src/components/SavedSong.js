import PropTypes from "prop-types"
import { FaPlayCircle, FaMinusSquare } from "react-icons/fa"

function SavedSong(props) {
  const {songName, songHour, removeSong, changeSelectedHour} = props;
  
  const removeSongCallback = () => {
    removeSong({name: songName})
  }

  const playSavedSongCallback = () => {
    changeSelectedHour(songHour)
  }

  return (
    <div className="saved-song-display">
      <span className="saved-song-name">
        {songName}
      </span>
      <button type="button" className="play-button" onClick={playSavedSongCallback}><FaPlayCircle/></button>
      <button type="button" className="remove-button" onClick={removeSongCallback}><FaMinusSquare/></button>
    </div>
    )
}

export default SavedSong

SavedSong.propTypes = {
  songName: PropTypes.string,
  songHour: PropTypes.number,
  removeSong: PropTypes.func,
  changeSelectedHour: PropTypes.func
} 