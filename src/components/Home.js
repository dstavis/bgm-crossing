import Player from "./Player"

function Home({song}) {
  return (
    <>
      {/* <h2>Home</h2> */}
      <Player url={song && song["music_uri"]}/>
    </>
  )
}

export default Home