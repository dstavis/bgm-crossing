import { getSongs } from './api-calls';
// Dependencies
import React, { useState, useEffect} from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
// Components
import Clock from './components/Clock';
import SavedList from './components/SavedList';
import Player from './components/Player';
import Missing from './components/Missing';
import { translateHourNumberToString } from './utility';


function App() {

  const [useRealTime, setUseRealTime] = useState(true)
  const [hour, setHour] = useState(new Date().getHours())
  const [selectedHour, setSelectedHour] = useState("realTime")
  const [song, setSong] = useState(null) // as URL string
  const [songName, setSongName] = useState(null) // as string
  const [savedSongs, setSavedSongs] = useState([])

  // useEffect( () => {
  //   console.log(savedSongs)
  // })

  useEffect( () => {
    changeSong(hour)
  }, [])

  useEffect(() => {
    if(useRealTime) {
      changeSong(hour)
    }
  }, [hour])

  useEffect(() => {
    if(!useRealTime) {
      changeSong(selectedHour)
    } else {
      changeSong(hour)
    }
  }, [selectedHour])

  const changeSong = (hourInput) => {
    let hourString = String(hourInput)
    if(hourString && hourString.length < 2) {
      hourString = "0" + hourString
    }
    getSongs().then((data) => { 
      setSong(data[`BGM_24Hour_${hourString}_Sunny`]["music_uri"])
      const hourOfSong = data[`BGM_24Hour_${hourString}_Sunny`]["hour"]
      setSongName(translateHourNumberToString(hourOfSong))
    } )
  }

  const changeSelectedHour = (value) => {
    if(value === "realTime") {
      setUseRealTime(true)
      setSelectedHour(value)
    } else {
      setUseRealTime(false)
      setSelectedHour(Number(value))
    }
  }

  const saveSong = (song) => {
    setSavedSongs( (previousState) => {
      return [...previousState, song]
    })
  }

  const removeSong = (song) => {
    setSavedSongs( (previousState) => {
      let newState = Array.from(previousState)
      let foundIndex = newState.findIndex( (item) => {
        return item.name === song.name
      })
      if(foundIndex !== -1) {
        newState.splice(foundIndex, 1)
      }
      return newState
    })
  }

  return (
    <div className="App">
      <div className="wrapper">
        <header>
            <h1 className="logo">
                BGM Crossing
            </h1>
        </header>
        <main>
          <nav>
            <NavLink to="/" end>Clock</NavLink>
            <NavLink to="/saved">Saved</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Clock hour={hour} selectedHour={selectedHour} changeSelectedHour={changeSelectedHour} />}/>
            <Route path="/saved" element={<SavedList savedSongs={savedSongs} removeSong={removeSong} changeSelectedHour={changeSelectedHour} />}/>
            <Route path="/:garbage" element={<Missing/>}/>
          </Routes>
        </main>
        <Player songName={songName} songHour={useRealTime ? hour : selectedHour} url={song && song} savedSongs={savedSongs} saveSong={saveSong} removeSong={removeSong}/>
      </div>
    </div>
  );
}

export default App;
