import React from "react"
import {NavLink,Link} from "react-router-dom"
import {connect} from "react-redux"
import {signOut} from "../../store/action/authAction"
const SignedInLink = (props) => {
    return(
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><Link to="#" onClick={props.signOut}>Log Out</Link></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}
const mapDispatchToState = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToState)(SignedInLink);