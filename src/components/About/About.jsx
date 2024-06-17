import React from 'react'
import './About.css'

function About() {
    return (
        <>
            <section id="about">
                <p class="section__text__p1"></p>
                <h1 class="title">About Me</h1>
                <div class="section-container">

                    <div class="about-details-container">
                        <div class="about-containers">

                            <div class="details-container">
                                <i class="fa-solid fa-graduation-cap about-icon"></i>
                                <h3>Education</h3>
                                <p>B.Sc.(CS) - 2023<br />M.Sc.(CS) - Pursuing</p>
                            </div>
                            <div class="details-container">
                                <i class="fa-solid fa-envelope-circle-check"></i>
                                <h3>Internships</h3>
                                <p>completed  <b>6</b> AICTE Internships </p>
                            </div>

                            <div class="details-container">
                                <i class="fa-solid fa-diagram-project"></i>
                                <h3>Projects</h3>
                                <p><b>50+ </b>Projects on Full stack Development</p>
                            </div>
                            <div class="details-container">
                                <i class="fa-solid fa-circle-nodes"></i>
                                <h3>Leetcode</h3>
                                <p>solved 200+ questions on DSA & PHP</p>
                            </div>
                        </div>
                        <div class="text-container">
                            <p>
                                Hello, I am Tapas Dalui, currently pursuing a Master of Science (M.Sc.) in Computer Science from Surendranath College, is a dedicated and accomplished individual with a passion for software development.
                                With a strong academic background and a thirst for knowledge.

                            </p>
                            <br/>

                                <h4>Area of Interest</h4>
                                <ul>
                                    <li>MERN Stack</li>
                                    <li>Cloud Computing</li>
                                    <li>Data Engineering</li>
                                </ul>
                        </div>


                    </div>
                </div>

            </section>

        </>
    )
}

export default About
