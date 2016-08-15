/**
 * Created by USER on 2016-08-06.
 */

var fs = require('fs');
fs.readFile('files/file.txt', function(err, data){
    if(err){
        console.log('data:', err)
    }
    console.log('data:' + data);
});

fs.readFile('files/user.json', function(err, data){
    var parseFile = JSON.parse(data);
    // console.log('data:' + data.nickName);
    console.log('data:' + parseFile.NickName);
});
