const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('C:\\Users\\Aliaksandr_Mukhin\\Desktop\\HowProgrammingWorks\\HowProgrammingWorks\\nodeCourse\\streams\\powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4');

readStream.pipe(writeStream).on('error', console.error);