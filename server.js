/*console.log("Hello World!--SuoXin");

var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello WWW");
	response.end();
}).listen(8888);
*/

var http 	= require("http");
var url 	= require("url");
var formidable = require("formidable");

function start(route,handle){
	function onRequest(request, response) { 
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" + pathname + "received."); 
		
		/*
		response.writeHead(200, {"Content-Type": "text/plain"}); 
		response.write(route(handle,pathname,reponse));
	  	response.end();
	  	*/
	  	
	  	var postData = "";
	  	
	  	request.setEncoding("utf8");
	  	request.addListener("data",function(postDataChunk){
	  		postData += postDataChunk;
	  		console.log("Received Post data chunk:"+postDataChunk);
	  	});
	  	request.addListener("end",function(){
			route(handle,pathname,response,postData);	
	  	});
	  	
	}
  
	http.createServer(onRequest).listen(8888); console.log("Server has started.");
}

exports.start = start;
