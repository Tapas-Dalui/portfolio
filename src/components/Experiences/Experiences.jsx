import React from 'react'
import './Experiences.css'
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";

function Experiences() {
    return (
        <>
            <section id="experience">
                <p className="section__text__p1"></p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <h2 className="experience-sub-title">Frontend Development</h2>
                            <div className="article-container">
                                <article>
                                    <FaCode className='icons' />
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <FaHashtag className='icons' />
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>

                                <article>
                                    <IoLogoJavascript className='icons' />
                                    <div>
                                        <h3>JavaScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <FaReact className='icons' />
                                    <div>
                                        <h3>React JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <BiLogoTypescript className='icons' />
                                    <div>
                                        <h3>TypeScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <FaAngular className='icons' />
                                    <div>
                                        <h3>Angular JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="details-container">
                            <h2 className="experience-sub-title">Backend Development</h2>
                            <div className="article-container">
                                <article>
                                    <FaNodeJs className='icons' />
                                    <div>
                                        <h3>Node JS</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <SiSpring className='icons' />
                                    <div>
                                        <h3>Spring</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <SiExpress className='icons' />
                                    <div>
                                        <h3>Express JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <SiSpringboot className='icons' />
                                    <div>
                                        <h3>Spring Boot</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <SiMongodb className='icons' />
                                    <div>
                                        <h3>MongoBD</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <FaJava className='icons' />
                                    <div>
                                        <h3>JSP & Servlet</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experiences
