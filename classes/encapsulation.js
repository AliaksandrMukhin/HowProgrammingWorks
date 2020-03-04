class Rectangle {
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }
    // area is encapsulated and we
    // don't know implementation
    get area() {
        return this.h * this.w;
    }
}

console.log(new Rectangle(2, 3).area); // 6