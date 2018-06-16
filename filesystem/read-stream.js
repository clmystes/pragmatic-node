require('fs').createReadStream(process[2])
  .on('data', chunk => process.stdout.write(chunk))
  .on('error', err => process.stderr.write(err.message));