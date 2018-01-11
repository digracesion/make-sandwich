var express = require('express');
var app = express();
// var path = require('path');
// var PORT = process.env.PORT || 5000

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//set up views
app.set('views',__dirname);
app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index.js');
});

app.listen(app.get('port'), function(){
	console.log('Node app is running on port ', app.get('port'));
});
