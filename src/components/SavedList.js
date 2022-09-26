import { useEffect, useState } from "react";
import { FaPlayCircle, FaPlusSquare, FaMinusSquare } from "react-icons/fa"
import SavedSong from "./SavedSong"

function SavedList(props) {
  const {savedSongs, removeSong} = props;
  const [songComponents, setSongComponents] = useState([])

  // useEffect(() => {
  //   // console.log({songComponents})
  // }, [songComponents])

  useEffect(() => {
    
    setSongComponents((previousState) => {
      let newComponent = savedSongs.map( (song) => {
        return (<SavedSong songName={song.name} removeSong={removeSong}/>)
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