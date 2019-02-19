// since we want to use the functionality of http and we are using the require(http) command.
var fs = require('fs');
var http = require('http');
var url = require('url');

// A function to get data from JSON file
var getContentType = function (path) {
    var contentType, arrPath = path.split(/[\s.]+/);

    switch(arrPath[arrPath.length-1]) {
        case "json":
            contentType = 'application/json';
            break;
        case "pdf":
            contentType = 'application/pdf';
            break;
        default:
            contentType = 'text/html';
    }

    return contentType;
};

getData(){
    
}
// creating a server application which is based on a simple function
// This function is called, whenever a request is made to our server application
var server = http.createServer(function (req, res) {

    var baseDir = 'htdocs';
    var datacheck;
    // Parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    var headers = {
        'Content-Type': getContentType(pathname)
    };

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // default file - index.htm
    pathname = ('/' === pathname) ? '/user.html' : pathname;

    // Read the requested file content from file system
    return fs.readFile(baseDir + pathname, function (err, data) {

        if (err) {
            console.log(err);

            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, headers);
        } else {
            //Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, headers);

            // Write the content of the file to response body
            res.write(data.toString());
        }
        // datacheck = data;
        // Send the response body
        res.end();
        return data;
    });
});

// using the server.listen function to make our server application listen to client requests on port no 8080.
server.listen(8080);