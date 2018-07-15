var path = require("path");
var fs = require("fs");
var bodyParser = require('body-parser');
var friends = require("../data/friends.js");
var MakePerson = require("../../makeperson.js")
var topFriend = require("../../comparefriend.js")
var you = {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      2,
      4,
      1,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}


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
		// var you = new MakePerson(name,picture,array);
		
		//compare friends
		topFriend(you, friends);
		
	});
}


module.exports = apiRoutes;



