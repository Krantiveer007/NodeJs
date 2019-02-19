var express = require('express');

var app = express();

app.use(express.static('./'));
app.get('/', function (req, res) {
    res.send('Hello Kranti');
});

app.route('/hello').get(function (req, res) {
    res.send('Hello Krantiveer');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.port;
});