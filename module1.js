//var _ = require('underscore'); //'npm install underscore' at command line for this to work : )
//var m2 = require('./module2');
//console.log(m2);
//m2();
//Logs underscore library.
//console.log(_);

//Creating a webserver
var http = require('http');

var server = http.createServer(function(request, response) {
	console.log('Got a request!');
	response.write('Hi!');
	response.end();
});

server.listen(3000);