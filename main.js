var http = require('http');
var fs = require('fs');
var url = require('url');

//Create the server
http.createServer(function (request, response){
	//Parse the URL for the file name
	var pathName=url.parse(request.url).pathname;
	console.log('Request for: ' + pathName);

	fs.readFile(pathName.substr(1), function (err,data){
		if (err){
			console.log(err);
			//Set HTTP Status to 404
			//Set Content Type to text/plain
			response.writeHead(404, {'Content-Type': 'text/html'});
		}
		else {
			//Page Found
			//Set HTTP Status to 200
			response.writeHead(200, {'Content-Type' : 'text/html'});
			response.write(data.toString());
		}
		response.end();

		});
}).listen(80);
console.log('Server running on port 8082');
