const EventEmitter = require('events');
class ExecWrapper extends EventEmitter {
    execute(func) {
        console.log("Going to execute");
        this.emit('begin', 'hi there');
        func();
        this.emit('end');
        console.log('After execution');
    }
}

const logExec = new ExecWrapper();

const foo = () => console.log("!!!! EXECUTION !!!!");

logExec.on('begin', (data) => console.log('begin, ', data));

logExec.on('end', () => console.log('end'))

logExec.execute(foo);
