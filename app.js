const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("build"));

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

require("./lib/routes")(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "dev") {
    console.error(err.stack);
    res.json({ message: err.message });
  }
});

module.exports = app;
