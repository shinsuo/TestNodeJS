/**
 * New node file
 */

 
 var ws = require("websocket-server");
 var server = ws.createServer();
 
 server.addListener("connection",function(connection){
 	connection.addListener("message",function(msg){
		server.send(msg);
 	});
 });
 
 server.listen(8080);
 console.log("web socket");