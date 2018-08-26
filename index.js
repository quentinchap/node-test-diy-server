var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

app.use(function(req, res) {
  console.log(req.body);
  res.send("ok");
});

// listen for requests :)
var listener = app.listen(60871, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
