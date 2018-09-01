const express = require("express");
require("./services/passport");

const app = express();

// require and call authRoutes(app);
const authRoutes = require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; //dyn port var for heroku, or 5000 local
app.listen(PORT);
