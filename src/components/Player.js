import React from 'react';

function Player(props) {

  return (
    <footer>
      <div className="current-song">
        <span>Currently playing: {props["file-name"]}</span>
      </div>
      <div className="playButton">
        {props.url && <audio src={props.url} controls loop autoPlay={true}></audio>}
      </div>
      <div className="volumeControl">

      </div>
    </footer>
  )
}

export default Player