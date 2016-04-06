var fs = require("fs");
var path = require("path");

/**
 * @param {string} folder - ディレクトリ
 * @param {string} ext - 拡張子
 * @param {filterLsCallback} callback - コールバック関数
 */
function filterLs(folder, ext, callback) {
    fs.readdir(folder, function(err, list) {
        if (err) {
            callback(err, null);
            return;
        }
        // filter
        var filtered = list.filter(function(value) {
            return path.extname(value) === "." + ext;
        });
        callback(null, filtered);
    });
}

module.exports = filterLs;

/**
 * @callback filterLsCallback
 * @param {error} error
 * @param {Array} filtered - フィルタされた配列
 */