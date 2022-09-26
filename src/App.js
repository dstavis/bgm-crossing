import './App.css';
import { getSongs } from './api-calls';
// Dependencies
import React, { useState, useEffect} from 'react';
import { Routes, Route, NavLink  } from 'react-router-dom';
// Components
import Clock from "./components/Clock"
import SavedList from "./components/SavedList"
import Player from './components/Player';


function App() {

  const [useRealTime, setUseRealTime] = useState(true)
  const [hour, setHour] = useState(new Date().getHours())
  const [selectedHour, setSelectedHour] = useState("realTime")
  const [song, setSong] = useState(null) // as URL

  useEffect(() => {
    console.log({song})
  })

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
    getSongs().then((data) => { setSong(data[`BGM_24Hour_${hourString}_Sunny`]["music_uri"])} )
  }

  const changeSelectedHour = (event) => {
    const value = event.target.value
    if(value === "realTime") {
      setUseRealTime(true)
      setSelectedHour(value)
    } else {
      setUseRealTime(false)
      setSelectedHour(Number(value))
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>BGM Crossing</h1>
        </header>
        <main>
          <nav>
            <NavLink to="/" end>Clock</NavLink>
            <NavLink to="/saved">Saved</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Clock hour={hour} selectedHour={selectedHour} changeSelectedHour={changeSelectedHour} />}/>
            <Route path="/saved" element={<SavedList />}/>
          </Routes>
        </main>
        <Player url={song && song}/>
      </div>
    </div>
  );
}

export default App;
