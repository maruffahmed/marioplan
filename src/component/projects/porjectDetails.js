import React from 'react'
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from "redux"
import {Redirect} from "react-router-dom"

const porjectDetails = (props) => {
    if(!props.auth.uid) return <Redirect to="/signin"/>;
    const {project} = props;
    if(project){ 
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>

                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authFirstName} {project.authLastName}</div>
                        <div>{project.createDate.slice(0,16)}</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div class="ph-row">
                            <div class="ph-col-6 big"></div>
                            <div class="ph-col-6 empty big"></div>
                            <div class="ph-col-4"></div>
                        </div>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div class="ph-row">
                            <div class="ph-col-4"></div>
                            <div class="ph-col-8 empty"></div>
                            <div class="ph-col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.project;
    const project = projects ? projects[id] : null;
    return{
        project : project,
        auth : state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : "project"}
    ])
)(porjectDetails)
