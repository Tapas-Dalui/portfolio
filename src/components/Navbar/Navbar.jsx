import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <div id="header">
                <Link
                    to="profile"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                ><img src={assets.logo} className="logo" /></Link>

                <div>
                    <ul id="navbar">
                        <li>
                            <Link to="profile" spy={true} smooth={true} offset={-100} duration={300}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-10} duration={300}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="experience" spy={true} smooth={true} offset={-10} duration={300}>
                                Exprerience
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" spy={true} smooth={true} offset={-10} duration={300}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-30} duration={300}>
                                Contact
                            </Link>
                        </li>
                        

                        {/* <span id="close"><FontAwesomeIcon icon="fa-solid fa-xmark" /></span> */}
                    </ul>
                </div>
                <div id="mobile">
                <FaBarsStaggered />
                </div>
            </div>
        </>
    )
}

export default Navbar
