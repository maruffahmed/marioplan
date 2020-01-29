import React, { PureComponent } from 'react'
import {connect} from "react-redux"
import {createProjects} from "../../store/action/projectActions"
import {Redirect} from "react-router-dom"

class createProject extends PureComponent {
    state={
        title:"",
        content:""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.setState({
            title : "",
            content : ""
        })
        this.props.history.push("/");
    }
    render() {
        if(!this.props.auth.uid) return <Redirect to="/signin"/>;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="gey-text text-darken-3">Create project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} value={this.state.content}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Creat</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProjects(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(createProject)
