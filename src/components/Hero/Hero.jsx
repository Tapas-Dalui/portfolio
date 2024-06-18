import React from 'react'
import {assets} from '../../assets/assets'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                        <a href="mailto:tdalui865@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                        <a href="" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="www.linkedin.com/in/tapas-dalui" target="_blank"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                        <a href="https://github.com/Tapas-Dalui" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
