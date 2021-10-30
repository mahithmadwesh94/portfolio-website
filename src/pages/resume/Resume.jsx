import "./resume.css"
import { Col, Container, Row, Button } from 'react-bootstrap'
import Title from "../../components/title/Title";
import Footer from "../../components/footer/Footer"

function Resume() {
    return (
        <div className="resumeContainer">


            <Container>
                <div className="resumeHeader">

                    <div>Resume</div>
                    <a href="https://drive.google.com/uc?export=download&id=1lsIErLT9k6R71m5QUo5Pja5Ewclquzrn" target="_blank" rel="noreferrer" style={{ color: 'white' }} download><Button className="aboutContact">Download</Button></a>
                    <span>3 Years Experience</span>
                </div>
            </Container>



            <Container>
                <Row>
                    {/* Education Colums*/}
                    <Col sm={12} md={6} lg={6}>
                        <Title title="Education" />
                        <div className="resumeEducation">

                            <div className="headerContainer">
                                <Button className="resumeYear">2017 - 2019</Button>
                                <span>BMSCE, Bangalore</span>
                            </div>
                            <div className="resumeBodyContainer">
                                <div className="resumeBodyWrapper">
                                    <h4>MTech, Network Engineering</h4>
                                    <ul className="resumeEducationListing">
                                        <li>Home Automation Project</li>
                                        <li>Completed Graduation with 3 published papers</li>
                                        <li>Home Automation using voice automation</li>
                                        <li>CGPA score: 9.2</li>
                                        <li>Internship at Microchip Technology</li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div className="resumeEducation">

                            <div className="headerContainer">
                                <Button className="resumeYear">2012 - 2016</Button>
                                <span>NIEIT, Mysore</span>
                            </div>
                            <div className="resumeBodyContainer">
                                <div className="resumeBodyWrapper">
                                    <h4>B.E/B.Tech, Computer Science & Engineering</h4>
                                    <ul className="resumeEducationListing">
                                        <li>Augmented Reality Project</li>
                                        <li>College Magzine Editor</li>
                                        <li>Score: 60%</li>

                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Experience Column Colums*/}
                    <Col sm={12} md={6} lg={6}>
                        <Title title="Experience" />
                        <div className="resumeEducation">

                            <div className="headerContainer">
                                <Button className="resumeYear">2019 - Present</Button>
                                <span>Salesforce, Bangalore</span>
                            </div>
                            <div className="resumeBodyContainer">
                                <div className="resumeBodyWrapper">
                                    <h4>Associate Technical Consultant</h4>
                                    <ul className="resumeEducationListing">
                                        <li>Client side development with HTML, CSS3 , Es6 Javascript</li>
                                        <li>Creation & usage of remote cloud data with Rest APIs and jSON</li>
                                        <li>Version history and deployments using Git Understanding and Presenting problem statements</li>
                                        <li>Understanding and Presenting problem statements and solutions to leaders and stakeholders</li>
                                        <li>Problem diagnosis and solving based on requirements gathered</li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div className="resumeEducation">

                            <div className="headerContainer">
                                <Button className="resumeYear">2018 - 2019</Button>
                                <span>Microchip Technology, Bangalore</span>
                            </div>
                            <div className="resumeBodyContainer">
                                <div className="resumeBodyWrapper">
                                    <h4>Frontend Developer (Internship)</h4>
                                    <ul className="resumeEducationListing">
                                        <li>Created internal web application to improve and
                                            automate processes</li>
                                        <li>Created web applications using high quality coding
                                            and ensuring the use of best practices</li>
                                        <li>Developed applications to measure and quantify the
                                            business process improvements</li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


            <div className="resumeCoding">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Title title="Coding Skills" />
                            <div className="resumeCodingSkillContainer">
                                <div className="resumeCodingSkill">
                                    <div className="codingName">HTML</div>
                                    <div className="codingPercent">80%</div>
                                </div>
                                <div className="skillWidthContainer">
                                    <div className="skillWidth" style={{ width: `${80}%` }}></div>
                                </div>
                            </div>

                            <div className="resumeCodingSkillContainer">
                                <div className="resumeCodingSkill">
                                    <div className="codingName">CSS</div>
                                    <div className="codingPercent">60%</div>
                                </div>
                                <div className="skillWidthContainer">
                                    <div className="skillWidth" style={{ width: `${60}%` }}></div>
                                </div>
                            </div>

                            <div className="resumeCodingSkillContainer">
                                <div className="resumeCodingSkill">
                                    <div className="codingName">Javascript</div>
                                    <div className="codingPercent">70%</div>
                                </div>
                                <div className="skillWidthContainer">
                                    <div className="skillWidth" style={{ width: `${70}%` }}></div>
                                </div>
                            </div>

                            <div className="resumeCodingSkillContainer">
                                <div className="resumeCodingSkill">
                                    <div className="codingName">React </div>
                                    <div className="codingPercent">70%</div>
                                </div>
                                <div className="skillWidthContainer">
                                    <div className="skillWidth" style={{ width: `${70}%` }}></div>
                                </div>
                            </div>

                            <div className="resumeCodingSkillContainer">
                                <div className="resumeCodingSkill">
                                    <div className="codingName">NodeJS </div>
                                    <div className="codingPercent">60%</div>
                                </div>
                                <div className="skillWidthContainer">
                                    <div className="skillWidth" style={{ width: `${70}%` }}></div>
                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Title title="Design Skills" />
                            <div className="resumeCodingSkillContainer">
                                <div className="resumeCodingSkill">
                                    <div className="codingName">Adobe XD</div>
                                    <div className="codingPercent">50%</div>
                                </div>
                                <div className="skillWidthContainer">
                                    <div className="skillWidth" style={{ width: `${50}%` }}></div>
                                </div>
                            </div>

                            <div className="resumeCodingSkillContainer">
                                <div className="resumeCodingSkill">
                                    <div className="codingName">Sketch </div>
                                    <div className="codingPercent">30%</div>
                                </div>
                                <div className="skillWidthContainer">
                                    <div className="skillWidth" style={{ width: `${30}%` }}></div>
                                </div>
                            </div>


                        </Col>
                    </Row>
                    <Row>
                        <Title title="Certifications" />
                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2019 - Present</Button>
                                    <h5>Salesforce Admin Ceritication</h5>

                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2019 - Present</Button>
                                    <h5>Salesforce Platform App Builder Ceritication</h5>

                                </div>
                            </div>
                        </Col>


                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2019 - Present</Button>
                                    <h5>Salesforce Sales Cloud Ceritication</h5>

                                </div>
                            </div>
                        </Col>


                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2019 - Present</Button>
                                    <h5>Salesforce Service Cloud Ceritication</h5>

                                </div>
                            </div>
                        </Col>


                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2019 - Present</Button>
                                    <h5>Salesforce Advanced Admin Ceritication</h5>

                                </div>
                            </div>
                        </Col>


                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2019 - Present</Button>
                                    <h5>Salesforce Communiy Cloud Ceritication</h5>

                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2020 - Present</Button>
                                    <h5>Salesforce Platform Developer I Ceritication</h5>

                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <div className="resumeEducation">

                                <div className="resumeBodyContainer d-flex align-items-center">
                                    <Button className="resumeYear me-4">2021 - Present</Button>
                                    <h5>Salesforce Platform Developer II Ceritication</h5>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Title title="Accomplishments" />

                        <ul className="text-light">
                            <li>Best Go-live of the Year award</li>
                            <li>Winner of Table Tennis Doubles Award</li>
                            <li>Recognized for Building fast performing components
                                which decreased mobile loading time by 30%</li>

                        </ul>
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Resume
