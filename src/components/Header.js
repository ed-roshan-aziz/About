import React from 'react'
import {NavLink} from 'react-router-dom'
import "../App.css"
import "../styles/Header.css"
import Missionstatement from './Missionstatement'
import { useState } from 'react'

const Header = () => {
    
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 5){
            setColorchange(true)
        }else{
            setColorchange(false)
        }
    }
    window.addEventListener('scroll',changeNavbarColor);
  return (
    <>
    <nav className={colorChange ? 'Header colorChange':'Header'}>
        <div className='Logo'>
            <a href='#top'><h1>
                <span>C</span>ool
                <span>B</span>eans
            </h1></a>
        </div>
        <div className={isNavExpanded?"topnav expanded":"topnav"}>
            <ul>
                <li>
                    <a href="#Ourmission">Our Mission</a>
                </li>
                <li>
                    <a href='#Objective'>What we do?</a>
                </li>
                <li>
                    <a href='#Members'>Founding Members</a>
                </li>
            </ul>
        </div>
        <button className="hamburger"
        onClick={() => {
            setIsNavExpanded(!isNavExpanded)
        }}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
    </>
    
  )
}

export default Header