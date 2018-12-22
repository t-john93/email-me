//middleware for checking if the requesting user is logged
//into an account

module.exports = (req, res, next) => {
    if (!req.user) {
        return  (
            res
                .status(401)
                .send({ error: "You must be logged in to access this content" })
        );
    }
    next();
};