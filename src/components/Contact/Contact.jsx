import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <a href="mailto:tdalui865@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                        <a href="" target="_blank"><i className="fa-brands fa-facebook" ></i></a>
                        <a href="" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Tapas-Dalui" target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
