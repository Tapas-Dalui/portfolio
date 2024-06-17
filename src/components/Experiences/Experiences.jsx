import React from 'react'
import './Experiences.css'

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
                                    <i className="fa-brands fa-html5"></i>
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-brands fa-react"></i>
                                    <div>
                                        <h3>React JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-brands fa-square-js"></i>
                                    <div>
                                        <h3>JavaScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-solid fa-check tick"></i>
                                    <div>
                                        <h3>TypeScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-solid fa-m"></i>
                                    <div>
                                        <h3>Material UI</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="details-container">
                            <h2 className="experience-sub-title">Backend Development</h2>
                            <div className="article-container">
                                <article>
                                    <i className="fa-brands fa-java"></i>
                                    <div>
                                        <h3>J SERVLET</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-solid fa-check tick"></i>
                                    <div>
                                        <h3>Express JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-brands fa-git-alt"></i>
                                    <div>
                                        <h3>Git & Github</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-brands fa-react"></i>
                                    <div>
                                        <h3>React JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-solid fa-database"></i>
                                    <div>
                                        <h3>MongoBD</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <i className="fa-brands fa-node-js"></i>
                                    <div>
                                        <h3>Node JS</h3>
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
