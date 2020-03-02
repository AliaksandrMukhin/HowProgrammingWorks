const delay = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('invoked after 1 sec')
    }, time * 1000);
})


console.log('begin');
delay(1)
    .then(console.log)
    .then(() => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('another 1 sec');
            resolve();
        }, 1000)
    }))
    .then(() => console.log("end of promise"));
console.log('end first tick');

// begin
// end first tick
// invoked after 1 sec
// another 1 sec
// end of promise



