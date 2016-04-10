var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var Zapisany = require('./model/zapisany');

mongoose.connect('mongodb://rjakubiec:rjakubiec@ds013310.mlab.com:13310/budva', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connect');
    }
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost/budva");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Origin,__setXHR_");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST,OPTIONS');
    res.header('Access-Control-Allow-Credentials', "true");
    next();
});

app.use(express.static(__dirname + '/'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/',function (request,response) {
    response.send("Ups coś poszło nie tak");
})

//zapis
app.post('/zapisany', function (req, res, next) {

    var zapisany = new Zapisany();
   console.log(req.body.data.first_name);
    zapisany.imie=req.body.data.first_name;
    zapisany.email=req.body.data.last_name;
    zapisany.email=req.body.data.picture.data.url;

    zapisany.save(function (err) {

        if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');

    });
});


app.get('/zapisani', function (req, res, next) {
    Zapisany.find(function (err, zapisany) {
        if (err) res.json('error:' + err);

        res.json(zapisany);
    });
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Serwer działa na porcie", this.address().port, app.settings.env);
});