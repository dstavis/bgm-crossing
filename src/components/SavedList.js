import PropTypes from "prop-types"
import { useEffect, useState } from "react";
import SavedSong from "./SavedSong"
import { FaPlusSquare } from "react-icons/fa"

function SavedList(props) {
  const {savedSongs, removeSong, changeSelectedHour} = props;
  const [songComponents, setSongComponents] = useState([])

  const errorMessage = (<h3>...psst...looks like there's nothing saved yet...<br></br><small>try the <FaPlusSquare/> button next to the currently playing song</small></h3>)

  useEffect(() => {
    
    setSongComponents((previousState) => {
      let newComponent = savedSongs.map( (song) => {
        return (<SavedSong key={song.hour} songName={song.name} songHour={song.hour} removeSong={removeSong} changeSelectedHour={changeSelectedHour} />)
      } )

      return ( newComponent )
    })
  }, [savedSongs])

  return (
    <section className="saved-songs">
      <h2>Saved Tracks</h2>
      {songComponents.length ? songComponents : errorMessage }
      
    </section>
  )
}

export default SavedList

SavedList.propTypes = {
  savedSongs: PropTypes.array,
  removeSong: PropTypes.func,
  changeSelectedHour: PropTypes.func
} 