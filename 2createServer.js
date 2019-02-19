/*****************Call Add Numbers******************/

// var addNumbers = require('./addition.js');
// console.log(addNumbers.addition(1));


/****************Create and pass JSON as server response***************/

// var http = require('http');

// var _url = require('./user.json');

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(_url));
// });

// server.listen(8080);

// console.log('Server Started on http://localhost:8080/');


/*Using fs */
var fs = require('fs');
var http = require('http');
var path = require('path');


var readData = function (path) {
    var data = fs.readFileSync(path, 'utf8');
    // var data = require(path);
    return data ? data : {};
    // return  data  ? data : {};
}
//fs.readFile method is by default async
//fs.readFileSync method is by default Sync
//require : it needs the server restart if any changes are made to resource file.
var server = http.createServer(function (req, res) {

    var absPath = req.url.substring(1, req.url.length);
    if (fs.existsSync(absPath)) {

        var data = readData(absPath);
        varpathValue = path.extname(absPath);

        if (varpathValue == 'json') {
            varpathValue = 'application/' + varpathValue;
        } else if (varpathValue == 'html') {
            varpathValue = 'text/' + varpathValue;
        }

        res.writeHead(200, {
            'Content-Type': varpathValue
        });
        res.end(data); //res.end needs to pass a string
    } else {
        console.log(absPath + ' File not found');
        res.end();
    }
});

server.listen(8080);

console.log('Server Started on http://localhost:8080/');