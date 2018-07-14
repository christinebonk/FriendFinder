var path = require("path");
var fs = require("fs");
var bodyParser = require('body-parser');
var friends = JSON.parse(fs.readFileSync("app/data/friends.js", "utf8"))


function apiRoutes(app) {
	app.get("/api/friends", function(request, response){
		console.log(friends)
		return response.json(friends);		
	});

	app.post("/api/friends", function(request, response){
	    response.sendFile(path.join(__dirname, '../public/survey.html'));
	});
}

module.exports = apiRoutes;





// var newcharacter = req.body;

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);