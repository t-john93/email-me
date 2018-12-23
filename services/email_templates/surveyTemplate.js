
const keys = require("../../config/keys");

module.exports = (survey) => {
    // language=HTML
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Please answer this one question survey</h3>
                    <p>${survey.body}</p>
                    
                    <div>
                        <button><a href="${ keys.redirectDomain }/api/surveys/feedback">Cats</a></button>
                    </div>
                    <div style="margin: 20px 0px;">
                        <button><a href="${ keys.redirectDomain }/api/surveys/feedback">Dogs</a></button>
                    </div>
                </div>
            </body>
        </html>
        `;
};