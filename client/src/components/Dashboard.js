import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./Surveys/SurveyList";

const Dashboard = () => {
    return (
        <div>
            <ul className="pagination">
                <SurveyList/>
            </ul>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large teal">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
