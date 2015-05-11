var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/template', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/templates/contact.html'));
});

router.get('/data', function(request, response){
    response.sendFile(path.join(__dirname, '../public/assets/data/contact.json'));
});

router.get('/*', function( request, response){
    var file = request.params[0] || "views/index.html";

    response.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;