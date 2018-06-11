class Car {
    constructor() {
        this.wheels = 10;
        this.type = 'Saffari'
    }
}

class Ford extends Car {
    constructor() {
        super();
        this.windows = 4;
    }
}

const car = new Car();
const ford = new Ford();

console.log(ford.wheels);