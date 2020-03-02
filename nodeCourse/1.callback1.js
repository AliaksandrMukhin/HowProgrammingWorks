const process = require('process');

const hideString = (str, done) => {
    process.nextTick(done, str.replace(/[a-zA-Z]/g, 'X'));
};

hideString('hello World!', (newStr) => console.log(newStr));

console.log('end!');

// end!
// XXXXX XXXXX!

 