const { EventEmitter } = require('events');
const ee = new EventEmitter();

ee.on('myEvent', data => console.log(data, " - ON"));
ee.once('myEvent', data => console.log(data, ' - ONCE'));
ee.emit('myEvent', "HI THERE!")
ee.emit('myEvent', "HI THERE!")
ee.emit('myEvent', "HI THERE!")
// HI THERE! - ON
// HI THERE! - ONCE
// HI THERE! - ON
// HI THERE! - ON