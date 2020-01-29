import React from "react"

const PorjectSummary = (props) => {
    const {project} = props;
    return(
        <div className="card z-depth-0 proeject-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authFirstName} {project.authLastName}</p>
                <p className="grey-text">{project.createDate.slice(0,16)}</p>
            </div>
        </div>
    )
}

export default PorjectSummary;