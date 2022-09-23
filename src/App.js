import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, NavLink  } from 'react-router-dom';
// import { Howl, Howler } from 'howler';
// Components
import Home from "./components/Home"
import Favorites from "./components/Favorites"
import { getSongs } from './api-calls';


function App() {

  const [time, setTime] = useState(new Date())
  const [hour, setHour] = useState(null)
  const [song, setSong] = useState(null)

  const changeHour = () => {
    setHour("07")
  }

  useEffect( () => {
    let firstHour = new Date().getHours()
    if(firstHour && firstHour.length < 2) {
      firstHour = "0" + firstHour
    }
    getSongs().then((data) => { setSong(data[`BGM_24Hour_${firstHour}_Sunny`])})
    return () => {}
  }, [])

  useEffect( () => {
    const timeStuff = async () => { 
      await setTime(new Date())
      let newHour = time.getHours()
      console.log({newHour, hour}) // hour doesn't change?!?!?!?!?!?!
      if(newHour !== hour) {
        setHour(newHour)
      }
    }
    const prom = setInterval( timeStuff, 1000 )
    console.log("setInterval GO", prom.toString())
    return () => {}
  }, [])

  useEffect( () => {
    let firstHour = hour && hour.toString()
    if(firstHour && firstHour.length < 2) {
      firstHour = "0" + firstHour
    }
    console.log({firstHour})

    getSongs().then((data) => { setSong(data[`BGM_24Hour_${firstHour}_Sunny`])} )
  }, [hour])

  return (
    <div className="App">
      <header>
        <h1>BGM Crossing</h1>
      </header>
      <main>
        <nav>
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">My Collection</NavLink> */}
        </nav>
        <p>
          {time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
        </p>
        <button onClick={changeHour}>Change Hour</button>

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
