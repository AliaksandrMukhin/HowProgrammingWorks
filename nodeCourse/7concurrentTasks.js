const logUpdate = require('log-update');
const delay = (sec) => new Promise(resolve => setTimeout(resolve, sec * 1000));

class ConcurrentTasks {
    constructor(tasks = [], concurrent) {
        this.todo = tasks;
        this.concurrent = concurrent;
        this.inProgress = [];
        this.complete = [];
    }

    get runNext() {
        return this.todo.length
            && (this.inProgress.length < this.concurrent)
    }

    run() {
        while (this.runNext) {
            const promise = this.todo.shift();
            promise.then(() => {
                this.complete.push(this.inProgress.shift());
                this.show();
                this.run();
            });
            this.inProgress.push(promise);
            this.show();
        }
    }

    show() {
        const { todo, inProgress, complete } = this;
        logUpdate(`
        todo:       [${todo.map(item => 'X')}]
        inProgress: [${inProgress.map(item => 'X')}]
        complete:   [${complete.map(item => 'X')}]
        `)
    }
}

const tasks = [
    delay(4),
    delay(6),
    delay(4),
    delay(3),
    delay(5),
    delay(7),
    delay(9),
    delay(10),
    delay(3),
    delay(5)
]
const ct = new ConcurrentTasks(tasks, 2);
ct.run();