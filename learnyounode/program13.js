var http = require("http");
var url = require("url");
var port = +process.argv[2];

var server = http.createServer(function(req, res) {
    
    if (req.method !== "GET") {
        res.writeHead(405); //Method Not Allowed
        res.end();
        return;
    }
    
    var parsedUrl = url.parse(req.url, true);
    var data;
    switch(parsedUrl.pathname) {
        case "/api/parsetime":
            data = parseTime(parsedUrl.query.iso);
            break;
        case "/api/unixtime":
            data = unixTime(parsedUrl.query.iso);
            break;
        default:
            res.writeHead(404); //Not Found
            res.end();
            return;
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
});
server.listen(port);

function parseTime(iso) {
    var d = new Date(iso);
    return {
        "hour": d.getHours(),
        "minute": d.getMinutes(),
        "second": d.getSeconds()
    };
}

function unixTime(iso) {
    var d = new Date(iso);
    return {
        "unixtime": d.getTime()
    };
}

