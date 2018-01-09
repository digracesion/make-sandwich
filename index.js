'use strict';

const http = require('http');
const host = 'https://make-sandwich.herokuapp.com/';
const wwoApiKey = '6f5c9852b94a4690bf562fe99dd7f9cb';
exports.sandwichWebhook = (req, res)=>{
	let meat = req.body.result.parameters['meat'];
	let condimetns = req.body.result.parameters['condiments'];
	callSandwichAPI(meat, condiments).then((output)=>{
		console.log('correct path');
		res.setHeader('Content-Type','application/json');
		res.send(JSON.stringify({'speech':output,'displayText':output}));
	}).catch((error)=>{
		console.log('catcher');
		res.setHeader('Content-Type','application/json');
		res.send(JSON.stringify({'speech':error, 'displayText':error}));
	});
};

function callSandwichAPI (meat, condiments){
	return new Promise ((resolve, reject)=>{
		console.log('API Request: ' + host);
	});
}