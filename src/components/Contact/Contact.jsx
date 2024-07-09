import React from 'react'
import './Contact.css'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";


function Contact() {
    return (
        <>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
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

export default Contact
