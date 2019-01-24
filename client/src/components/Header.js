import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import * as M from "materialize-css";


//Header component declaration
class Header extends Component {

    //method for rendering the correct version of the site logo
    renderLogo() {

        return (
            <div className="left brand-logo" style={{paddingLeft: "10px"}}>
                <Link
                    to={this.props.auth ? "/surveys" : "/"}
                    className="hide-on-med-and-down">
                    Trevor's Email App
                </Link>

                <Link
                    to={this.props.auth ? "/surveys" : "/"}
                    className="hide-on-large-only">
                    <i className="material-icons medium">account_box</i>
                </Link>
            </div>
        );
    }

    //method for navbar content render logic, method
    //checks user auth state and renders correct version
    renderNav() {
        switch (this.props.auth) {
            case null: return;

            case false: return <li>
                <a href="/auth/google" style={{ fontWeight: "bold" }}>Login With Google</a>
            </li>;

            default: return [
                <li key="1"><Payments/></li>,
                <li key="2"><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    //method for rendering the header
    //Ternary statement changes logo link to dashboard if user
    //is logged in, else logo links to landing
    render() {
        return (
            <nav>
                <div className="nav-wrapper light-blue darken-4">
                    {this.renderLogo()}

                    <a data-target="mobile" className="sidenav-trigger right">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {this.renderNav()}
                    </ul>
                    <ul className="sidenav right" id="mobile">
                        {this.renderNav()}
                    </ul>
                </div>


            </nav>
        );
    }
}

//initializes sidenav trigger
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
});

//maps auth state from store to header props
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);