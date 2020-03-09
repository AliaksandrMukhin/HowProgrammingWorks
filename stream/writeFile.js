const { createWriteStream } = require('fs');

console.log("Write something...");
const fileStream = createWriteStream('./fooFile.txt', 'UTF-8');

// process.stdin.on('data', text => {
//     fileStream.write(text);
// });
// the same
process.stdin.pipe(fileStream);
