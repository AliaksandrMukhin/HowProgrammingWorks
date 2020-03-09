const { readdir, readdirSync } = require('fs');

console.log('start');
// const data = readdirSync(__dirname);
readdir(__dirname, (err, data) => {
    console.log(data);
});

console.log('end');

// start
// end
// ['readdir.js']