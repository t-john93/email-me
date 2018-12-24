
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmail from "../../utilities/validateEmail";
import formFields from "./formFields";

class SurveyForm extends Component {

    renderFields() {
        return (
            formFields.map(({ label, name }) => {
                return(<Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />);
            })
        );
    }


    render() {
        return (
            <form style={{ marginTop: "20px"}}
                  onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>

                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        );

    }
}

function validate(values) {
    const errors = {};

    formFields.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = "*Required Field*";
        }
    });

    errors.recipients = validateEmail(values.recipients || "");
    return errors;
}

export default reduxForm({
    validate,
    form: "surveyForm",
    destroyOnUnmount: false
})(SurveyForm);