import './App.css';
import {Routes, Route } from "react-router-dom";

// import Nav from './Components/Nav';
// import Home from './Components/Home';
// import FindFamily from './Components/FindFamily';
// import FindHost from './Components/FindHost';
// import HelpResources from './Components/BeHost';
// import About from './Components/About';

function App() {
  return (
    <div className="wrapper">
      <h1>Mission: Help Ukraine Refugees</h1>
      {/* <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/FindFamily" element={<FindFamily />} />
        <Route path="/FindHost" element={<FindHost />} />
        <Route path="/HelpResources" element={<HelpResources />} />
        <Route path="/About" element={<About />} />
      </Routes> */}
      <div className="conflict-context">
        <p>Here's what's going on...</p>
      </div>
      <div className="call-for-action">
        <p>Here's what you can do...</p>
      </div>
      <div className="find-family-card">
        <h1>Families seeking refuge</h1>
        <ul>
          <li>Family name:</li>
          {/* Vague location example:  Lithuania*/}
          <li>Location: </li>
          <li>Status: </li>
          {/* List of names */}
          <li>Searching for:</li>
        </ul>
        <h3>Are you a family member or want to provide help?</h3>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
}

export default App;
