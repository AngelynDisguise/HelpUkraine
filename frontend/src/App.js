import './App.css';
import {Routes, Route,  BrowserRouter as Router } from "react-router-dom";

import Home from './Components/Home';
import NavBar from './Components/NavBar';
import FindHost from './Components/FindHost';
import HelpResources from './Components/BeHost';
import About from './Components/About';

function App() {
  return (
    <div>
      <NavBar />
      <h1>App!</h1>
    </div>
  );
}

export default App;
