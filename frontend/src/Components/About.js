import React from 'react'

function About() {
  return (
    <div className="wrapper">
      <h1 className="banner">About Us:</h1>
      {/* <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/FindFamily" element={<FindFamily />} />
        <Route path="/FindHost" element={<FindHost />} />
        <Route path="/HelpResources" element={<HelpResources />} />
        <Route path="/About" element={<About />} />
      </Routes> */}
      <div className="Our Mission">
        <p>We want to provide families with the ability to stay connected during a crisis and secondarily, for hosts to find families to host.</p>
      </div>
      <div className="call-for-action">
        <p>Here's what you can do...</p>
      </div>
      <div className="find-family-section">
        <div className="The Team">
          <div className="family-picture">
            {/**group picture of us*/}
          </div>
          
          <ul>
            <li>Angelyn</li>
            <li>Ahmed</li>
            <li>Alejandro</li>
            <li>Kaan</li>
          </ul>
        </div>
        <button className="contact-button">Contact</button>
        <h3>Source Code</h3>
        <button className="contact-button">Github</button>
      </div>
    </div>
    
  )
}

export default About