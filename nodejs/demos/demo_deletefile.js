var fs = require('fs');

fs.unlink('mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

fs.unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});