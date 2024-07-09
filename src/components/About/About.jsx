import React, { useEffect, useState } from 'react'
import './About.css'
import { IoSchool } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { FaBookBookmark } from "react-icons/fa6";

function About() {

    const [data, setData]= useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/Tapas-Dalui')
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
            setData(data)
        })
    },[])

    return (
        <>
            <section id="about">
                <p className="section__text__p1"></p>
                <h1 className="title">About Me</h1>
                <div className="section-container">

                    <div className="about-details-container">
                        <div className="about-containers">

                            <div className="details-container">
                            <IoSchool className='icons' />
                                <h3>Education</h3>
                                <p>B.Sc.(CS) - 2023<br />M.Sc.(CS) - Pursuing</p>
                            </div>
                            <div className="details-container">
                                <FaBookBookmark className='icons' />
                                <h3>Repositories</h3>
                                <p>Created  <b className='font-bold'>{data.public_repos}</b> Github Repositories </p>
                            </div>

                            <div className="details-container">
                            <GrProjects className='icons'/>
                                <h3>Projects</h3>
                                <p><b className='font-bold'>50+ </b>Projects on Full Stack Development</p>
                            </div>
                            <div className="details-container">
                            <SiLeetcode className='icons'/>
                                <h3>Leetcode</h3>
                                <p>solved <b className='font-bold'>200+</b>  questions on DSA</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                                Hello, I am Tapas Dalui, currently pursuing a Master of Science (M.Sc.) in Computer Science from Surendranath College, is a dedicated and accomplished individual with a passion for software development.
                                With a strong academic background and a thirst for knowledge.

                            </p>
                            <br />

                        </div>


                    </div>
                </div>

            </section>

        </>
    )
}

export default About
