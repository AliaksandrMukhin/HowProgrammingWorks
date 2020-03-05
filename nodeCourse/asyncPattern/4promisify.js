const { promisify } = require('util');

const delay = (time, callback) => {
    if (time > 3) {
        return callback(new Error(`${time} is too long`));
    }
    setTimeout(() => {
        return callback(null, `invoked after ${time} sec`);
    }, time * 1000);
}

const promiseDelay = promisify(delay);

console.log('begin');
promiseDelay(2)
    .then(console.log)
    .catch(err => console.log(err.message))
console.log('end first tick');



