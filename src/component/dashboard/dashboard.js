import React, {Component} from "react"
import Notification from "./notification"
import ProjectList from "../projects/projectList"
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from 'redux'
import {Redirect} from "react-router-dom"
class Dashboard extends Component{
    render(){
        if(!this.props.auth.uid) return <Redirect to="/signin"/>;
        const {projects,notifications} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        projects : state.firestore.ordered.project,
        auth : state.firebase.auth,
        notifications : state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : "project", orderBy : ["createDate","desc"]},
        {collection : "notifications", limit:3, orderBy : ['time',"desc"]}
    ])
)(Dashboard);