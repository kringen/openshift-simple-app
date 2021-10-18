
var express = require("express");
const os = require("os");

app = express();

app.get('/', function (req, res) {
  res.send("Hello from " + os.hostname() + "!\n");
});

app.listen(8080, function () {
  console.log("App listening on port 8080");
});