var path = require("path");
var fs = require("fs");
var bodyParser = require('body-parser');
var friends = JSON.parse(fs.readFileSync("app/data/friends.js", "utf8"));
var MakePerson = require("../../makeperson.js")
var topFriend = require("../../comparefriend.js")

function apiRoutes(app) {


	app.get("/api/friends", function(request, response){
		return response.json(friends);		
	});

	app.post("/api/friends", function(request, response){
		//parse data
		var name = request.body.name;
		var picture = request.body.picture;
		var array = [request.body.q1, request.body.q2, request.body.q3, request.body.q4, request.body.q5, request.body.q6, request.body.q7, request.body.q8, request.body.q9, request.body.q10];

		// contruct friend
		var you = new MakePerson(name,picture,array);
		
		//compare friends
		topFriend(you, friends);

		//add you
		friends.push(you);

		friends = JSON.stringify(friends);
		fs.writeFile(__dirname + "/../data/friends.js", friends, function (err) {
		  if (err) return console.log(err);
		});	
	});
}



module.exports = apiRoutes;



