import React from 'react';
// import { Howl, Howler } from 'howler';

function Player({url}) {

  return (
    <>
      <h2>Player</h2>
      {url && <audio src={url} controls loop autoPlay={true}></audio>}
    </>
  )
}

export default Player