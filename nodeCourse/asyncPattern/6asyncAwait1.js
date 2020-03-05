const fs = require('fs');
const { promisify } = require('util');
const beep = () => process.stdout.write("\x07");
const timeOut = (sec) => new Promise(resolve => setTimeout(resolve, sec * 1000));
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const doStuffSequentially = async () => {
    console.log('starting');
    await timeOut(2);
    console.log('waiting some more');
    await writeFile('file.txt', 'Sample file...');
    await timeOut(3);
    beep();
    console.log('file.txt created');
    await unlink('file.txt');
    await timeOut(3);
    beep();
    console.log('file.txt removed');
    console.log('sequential execution complete');
}

doStuffSequentially();
// starting
// waiting some more
// file.txt created
// file.txt removed
// sequential execution complete
