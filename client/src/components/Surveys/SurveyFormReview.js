
import React from  "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = formFields.map(({ label, name }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please Review and Select Continue</h5>
            {reviewFields}
            <button className="red btn-flat left white-text" onClick={onCancel}>
                Back
                <i className={"material-icons left medium"}>cancel</i>
            </button>
            <button className="teal btn-flat right white-text"
                    onClick={() => submitSurvey(formValues, history)}>
                Send
                <i className="material-icons right medium">done</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));