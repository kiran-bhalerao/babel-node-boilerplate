"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require("express-handlebars");

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

// HANDLEBARS MIDDLEWARE
app.engine("handlebars", (0, _expressHandlebars2.default)({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.set('views', './dist/views')
// app.set('layouts', './dist/views/layouts')

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(PORT, function () {
  return console.log("Server is live at " + PORT);
});