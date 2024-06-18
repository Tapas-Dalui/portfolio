import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
                            onClick="window.open('./img/TAPAS.pdf')"
                        >
                            Download CV
                        </button>
                        <button className="btn btn-color-1" onClick="location.href='./#contact'">
                            Contact Me
                        </button>
                    </div>
                    <div id="socials-container">
                        <FaLinkedin className='icons' />
                        <FaSquareFacebook className='icons' />
                        <FaGithub className='icons' />
                        <MdEmail className='icons' />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
