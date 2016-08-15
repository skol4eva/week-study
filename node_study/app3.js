/**
 * Created by USER on 2016-08-06.
 */

var fs = require('fs');

fs.watchFile('files/style.css', function(current, old){
    console.log(current, old);
    console.log('파일이 변경되었습니다.');
})