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
                    <span>3 Years Experience</span>
                </div>
            </Container>



            <Container>
                <Row>
                    <Col className="d-flex align-items-center">
                        <span className="headerContainer">Download Resume from here </span> <Title title="Education" />
                    </Col>
                </Row>
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
                                        <li>JWT Paper published</li>
                                        <li>some other project done</li>
                                        <li>CGPA score</li>
                                        <li>Internship</li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </div>

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
                                        <li>JWT Paper published</li>
                                        <li>some other project done</li>
                                        <li>CGPA score</li>
                                        <li>Internship</li>
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
                                        <li>Roles and responsibilities</li>
                                        <li>Roles and responsibilities</li>
                                        <li>Roles and responsibilities</li>
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
                                        <li>Home Automation Project</li>
                                        <li>JWT Paper published</li>
                                        <li>some other project done</li>
                                        <li>CGPA score</li>
                                        <li>Internship</li>
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
                </Container>

            </div>
        </div>
    )
}

export default Resume
