var filterLs = require("./program6-module");
var folder = process.argv[2];
var ext = process.argv[3];

filterLs(folder, ext, function(err, filtered) {
    if (err) {
        console.error(err);
        return;
    }
    filtered.forEach(function(value) {
        console.log(value);
    });
});
