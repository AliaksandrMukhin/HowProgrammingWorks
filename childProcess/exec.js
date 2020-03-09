const { exec } = require('child_process');

exec('ls', (err, stdout, stderr) => {
    console.log({ err, stdout, stderr });
})