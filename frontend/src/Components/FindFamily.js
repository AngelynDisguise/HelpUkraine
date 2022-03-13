import React from 'react'

function FindFamily() {
  return (
    <div>
      {/**SEEKING REFUGE SECTION*/}
      <div className="seeking-refuge-section">
        <h1>Are you seeking refuge?</h1>
        <h3>Enter information and make a post here!</h3>
        <div className="seeking-refuge-card">
          <label>
          <p>Profile picture:</p>
          <input type="file" />
          </label>
          <label>
            <p>Family Name:</p>
            <input type="text" />
          </label>
          <label>
            <p>Location:</p>
            <input type="text" />
          </label>
          <label>
            <p>Status:</p>
            <input type="text" />
          </label>
          <label>
            <p>Searching for:</p>
            <input type="text" />
          </label>
        </div>
        <h3>Click below to post:</h3>
        <button type="submit" className="post-button">Post</button>
      </div>

      {/**FIND FAMILY SECTION*/}
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