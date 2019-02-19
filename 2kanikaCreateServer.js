var http = require('http');
var path = require('path');

var fs = require('fs');

var readDataFromFile = function(path){
    var data = fs.readFileSync(path,'utf8');
    //     function(err, data){
    //     if(err){
    // console.log(err);
    //     }
    //     if(data){
    //     return data? data:{};
    //     }
    // });  // when  u read a file data is not in json format
    return data? data:{};
}

var server = http.createServer(function(req,res){
    var pathValue = req.url.toString();
    var absPath = pathValue.substring(1,pathValue.length);
     if(fs.existsSync(absPath)){
         console.log(absPath);
     var data = readDataFromFile(absPath);
     var extension = path.extname(absPath)
     var contentType = null;
     if(extension == '.json'){
         contentType = 'application/json';
     }
     if(extension == '.html'){
         contentType = 'text/html';
     }
     res.writeHead(200, {'Content-Type': contentType});
     res.end(data);
    }
    else{
        console.log(absPath + ' File not found');
        res.end();
    }

});


server.listen(8080);