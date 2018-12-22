import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

//Header component declaration
class Header extends Component {

    //method for header "right" class render logic, method
    //checks user auth state and renders correct version
    renderContent() {
        switch (this.props.auth) {
            case null: return;

            case false: return <li><a> href="/auth/google">Login With Google</a></li>;

            default: return [
                <li key="1"><Payments/></li>,
                <li key="2" style={{ margin: "0rem .8rem" }}>
                    Credits: { this.props.auth.credits }
                </li>,
                <li key="3"><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    //method for rendering the header
    //Ternary statement changes logo link to dashboard if user
    //is logged in, else logo links to landing
    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={ this.props.auth ? "/surveys" : "/" }
                        className="left brand-logo"
                    >
                        Email Me
                    </Link>
                    <ul className="right">
                        { this.renderContent() }
                    </ul>
                </div>
            </nav>
        );
    }
}

//maps store auth state to header auth prop
function mapStateToProps( {auth} ) {
    return { auth };
}

export default connect(mapStateToProps)(Header);