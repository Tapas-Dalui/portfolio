import React from 'react'
import './Projects.css'
import { assets } from '../../assets/assets'

function Projects() {

    return (
        <>
            <section id="projects">
                <p className="section__text__p1"></p>
                <h1 className="title">Projects</h1>
                <div className="pro-container">
                    <div className="pro">
                        <img src={assets.p1} alt="" />
                        <div className="des">
                            <h5>Toko - online shop</h5>
                            <div className="btn-container">
                                <button className="btn btn-color-2 project-btn view"
                                    onClick="location.href='https://tapas-dalui.github.io/toko'">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pro">
                        <img src={assets.p2} alt="" />
                        <div className="des">
                            <h5>Fruitopia - strawberries</h5>
                            <div className="btn-container">
                                <button className="btn btn-color-2 project-btn view"
                                    onClick="location.href='https://tapas-dalui.github.io/FRUITOPIA'">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pro">
                        <img src={assets.p3} alt="" />
                        <div className="des">
                            <h5>To do list</h5>
                            <div className="btn-container">
                                <button className="btn btn-color-2 project-btn view"
                                    onClick="location.href='https://tapas-dalui.github.io/to-do-list'">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pro">
                        <img src={assets.p4} alt="" />
                        <div className="des">
                            <h5>Price Table</h5>
                            <div className="btn-container">
                                <button className="btn btn-color-2 project-btn view"
                                    onClick="location.href='https://tapas-dalui.github.io/Price-Table'">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pro">
                        <img src={assets.p5} alt="" />
                        <div className="des">
                            <h5>Birds Sanctuary</h5>
                            <div className="btn-container">
                                <button className="btn btn-color-2 project-btn view"
                                    onClick="location.href='https://tapas-dalui.github.io/birds_sanctuary'">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pro">
                        <img src={assets.p6} alt="" />
                        <div className="des">
                            <h5>Product Page</h5>
                            <div className="btn-container">
                                <button className="btn btn-color-2 project-btn view"
                                    onClick="location.href='https://tapas-dalui.github.io/product_page'">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-btn">
                    <a className="primary_btn" href="projects.html"><span>More Projects<i className="fa-solid fa-angles-right"></i></span></a>
                </div>
            </section>
        </>
    )
}

export default Projects
