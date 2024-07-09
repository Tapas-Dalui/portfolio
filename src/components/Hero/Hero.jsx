import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

function Hero() {
    return (
        <>
            <section id="profile">
                <div className="section__pic-container">
                    <img src={assets.profile_pic} alt="Tapas Dalui profile picture" />
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Tapas Dalui</h1>
                    <p className="section__text__p2">Full Stack Java Developer</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2"

                        >
                            Download CV
                        </button>
                        <button className="btn btn-color-1">
                            Contact Me
                        </button>
                    </div>
                    <div id="socials-container">
                        <a href="https://www.linkedin.com/in/tapas-dalui/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='icons' />
                        </a>
                        <a href="https://x.com/tapasdalui123" target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className='icons' />
                        </a>
                        <a href="https://github.com/Tapas-Dalui" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='icons' />
                        </a>
                        <a href="mailto:tdalui865@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MdMailOutline className='icons' />
                        </a>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
