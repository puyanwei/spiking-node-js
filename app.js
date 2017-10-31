var fs = require('fs');

fs.readFile('FS-Test.txt', 'utf8', (err, data) => {
  console.log(data);
})

console.log('test');
