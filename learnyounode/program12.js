var http = require("http");
var port = +process.argv[2];

var server = http.createServer(function(req, res) {
    
    if (req.method !== "POST") {
        res.end("send me a POST\n");
        return;
    }
    
    var value = "";
    req.on("data", function(data) {
        value += data.toString();
    });
    
    req.on("end", function(){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(value.toUpperCase());
        res.end();
    });
    
});
server.listen(port);