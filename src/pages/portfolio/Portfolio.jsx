import "./portfolio.css";
import { ReactComponent as Netlify } from "../../assets/icons/netlify.svg"
import { ReactComponent as Git } from "../../assets/icons/github.svg"
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import mtravel from "../../assets/images/mTravelAppPin.png"
import ecommerSite from "../../assets/images/ecommerceSite.png"


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


                    <Col sm={12} md={6} lg={4}>
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


                    <Col sm={12} md={6} lg={4}>
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
