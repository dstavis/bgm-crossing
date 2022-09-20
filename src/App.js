import './App.css';
import { Router } from 'react-router';
import { Routes, Route, Link, NavLink  } from 'react-router-dom';
// Components
import Home from "./components/Home"
import Favorites from "./components/Favorites"

function App() {
  return (
    <div className="App">
      <header>
        <h1>BGM Crossing</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/favorites" element={<Favorites />}>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
