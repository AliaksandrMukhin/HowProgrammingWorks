const fs = require('fs');
const { promisify } = require('util');
const beep = () => process.stdout.write("\x07");
const timeOut = (sec) => new Promise(resolve => setTimeout(resolve, sec * 1000));
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const doStuffSequentially = () => Promise.resolve()
    .then(() => 'starting')
    .then(console.log)
    .then(() => timeOut(2))
    .then(() => 'waiting some more')
    .then(console.log)
    .then(() => writeFile('file.txt', 'Sample file...'))
    .then(() => timeOut(3))
    .then(beep)
    .then(() => console.log('file.txt created'))
    .then(() => unlink('file.txt'))
    .then(() => timeOut(3))
    .then(beep)
    .then(() => {
        console.log('file.txt removed');
        console.log('sequential execution complete');
    })


doStuffSequentially();
// starting
// waiting some more
// file.txt created
// file.txt removed
// sequential execution complete
