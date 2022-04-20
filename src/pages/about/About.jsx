import "./about.css"
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import WhatIDo from "../../components/whatido/WhatIDo"
import WhatIOffer from "../../components/whatioffer/WhatIOffer"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { Title } from "@material-ui/icons"

function About({ color, backgroundColor }) {

    const handleType = (count) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className="aboutContainer" style={{ backgroundColor: backgroundColor, color: color }}>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} className="text-center">
                        <div className="aboutImageContainer">
                            <img className="aboutImage" src="https://pbs.twimg.com/profile_images/1096631932014583808/nzKBaek0_400x400.jpg" alt="mahith madwesh" />
                        </div>
                    </Col>
                    
                    <Col>
                        <div className="aboutTextContainer">
                            <div className="aboutIntro" style={{ color: color, fontWeight: 'bold' }}>
                                Salesforce
                                <Typewriter
                                    words={[' Developer', ' Technical Consultant']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </div>
                            <div className="aboutName">Hi I'm,</div>
                            <div className="aboutName">Mahith!</div>
                            <div className="aboutIntro" style={{ color: color, fontWeight: 'bold' }}>

                                <Typewriter
                                    words={['Frontend Developer', 'React Developer', 'Fullstack Developer', 'MERN Stack Developer', 'Node Developer']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </div>
                            <div className="aboutIntro">Fullstack developer with 3+ years of experience in <b>Salesforce CRM</b> and experience in building applications using <b>React</b>, <b>Mongo</b>, <b>Node</b>, <b>Express</b></div>
                            <Link style={{ textDecoration: 'none' }} to='/contact'><Button className="aboutContact">Contact</Button></Link>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <WhatIDo />
                </Row>

                <Row>
                    <Title title="Blog" />
                    <div className="mainTitle" style={{ backgroundColor: backgroundColor, color: color }}>
                        Blog
                        <ProgressBar id="id" now={60} />
                    </div>
                    <WhatIOffer />
                </Row>
            </Container>
            {/* <Container fluid>
                <Row>
                    <Footer />
                </Row>
            </Container> */}


        </div>
    )
}

export default About
