/**
 * Created by USER on 2016-08-06.
 */

var fs = require('fs');

var cssDoc = 'body{margin:0;}';

fs.writeFile('files/style.css', cssDoc);