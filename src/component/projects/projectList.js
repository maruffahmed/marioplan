import React from "react"
import PorjectSummary from './porjectSummary'
import {Link} from "react-router-dom"

const ProjectList = ({projects}) => {
    return(
        <div className="project list section">
            {
                projects ? projects.map(project => {
                    return(
                        <Link to={"/project/" + project.id} key={project.id}>
                            <PorjectSummary project={project}/>
                        </Link>
                        
                    )
                }):
                (
                    <div className="center">
                        <p>Loading...</p>
                    </div>
                )
            }
        </div>
    )
}
export default ProjectList;