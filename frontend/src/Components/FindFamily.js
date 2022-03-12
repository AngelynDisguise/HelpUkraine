import React from 'react'

function FindFamily() {
  return (
    <div>
      <div className="find-family-section">
        <h1>Families seeking refuge</h1>
        <div className="find-family-card">
          <div className="family-picture">
            {/**family image here */}
          </div>
          
          <ul>
            <li>Family name:</li>
            {/* Vague location example:  Lithuania*/}
            <li>Location: </li>
            <li>Status: </li>
            {/* List of names */}
            <li>Searching for:</li>
          </ul>
        </div>
        <h3>Are you a family member or want to provide help?</h3>
        
        <button className="contact-button">Contact</button>
      </div>
    </div>
  )
}

export default FindFamily