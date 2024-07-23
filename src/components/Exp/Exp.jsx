import React from 'react'
import './Exp.css'
import { FaBootstrap, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaCode, FaJs } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { SiMicrosoftazure } from "react-icons/si";
import { SiChef } from "react-icons/si";
import { FaJenkins } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiRabbitmq } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNeo4J } from "react-icons/si";

const Exp = () => {
    return (
        <>
            <section id="experience">
                <p className="section__text__p1"></p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">

                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend</h2>
                        <div className="article-container">
                            <div className="left-articel-container">
                                <div className="left-content">
                                    <FaCode className='icons' />
                                    
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                                <div className="left-content">
                                    <FaHashtag className='icons' />
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Advanced</p>
                                    </div>
                                </div>
                                <div className="left-content">
                                    <FaJs className='icons' />
                                    <div>
                                        <h3>Javascript</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-articel-container">
                                <div className="right-content">
                                    <SiTailwindcss className='icons' />
                                    <div>
                                        <h3>Tailwind CSS</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <FaBootstrap className='icons' />
                                    <div>
                                        <h3>Bootstrap</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <FaReact className='icons' />
                                    <div>
                                        <h3>React JS</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Backend</h2>
                        <div className="article-container">
                            <div className="left-articel-container">
                                <div className="left-content">
                                    <SiSpring className='icons' />
                                    <div>
                                        <h3>Spring</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <div className="left-content">
                                    <SiSpringboot className='icons' />
                                    <div>
                                        <h3>Springboot</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <div className="left-content">
                                    <FaJava className='icons' />
                                    <div>
                                        <h3>Servlet</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-articel-container">
                                <div className="right-content">
                                    <SiMysql className='icons' />
                                    <div>
                                        <h3>MySQL</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <SiMongodb className='icons' />
                                    <div>
                                        <h3>Mongodb</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <SiNeo4J className='icons' />
                                    <div>
                                        <h3>Neo4j</h3>
                                        <p>Basic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title head">Technologies</h2>
                        <div className="article-container">
                            <div className="technologies-container">
                                <div className="box-heading">
                                    <h3>Cloud</h3>
                                </div>
                                <div className="box-container">
                                    <div className="item">
                                        <FaAws className='icons'/>
                                        
                                        <div>
                                            <h3>AWS</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                    <SiMicrosoftazure className='icons'/>
                                        <div>
                                            <h3>Azure</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="technologies-container">
                                <div className="box-heading">
                                    <h3>Automation</h3>
                                </div>
                                <div className="box-container">
                                    <div className="item">
                                        
                                    <SiChef className='icons'/>
                                        <div>
                                            <h3>Chef</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <FaJenkins className='icons'/>
                                        <div>
                                            <h3>Jenkins</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="technologies-container">
                                <div className="box-heading">
                                    <h3>Virtualization</h3>
                                </div>
                                <div className="box-container">
                                    <div className="item">
                                    <FaDocker className='icons'/>
                                        <div>
                                            <h3>Docker</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <SiKubernetes className='icons' />
                                        <div>
                                            <h3>Kubernetes</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="technologies-container">
                                <div className="box-heading">
                                    <h3>Message Queue</h3>
                                </div>
                                <div className="box-container">
                                    <div className="item">
                                        <SiApachekafka className='icons' />
                                        <div>
                                            <h3>Kafka</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <SiRabbitmq className='icons' />
                                        <div>
                                            <h3>Rabbitmq</h3>
                                            <p>Basic</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Exp
