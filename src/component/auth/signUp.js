import React, { PureComponent } from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {signUp} from "../../store/action/authAction"

class SignUp extends PureComponent {
    state={
        email : "",
        password : "",
        firstName : "",
        lastName : ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to="/"/>;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="gey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign UP</button>
                    </div>
                    <div className="section red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth : state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp : (newUser) => {dispatch(signUp(newUser))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
