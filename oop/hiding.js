class Rectangle {
    // h and w are stored in closure
    // and we can't change them directly
    constructor(h, w) {
        this.getArea = () => h * w;
    }

    get area() {
        return this.getArea();
    }
}

console.log(new Rectangle(2, 3).area); // 6