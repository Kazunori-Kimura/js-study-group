var http = require("http");
var urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
];
var result = ["", "", ""];

function getData(url, index) {
    http.get(url, function(res) {
        res.setEncoding("utf8");
        
        var value = "";
        res.on("data", function(data) {
            value += data;
        });
        res.on("end", function() {
            result[index] = value;
            
            // 受信済みの要素のみ抽出
            var filtered = result.filter(function(item) {
                return item.length !== 0;
            });
            // 全部受信してる？
            if (filtered.length === 3) {
                filtered.forEach(function(item) {
                    console.log(item);
                });
            }
        });
        res.on("error", function(err) {
            console.error(err);
        });
    }).on("error", function(err) {
        console.error(err);
    });
}

urls.forEach(function(url, index) {
    getData(url, index);
});