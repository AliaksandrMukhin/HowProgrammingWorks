const { promisify } = require('util');
const fs = require('fs');

const pWriteFile = promisify(fs.writeFile);
pWriteFile('sample.txt', "text hi text")
    .then(() => console.log('file created'))
    .catch((err) => console.log(err.message))