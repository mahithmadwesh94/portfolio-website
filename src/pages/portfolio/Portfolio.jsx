import "./portfolio.css";
import { ReactComponent as Netlify } from "../../assets/icons/netlify.svg"
import { ReactComponent as Git } from "../../assets/icons/github.svg"
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import mtravel from "../../assets/images/mTravelAppPin.png"
import ecommerSite from "../../assets/images/ecommerceSite.png"
import BlogReactApp from "../../assets/images/BlogReactApp.png"
import chatApplication from "../../assets/images/chatApplication.png"


function Portfolio() {
    return (
        <>
            <Container className="portfolio">
                <div className="resumeHeader">

                    <div>Portfolio</div>

                </div>
                <Row>
                    <Col >
                        <div className="portfolioContainer">
                            <img src={ecommerSite} alt="" className="portfolioImg" />
                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <a href="https://pensive-khorana-c2d34d.netlify.app/" target="_blank" rel="noreferrer"><Netlify className="siteLink" /> <span>Site</span></a>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <a href="https://github.com/mahithmadwesh94/ecommerce-frontend" target="_blank" rel="noreferrer"><Git className="siteCode" /> <span>Code</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Project Name</h2>
                            <p><b>Title: </b> MERN Ecommerce Application</p>
                            <p><b>Technologies Used: </b> React,Express,React,Node</p>
                            <p><b>Description: </b> Complete End to End Web Application with JWT Authentication and Authorization.
                                The application has Stripe Payment Included with Redux for state management</p>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col >
                        <div className="portfolioContainer">

                            <img src={mtravel} alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <a href="https://adoring-lamport-2a07ea.netlify.app/" target="_blank" rel="noreferrer"><Netlify className="siteLink" /> <span>Site</span></a>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <a href="https://github.com/mahithmadwesh94/mtravel-frontend" target="_blank" rel="noreferrer"><Git className="siteCode" /> <span>Code</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Project Name</h2>
                            <p><b>Title: </b> MERN Travel Application</p>
                            <p><b>Technologies Used: </b> React,Express,React,Node</p>
                            <p><b>Description: </b> Complete End to End Web Application Mapbox Integration.
                                The application has Mapbox library which allows you to see your pinned location with rating and description as well as other's pins.</p>
                        </div>
                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col >
                        <div className="portfolioContainer">

                            <img src="/assets/images/portfolio1.png" alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <a href="https://business-mgmnt-4e847f.netlify.app/" target="_blank" rel="noreferrer"> <Netlify className="siteLink" /> <span>Site</span></a>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <a href="https://github.com/mahithmadwesh94/business-mgmnt-ui" target="_blank" rel="noreferrer"><Git className="siteCode" /> <span>Code</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Project Name</h2>
                            <p><b>Title: </b> Business Management UI</p>
                            <p><b>Technologies Used: </b> React</p>
                            <p><b>Description: </b> Responsive React UI used in conjuction in with framer motion and Undraw to create a beautiful design</p>
                        </div>
                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col >
                        <div className="portfolioContainer">

                            <img src={BlogReactApp} alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <a href="https://vigorous-bhaskara-b1da6c.netlify.app/" target="_blank" rel="noreferrer"><Netlify className="siteLink" /> <span>Site</span></a>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <a href="https://github.com/mahithmadwesh94/reactblog-frontend" target="_blank" rel="noreferrer"><Git className="siteCode" /> <span>Code</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Project Name</h2>
                            <p><b>Title: </b> MERN Blog Application</p>
                            <p><b>Technologies Used: </b>React,Express,React,Node</p>
                            <p><b>Description: </b> Complete End to End Blog Web Application.
                                The application allows you to search posts by user, Read,edit create posts.
                                Built with User login and Registration using Node & MongoDB.
                                You can create posts with picture, update user profile. Delete your posts only.</p>
                        </div>
                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col >
                        <div className="portfolioContainer">

                            <img src={chatApplication} alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <a href="https://vigorous-bhaskara-b1da6c.netlify.app/" target="_blank" rel="noreferrer"><Netlify className="siteLink" /> <span>Site</span></a>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <a href="https://github.com/mahithmadwesh94/chat-frontend" target="_blank" rel="noreferrer"><Git className="siteCode" /> <span>Code</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h2>Project Name</h2>
                            <p><b>Title: </b> MERN Chat Application</p>
                            <p><b>Technologies Used: </b> React,Express,React,Node,Socket.io</p>
                            <p><b>Description: </b> Complete End to End chat Application with socket.io.
                                The application has socket.io Included with React and Node for real-time communication</p>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
            <Container fluid>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    )
}

export default Portfolio
