var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('hello mate...im invincible'); //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 5000
