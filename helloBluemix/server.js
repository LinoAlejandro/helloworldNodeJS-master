var http = require("http");
const PORT = process.env.Port || 3000;
http.createServer(function(request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'})

  response.end('Hello World\n');
}).listen(PORT);

console.log('Server running at port:' + PORT);
