const express = require("express");
const app = express();

//app.get has 2 args, name, and => function
app.get("/", (req, res) => {
  // => has 2 args, req and response
  res.send({ hi: "there" });
}); //res calls .send with json 'hi there'

const PORT = process.env.PORT || 5000; //dyn port var for heroku, or 5000 local
app.listen(PORT);
