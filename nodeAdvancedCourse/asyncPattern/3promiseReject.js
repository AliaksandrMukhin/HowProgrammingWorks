const delay = (time) => new Promise((resolve, reject) => {
    if (time > 3) {
        return reject(new Error(`${time} is too long`))
    }
    setTimeout(() => {
        return resolve('invoked after 1 sec')
    }, time * 1000);
})


console.log('begin');
delay(4)
    .then(console.log)
    .then(() => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('another 1 sec');
            resolve();
        }, 1000)
    }))
    .then(() => console.log("end of promise"))
    .catch(err => {
        console.log('err.message :', err.message);
    });
console.log('end first tick');

// begin
// end first tick
// err.message : 4 is too long


