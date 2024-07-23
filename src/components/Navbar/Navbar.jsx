import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <>
            <nav className="container">
                <Link to="profile" spy={true} smooth={true} offset={-100} duration={300}>
                    <img src={logo} className='logo' />
                </Link>

                <ul className={mobileMenu ? 'hide-mobile-menu' : ''}>
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

                </ul>
                {
                    mobileMenu ? 
                    <IoClose className='close-icon-black' onClick={toggleMenu} />:
                    <FaBars className='menu-icon-black' onClick={toggleMenu} /> 
                }
                
            </nav>
        </>
    )
}

export default Navbar
