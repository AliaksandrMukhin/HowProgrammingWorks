console.log("Hi! Type here...");
process.stdin.on('data', (param) => {
    console.log('...', param.toString());
})