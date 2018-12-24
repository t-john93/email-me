
import React from "react";

export default ({ input, label, meta:{ error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: "5px"}}/>
            <div className="red-text" style={{ margin: "10px 0px 20px 0px"}}>
                {touched && error}
            </div>
        </div>
    );
};