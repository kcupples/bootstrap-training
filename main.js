var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

app.get('/', function (request, response) {
   response.send("Hi");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/*
var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})*/