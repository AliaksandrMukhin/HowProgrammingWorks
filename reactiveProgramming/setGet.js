class Rectangle {
    constructor(w, l) {
        this.rectangle = { w, l }
        this.calculate();
    }

    calculate() {
        const { w, l } = this.rectangle;
        this.square = w * l;
    };

    set w(value) {
        this.rectangle.w = value;
        this.calculate();
    };

    get w() {
        return this.w;
    }

    set l(value) {
        this.rectangle.l = value;
        this.calculate();
    }

    get l() {
        return this.l;
    }
}

const rect = new Rectangle(1, 2);
console.log('rect', rect);
// rect Rectangle { rectangle: { w: 1, l: 2 }, square: 2 }

rect.l = 10;
console.log('rect :', rect);
// rect: Rectangle { rectangle: { w: 1, l: 10 }, square: 10 }

rect.w = 18;
console.log('rect :', rect);
// rect: Rectangle { rectangle: { w: 18, l: 10 }, square: 180 }
