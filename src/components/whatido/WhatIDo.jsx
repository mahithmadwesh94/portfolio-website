import { Col, Container, Row } from "react-bootstrap"
import "./whatido.css";
import Title from "../title/Title";
import BrushIcon from '@material-ui/icons/Brush';
import DevicesIcon from '@material-ui/icons/Devices';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AppsIcon from '@material-ui/icons/Apps';
import WhatIDoTemplate from "../whatIDoTemplates/WhatIDoTemplate";
import CheckIcon from '@material-ui/icons/Check';
import {ReactComponent as ReactSvg} from '../../assets/react-development.svg';
import {ReactComponent as FrontendSvg} from '../../assets/frontend-development.svg';
import {ReactComponent as BackendSvg} from '../../assets/backend-development.svg';
import {ReactComponent as SalesforceSvg} from '../../assets/salesforce-development2.svg';


function WhatIDo() {
    return (
        <Container className="ms-auto me-auto mt-3">
            {/* <Row>
                <Col>
                    <Title title="Skills" />

                </Col>
            </Row> */}
            {/* <Row>
                <Col >
                    <WhatIDoTemplate title="Frontend Development" description="Developing to Rich, Responsive Frontend Designs in React using libraries such as Material-UI, Bootstrap,Formik" Icon={BrushIcon} />

                    <WhatIDoTemplate title="Backend Development" description="Developing secure and scalabale backend in Nodejs using Express framework, MongoDB database,Mongoose Models,API for projects" Icon={StorefrontIcon} />
                </Col>
                <Col>
                    <WhatIDoTemplate title="Fullstack Development" description="Developing end to end MERN stack projects with React as Frontend with Nodejs,Express & MongoDB for backend" Icon={DevicesIcon} />

                    <WhatIDoTemplate title="Salesforce Development" description="Understanding the current requirement of a project to deliver secure and scalable project solutions in ever increasing demand for CRM solutions." Icon={AppsIcon} />
                </Col>
            </Row> */}

            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6} lg={6}>
                    <div className="skills">
                    <ReactSvg/>
                    <p className="ps-3 aboutIntro">some text about react skills</p>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                    <div className="skills">
                    <FrontendSvg/>
                    <p className="ps-5 aboutIntro">some text about react skills</p>
                    </div>
                    </Col>
                    
                    
                </Row>
                <Row  className="text-center">
                <Col sm={12} md={6} lg={6}>
                    <div className="skills">
                    <BackendSvg/>
                    <p className="ps-3 aboutIntro">some text about react skills</p>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                    <div className="skills">
                    <SalesforceSvg/>
                    <p className="ps-5 aboutIntro">some text about react skills</p>
                    </div>
                    </Col>
                </Row>
            </Container>

            

        </Container>
    )
}

export default WhatIDo
