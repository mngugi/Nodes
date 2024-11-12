var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content! That is Goodnews', function (err) {
  if (err) throw err;
  console.log('Saved!');
});