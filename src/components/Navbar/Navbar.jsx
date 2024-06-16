import React from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <>
            <div id="header">
                <a href="index.html"><img src={assets.logo} className="logo" /></a>

                <div>
                    <ul id="navbar">
                        <li><a className="active" href="#profile">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="internships.html">Internships</a></li>
                        <span id="close"><FontAwesomeIcon icon="fa-solid fa-xmark" /></span>
                    </ul>
                </div>
                <div id="mobile">
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </div>
            </div>
        </>
    )
}

export default Navbar
