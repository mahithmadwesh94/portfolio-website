import "./title.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

function Title({ id, title }) {
    return (
        <div className="mainTitle">
            {title}
            <ProgressBar id="id" now={60} />
        </div>
    )
}

export default Title
