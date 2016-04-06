var http = require("http");
var url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding("utf8");
    var value = "";
    
    res.on("data", function(data) {
        value += data;
    });
    
    res.on("end", function(data) {
        console.log(value.length);
        console.log(value);
    });
    
    res.on("error", function(err) {
        console.error(err);
    });
});