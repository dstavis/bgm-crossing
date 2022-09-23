import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink  } from 'react-router-dom';
// import { Howl, Howler } from 'howler';
// Components
import Home from "./components/Home"
import Favorites from "./components/Favorites"
import { allSongs, getSongs } from './api-calls';


function App() {

  const [song, setSong] = useState(null)
  useEffect( () => {
    const hour = new Date().getHours()
    getSongs().then((data) => { return setSong(data[`BGM_24Hour_${hour}_Sunny`])})
    return () => {}
  }, [])

  return (
    <div className="App">
      <header>
        <h1>BGM Crossing</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home song={song}/>}>
          </Route>
          <Route path="/favorites" element={<Favorites />}>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
