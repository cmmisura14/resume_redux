var express = require('express');
var app = express();

var path = require('path');

app.set('port', (process.env.PORT || 5000));

var index = require('./routes/index');

app.listen(app.get('port'), function(){
    console.log("App is running on port: ", app.get('port'));
});

app.use('/', index);