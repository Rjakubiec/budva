var express = require('express');
var path = require('path');

var app = express();

// app.configure(function () {
//     app.use(express.bodyParser());
//     app.use(express.logger());
//     app.use(express.static(path.join(__dirname,'dist')));
    
// });

app.use(express.static(__dirname + '/'));
//add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/',function (request,response) {
    response.send("Ups coś poszło nie tak");
})

// var port = process.env.Port || 5000;

app.listen(process.env.PORT || 3000, function(){
  console.log("Serwer działa na porcie", this.address().port, app.settings.env);
});