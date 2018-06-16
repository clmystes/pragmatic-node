const netClient = require('net').connect({port: 60300});
const client = require('./lib/ldj-client.js').connect(netClient);

client.on('data', data => {
  const msg = JSON.parse(data);
  if (msg.type === 'watching') {
    console.log(`Now watching: ${msg.file}`);
  } else if (msg.type === 'changed') {
    const date = new Data(msg.timestamp);
  } else {
    console.log(`Unrecognized message type: ${msg.type}`);
  }
});