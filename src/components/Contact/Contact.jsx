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
                        <FaLinkedinIn className='icons' />
                        <BsTwitterX className='icons' />
                        <FaGithub className='icons' />
                        <MdMailOutline className='icons' />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
