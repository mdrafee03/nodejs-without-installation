var http = require('http');
var server = http.createServer(function (req, res) {
    var body = 'Amazing lightweight webserver using node.js\n';
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain' });
 
    res.end(body);
});
server.listen(3000);
console.log('Server is running on port 3000');