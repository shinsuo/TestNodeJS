
var exec 	= require("child_process").exec;
var qs		= require("querystring");

function start(response,postData){
	console.log("Request handler 'start' was called");
	
	/*
	function sleep(milliSeconds){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds)
		{
			console.log(new Date().getTime());
		}
	};
	
	sleep(10000);
	//*/
	
	/*
	var content = "empty";
	exec("find /",{timeout:10000,maxBuffer:20000*1024},function(error,stdout,stderr){
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
	//*/
	//return "Hello Start\n" + content;
	
	
	var body = 	'<html>'+
					'<head>'+
						'<meta http-equiv="Content-Type" content="text/html;'+ 'charset=UTF-8"/>'+
					'</head>'+
					'<body>'+
						'<form action="/upload" method="post">'+
							'<textarea name="text1" rows="20" cols="60"></textarea>'+ '<input type="submit" value="Submit text"/>'+ 
						'</form>'+
					'</body>'+
				'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}

function upload(response,postData){
	console.log("Request handler 'upload' was called");
	//return "Hello Upload";
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload:"+qs.parse(postData).text);
	response.end();
}

exports.start = start;
exports.upload = upload;