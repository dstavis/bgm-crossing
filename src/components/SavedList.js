import { useEffect, useState } from "react";
import SavedSong from "./SavedSong"

function SavedList(props) {
  const {savedSongs, removeSong, changeSelectedHour} = props;
  const [songComponents, setSongComponents] = useState([])

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
      {songComponents}
    </section>
  )
}

export default SavedList