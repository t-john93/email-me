
const keys = require("../../config/keys");

module.exports = (survey) => {

    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Please answer this one question survey</h3>
                    <p>${survey.body}</p>
                    
                    <div>
                        <button><a href="${ keys.redirectDomain }/api/surveys/${survey.id}/yes">Yes</a></button>
                    </div>
                    <div style="margin: 20px 0px;">
                        <button><a href="${ keys.redirectDomain }/api/surveys/${survey.id}/no">No</a></button>
                    </div>
                </div>
            </body>
        </html>
        `;
};