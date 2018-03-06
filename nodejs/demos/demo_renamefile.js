var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');

    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
      if (err) throw err;
      console.log('File Renamed!');
  });
});
