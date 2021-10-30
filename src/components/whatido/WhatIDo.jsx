import { Col, Container, Row } from "react-bootstrap"
import "./whatido.css";
import Title from "../title/Title";
import BrushIcon from '@material-ui/icons/Brush';
import DevicesIcon from '@material-ui/icons/Devices';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AppsIcon from '@material-ui/icons/Apps';
import WhatIDoTemplate from "../whatIDoTemplates/WhatIDoTemplate";
import CheckIcon from '@material-ui/icons/Check';

function WhatIDo() {
    return (
        <Container className="ms-auto me-auto">
            <Row>
                <Col>
                    <Title title="What I Do" />

                </Col>
            </Row>
            <Row>
                <Col >
                    <WhatIDoTemplate title="Frontend Development" description="Developing to Rich, Responsive Frontend Designs in React using libraries such as Material-UI, Bootstrap,Formik" Icon={BrushIcon} />

                    <WhatIDoTemplate title="Backend Development" description="Developing secure and scalabale backend in Nodejs using Express framework, MongoDB database,Mongoose Models,API for projects" Icon={StorefrontIcon} />
                </Col>
                <Col>
                    <WhatIDoTemplate title="Fullstack Development" description="Developing end to end MERN stack projects with React as Frontend with Nodejs,Express & MongoDB for backend" Icon={DevicesIcon} />

                    <WhatIDoTemplate title="Salesforce Development" description="Understanding the current requirement of a project to deliver secure and scalable project solutions in ever increasing demand for CRM solutions." Icon={AppsIcon} />
                </Col>
            </Row>

        </Container>
    )
}

export default WhatIDo
