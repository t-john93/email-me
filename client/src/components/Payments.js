import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {

    render() {
        return (
            <a>
                <StripeCheckout
                    name="EmailMe"
                    description="5$ for 5 credits"
                    amount={500}
                    token={ (token) => this.props.handleToken(token) }
                    stripeKey={process.env.REACT_APP_STRIPE_KEY} >
                    Add Credits
                </StripeCheckout>
            </a>
        );
    }
}
export default connect(null, actions)(Payments);
