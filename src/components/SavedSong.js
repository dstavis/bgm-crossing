import { FaPlayCircle, FaPlusSquare, FaMinusSquare } from "react-icons/fa"

function SavedList(props) {
  const {songName, removeSong} = props;
  
  const removeSongCallback = () => {
    removeSong({name: songName})
  }

  return (
    <div className="saved-song-display">
      <span className="saved-song-name">
        {songName}
      </span>
      <button type="button" className="play-button"><FaPlayCircle/></button>
      <button type="button" className="remove-button" onClick={removeSongCallback}><FaMinusSquare/></button>
    </div>
    )
}

export default SavedList