import { useEffect, useState } from "react";

function SavedList(props) {
  const {savedSongs} = props;
  const [songComponents, setSongComponents] = useState([])

  // useEffect(() => {
  //   // console.log({songComponents})
  // }, [songComponents])

  useEffect(() => {
    
    setSongComponents((previousState) => {
      let newComponent = savedSongs.map( (song) => {
        return (<p>
          {song.name}
        </p>)
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