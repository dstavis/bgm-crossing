import { useEffect, useState } from "react";
import SavedSong from "./SavedSong"

function SavedList(props) {
  const {savedSongs, removeSong, changeSong} = props;
  const [songComponents, setSongComponents] = useState([])

  useEffect(() => {
    
    setSongComponents((previousState) => {
      let newComponent = savedSongs.map( (song) => {
        return (<SavedSong songName={song.name} songHour={song.hour} removeSong={removeSong} changeSong={changeSong} />)
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