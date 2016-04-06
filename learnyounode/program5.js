var fs = require("fs");
var path = require("path");
var folder = process.argv[2];
var ext = process.argv[3];

fs.readdir(folder, function(err, list) {
    if (err) {
        throw err;
    }
    var filtered = list.filter(function(value) {
        return path.extname(value) === "." + ext;
    });
    filtered.forEach(function(value){
        console.log(value);
    });
});

