import "./footer.css";

function Footer() {
    return (
        <div className="footerContainer ps-4 pe-4">
            <div className="footerLeft">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mahith-madwesh">LinkedIn</a>
                <a rel="noreferrer" target="_blank" href="https://mahith-madwesh.medium.com/">Mediun</a>
                <a rel="noreferrer" target="_blank" href="https://github.com/mahithmadwesh94">Github</a>

            </div>

            <div className="footerRight">
                &copy; Mahith's Portfolio
            </div>

        </div>
    )
}

export default Footer
