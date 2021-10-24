
var http = require("http");
const os = require("os");

http.createServer(function (request, response) {

   response.writeHead(200, {"Content-Type": "text/plain"});
   console.log(request.headers["host"])
   
   response.end("Hello from " + os.hostname() + "!\n");
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');