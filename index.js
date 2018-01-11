var express = require('express')
var app = express()

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

var http = require('http');
setInterval(function(){
	http.get("make-sandwich.herokuapp.com");
}, 300000); //awale every 5 minutes
