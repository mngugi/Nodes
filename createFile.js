var fs = require('fs')

fs.appendFile('newfile.txt', 'good morning', function(err) {
 if(err) throw err;
 console.log('saved!');
});
