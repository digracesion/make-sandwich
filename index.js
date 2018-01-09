exports.helloHttp = function helloHttp (req, res){
	response = "This is a sample response from your webhook!"

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify*({"speech":response, "displayText":response}));
}