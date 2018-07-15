var path = require("path");
var fs = require("fs");
var bodyParser = require('body-parser');
var friends = JSON.parse(fs.readFileSync("app/data/friends.js", "utf8"));
var topFriend = require("../../comparefriend.js");

function apiRoutes(app) {


	app.get("/api/friends", function(request, response){
		return response.json(friends);		
	});

	app.post("/api/friends", function(request, response){

		// contruct friend
		var you = request.body;
		
		//compare friends
		var top = topFriend(you, friends);

		//add new person to array
		friends.push(you);

		//write new person to file
		friends = JSON.stringify(friends);
		fs.writeFile(__dirname + "/../data/friends.js", friends, function (err) {
		  if (err) return console.log(err);
		});	

		response.json({name: top.name, photo: top.photo});

		response.redirect('/');
	});

}

module.exports = apiRoutes;



