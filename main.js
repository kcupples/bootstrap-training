/*Hello World Program - Node.js */
var http=require("http");
http.createServer (function (request, response){
	//Send HTTP Header
	//HTTP Status=200 : OK
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//Send Response in Body as "Hello World"
	response.end('Hello World\n');
}).listen(8082);

console.log("Http Server running on 8082");