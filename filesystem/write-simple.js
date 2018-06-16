const fs = require('fs');

fs.writeFile('target.txt', 'hello world', err => {
  if (err) return err;
  console.log('File saved');
});