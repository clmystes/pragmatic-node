const fs = require('fs');
const net = require('net');

const filename = process.argv[2];

if(!filename) throw Error('Error: No filename specified.');

net.createServer(connection => {
  console.log('Subcriber connected.');
  connection.write(`Now watching "${filename}" for changes...\n`);

  const watcher =
    fs.watch(filename, () => connection.write(
      JSON.stringify({
        type: 'changed',
        timestamp: Date.now()
      }) + '\n'
    ));

  connection.on('close', () => {
    console.log('Subcriber disconnected.');
    watcher.close();
  })
}).listen(60300, () => console.log('Listening for subscribers...'));