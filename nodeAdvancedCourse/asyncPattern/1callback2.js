const delay = (time, callback) => {
    setTimeout(callback, time * 1000);
}

console.log('begin');
delay(1, () => console.log(`invoked after 1 sec`))
console.log('end first tick');

// begin
// end first tick
// invoked after 1 sec