import React from 'react'
import './Contact.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";


function Contact() {
    return (
        <>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
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

export default Contact
