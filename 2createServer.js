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
    try{
        var data = fs.readFile(path, 'utf8');
    }
    catch{
        console.log('Requested File not Found : ' + path);
    }
    return data ? data : {};
}
//fs.readFile method is by default async
//fs.readFileSync method is by default Sync
//require : it needs the server restart if any changes are made to resource file.
var server = http.createServer(function (req, res) {
    
    console.log(req.url);
    
    var data = readData('.'+ req.url);
    var abspath = fs.existsSync(req.url);
    varpathValue = path.extname(req.url).substring(1);
    console.log(path.extname(req.url).substring(1));
    if (varpathValue == 'json'){
        varpathValue = 'application/' + varpathValue;
        console.log(varpathValue);
    }
    else if (varpathValue == 'html'){
        varpathValue = 'text/' + varpathValue;
        console.log(varpathValue);
    }
    
    res.writeHead(200, { 'Content-Type': varpathValue });
    res.end(data); //res.end needs to pass a string
});

server.listen(8080);

console.log('Server Started on http://localhost:8080/');