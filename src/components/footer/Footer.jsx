import "./footer.css";
import { ReactComponent as Ln } from "../../assets/icons/linkedin.svg"
import { ReactComponent as Medium } from "../../assets/icons/monogram-medium.svg"
import { ReactComponent as Git } from "../../assets/icons/github.svg"
import { Container, Navbar } from "react-bootstrap";

function Footer({color,backgroundColor}) {
    return (
        <Navbar expand="lg" style={{backgroundColor:backgroundColor,color:color}}>
        <Container className="footerContainer ps-4 pe-4">
            <div className="footerLeft">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mahith-madwesh">
                    <Ln style={{
                        width: '70px',
                        height: '30px',
                        objectFit: 'contain',
                    }} />
                </a>
                <a rel="noreferrer" target="_blank" href="https://mahith-madwesh.medium.com/"> <Medium style={{
                    width: '70px',
                    height: '30px',
                    objectFit: 'contain',
                }} /></a>
                <a rel="noreferrer" target="_blank" href="https://github.com/mahithmadwesh94"> <Git style={{
                    width: '70px',
                    height: '30px',
                    objectFit: 'contain',
                }} /></a>

            </div>

            <div className="footerRight">
                &copy; Mahith Madwesh
            </div>

        </Container>
        </Navbar>
    )
}

export default Footer
