var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './app/public')));


htmlRoutes(app);

apiRoutes(app);


app.listen(port, function(){
    console.log("Listening on PORT " + port);
});
