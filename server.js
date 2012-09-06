var http = require('http');
var nstat = require('node-static');

var port = process.env.PORT || 7466;

// Create static server instance to serve from public folder
var file = new(nstat.Server)('./public');

http.createServer( function(req, res) {
    req.addListener('end', function() {
        // Serve default.html by default
        if (req.url == '/') {
            req.url = '/default.html';
        }
        // Serve static file
        console.log('Now serving ' + req.url);
        file.serve(req, res);
    });
}).listen(port);

console.log('Now listening on port ' + port);