import "./whatioffer.css";
import Title from "../title/Title";
import { Col, Container, Row } from "react-bootstrap";
import CheckIcon from '@material-ui/icons/Check';

function WhatIOffer() {
    return (
        <Container>
            {/* <Row>
                <Title title="What I Offer" />
                <Col>
                    <div class="boxTemplate">
                        <CheckIcon className="boxTemplateIcon" />
                        <p>Frontend Development</p>
                    </div>
                </Col>
                <Col>
                    <div class="boxTemplate">
                        <CheckIcon className="boxTemplateIcon" />
                        <p>Backend Development</p>
                    </div>
                </Col>
                <Col>
                    <div class="boxTemplate">
                        <CheckIcon className="boxTemplateIcon" />
                        <p>Fullstack Development</p>
                    </div>
                </Col>
                <Col>
                    <div class="boxTemplate">
                        <CheckIcon className="boxTemplateIcon" />
                        <p>Salesforce Development</p>
                    </div>
                </Col>
            </Row> */}
        </Container>
    )
}

export default WhatIOffer
