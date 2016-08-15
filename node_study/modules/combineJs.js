/**
 * Created by USER on 2016-08-06.
 */

var fs = require('fs');

module.exports = function (jsSrc, exportJs) {
    var mergeCode = '';
    jsSrc.forEach(function (file){
        mergeCode += fs.readFileSync(file);
    });

    fs.writeFile(exportJs, mergeCode);
}