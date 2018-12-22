//middleware for checking if the requesting user has enough
//credits to create a survey

module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return (
            res
                .status(403)
                .send({ error: "Not Enough Credits" })
        );
    }
    next();
};