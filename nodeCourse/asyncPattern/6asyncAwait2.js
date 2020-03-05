const fs = require('fs');
const { promisify } = require('util');
const beep = () => process.stdout.write("\x07");
const timeOut = (sec) => new Promise(resolve => setTimeout(resolve, sec * 1000));
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);

const readDirectory = async () => {
    const arr = await readdir(__dirname);
    console.log(arr);
}

readDirectory();
// ['1callback1.js',
//     '1callback2.js',
//     '2promiseResolve.js',
//     '3promiseReject.js',
//     '4promisify.js',
//     '4promisify2.js',
//     '5sequentialPromises.js',
//     '6asyncAwait1.js',
//     '6asyncAwait2.js']
