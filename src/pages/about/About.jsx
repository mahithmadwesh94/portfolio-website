import "./about.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import WhatIDo from "../../components/whatido/WhatIDo"
import WhatIOffer from "../../components/whatioffer/WhatIOffer"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom"

function About() {
    return (
        <div className="aboutContainer">
            <Container>
                <Row>
                    <Col>
                        <div className="aboutImageContainer">
                            <img className="aboutImage" src="https://pbs.twimg.com/profile_images/1096631932014583808/nzKBaek0_400x400.jpg" alt="mahith madwesh" />
                        </div>
                    </Col>
                    <Col>
                        <div className="aboutTextContainer">
                            <div className="aboutTitle">Salesforce Consultant / Fullstack developer</div>
                            <div className="aboutName">Mahith Madwesh</div>
                            <div className="aboutIntro">Understanding the current requirement of a project to deliver secure and scalable project solutions in ever increasing demand for CRM solutions.Major skills in MERN stack and Salesforce Development. Majorly working on custom applications being developed on Salesforce platforms to deliver better solutions and overcome the limitations</div>
                            <Link style={{ textDecoration: 'none' }} to='/contact'><Button className="aboutContact">Contact</Button></Link>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <WhatIDo />
                </Row>

                <Row>
                    <WhatIOffer />
                </Row>


            </Container>
            <Container fluid>
                <Row>
                    <Footer />
                </Row>
            </Container>


        </div>
    )
}

export default About
