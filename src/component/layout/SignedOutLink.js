import React from "react"
import {NavLink} from "react-router-dom"
const SignedOutLink = () => {
    return(
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/signup">Signeup</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLink;