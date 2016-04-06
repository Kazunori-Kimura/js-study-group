var net = require("net");
var port = +process.argv[2];

var server = net.createServer(function(socket) {
    var data = now();
    socket.write(data);
    socket.write("\n");
    socket.end();
});
server.listen(port);

function now() {
    var d = new Date();
    var year = d.getFullYear();
    var mon = padLeft(d.getMonth() + 1, 2, "0");
    var day = padLeft(d.getDate(), 2, "0");
    var hour = padLeft(d.getHours(), 2, "0");
    var min = padLeft(d.getMinutes(), 2, "0");
    return year + "-" + mon + "-" + day + " " + hour + ":" + min;
}

/**
 * 左パディング
 * @param {string} value - パディングする文字列
 * @param {number} length - 返却する文字列長
 * @param {string} ch - パディングに使用する文字
 * @return {string}
 */
function padLeft(value, length, ch) {
    var ret = "";
    for(var i=0; i<length; i++) {
        ret += ch;
    }
    return (ret + value).slice(-1 * length);
}
