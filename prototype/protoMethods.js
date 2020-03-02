function Actor(name, films = []) {
    this.name = name;
    this.films = films;

}

Actor.prototype.info = function () { console.log(`Actor - ${this.name}, films - ${this.films}`); }

const actor1 = new Actor("Alex", ['film1', 'film2']);
// __proto__: Object { info: , constructor: }

console.dir(actor1);
console.log(actor1.info());
// Actor { name: 'Alex', films: ['film1', 'film2'] }
// Actor - Alex, films - film1, film2