import "./portfolio.css";
import { ReactComponent as Netlify } from "../../assets/icons/netlify.svg"
import { ReactComponent as Git } from "../../assets/icons/github.svg"
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";


function Portfolio() {
    return (
        <>
            <Container>
                <div className="resumeHeader">

                    <div>Portfolio</div>

                </div>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className="portfolioContainer">

                            <img src="/assets/images/portfolio1.png" alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <Netlify className="siteLink" /> <span>Site</span>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <Git className="siteCode" /> <span>Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col sm={12} md={6} lg={4}>
                        <div className="portfolioContainer">

                            <img src="/assets/images/portfolio1.png" alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <Netlify className="siteLink" /> <span>Site</span>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <Git className="siteCode" /> <span>Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col sm={12} md={6} lg={4}>
                        <div className="portfolioContainer">

                            <img src="/assets/images/portfolio1.png" alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <Netlify className="siteLink" /> <span>Site</span>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <Git className="siteCode" /> <span>Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col sm={12} md={6} lg={4}>
                        <div className="portfolioContainer">

                            <img src="/assets/images/portfolio1.png" alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <Netlify className="siteLink" /> <span>Site</span>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <Git className="siteCode" /> <span>Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col sm={12} md={6} lg={4}>
                        <div className="portfolioContainer">

                            <img src="/assets/images/portfolio1.png" alt="" className="portfolioImg" />

                            <div className="portolfolioPopup ">
                                <div className="siteLinksWrapper ">
                                    <div className="siteLinkWrapper">
                                        <Netlify className="siteLink" /> <span>Site</span>
                                    </div>
                                    <div className="siteCodeWrapper">
                                        <Git className="siteCode" /> <span>Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>




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
