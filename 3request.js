var request = require('request');

request('https://github.com/', function(error, response, body){
    console.log(error);
    console.log(response);
    console.log(body);
})