var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 5000
var http = require('http');
express()
  .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

setInterval(function(){
	http.get("make-sandwich.herokuapp.com");
}, 300000); //awale every 5 minutes

console.log("sample");
