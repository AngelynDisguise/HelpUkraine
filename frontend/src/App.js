import './App.css';
import {Routes, Route, Link } from "react-router-dom";

import Nav from './Components/Nav';
import Home from './Components/Home';
import FindFamily from './Components/FindFamily';
import FindHost from './Components/FindHost';
import HelpResources from './Components/BeHost';
import About from './Components/About';

function App() {
  return (
    <div className="wrapper">
      <h1 className="banner">Mission: Help Ukraine Refugees</h1>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/FindFamily" element={<FindFamily />} />
        <Route path="/FindHost" element={<FindHost />} />
        <Route path="/HelpResources" element={<HelpResources />} />
        <Route path="/About" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
