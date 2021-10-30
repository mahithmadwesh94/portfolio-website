import "./whatIDoTemplate.css";

function WhatIDoTemplate({ Icon, title, description }) {
    return (
        <div className="whatIDoTemplate">

            <Icon className="whatIDoTemplateIcon" />

            <div className="whatIDoTemplateText">
                <div className="whatIDoTemplateTitle">{title}</div>
                <div className="whatIDoTemplateText">{description}</div>
            </div>
        </div>
    )
}

export default WhatIDoTemplate;
