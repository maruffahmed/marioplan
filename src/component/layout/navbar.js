import React from "react"
import {Link} from "react-router-dom"
import SignInLinks from "./SignedInLink"
import SignOutLinks from "./SignedOutLink"
import {connect} from "react-redux"

const Navbar = (props) => {

    const {auth, profile} = props;

    const link = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>;
    
    return(
        <div>
            <nav className="grey darken-3">
            <div className="nav-wrapper">
                    <div className="container">
                        <Link to="/" className="brand-logo">MarioPlan</Link>
                        <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        {link}
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)