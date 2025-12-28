import React from 'react'
import { FaUser } from "react-icons/fa";
import "./navbar.css";

const navbar = () => {
  return (
    <div className='container'>
      <div className="nav">
        <div className="btn1">
          <button className='btn'>Change Location</button>
          <button className='btn'>03700031565</button>
        </div>

        
        <FaUser className="navIcon" />

      </div>
    </div>
  )
}

export default navbar
