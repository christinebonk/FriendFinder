var path = require("path");

function htmlRoutes(app) {
	app.get('/', function(request, response){
   		response.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/survey', function(request, response){
	    response.sendFile(path.join(__dirname, '../public/survey.html'));
	});
}

module.exports = htmlRoutes;

