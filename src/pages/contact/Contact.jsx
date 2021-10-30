import { Col, Container, Row } from "react-bootstrap"
import "./contact.css";
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import Footer from "../../components/footer/Footer";

function Contact() {
    return (
        <div className="contactContainer">
            <Container>
                <Row>
                    <div className="resumeHeader">

                        <div>Contact</div>

                    </div>
                </Row>

                <Row>
                    <Col>
                        <div className="primaryDetails d-flex align-items-center">
                            <RoomIcon className="primaryDetailsIcon" />
                            Bangalore, Karnataka, India
                        </div>
                    </Col>
                    <Col>
                        <div className="primaryDetails">
                            <MailIcon className="primaryDetailsIcon" />
                            <div>
                                mahith.madwesh@gmail.com
                                <p className="primaryDetailsText">Contact me for futher info</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="primaryDetails d-flex align-items-center">
                            <PermPhoneMsgIcon className="primaryDetailsIcon" />
                            +91-8867993042
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>


        </div>
    )
}

export default Contact
