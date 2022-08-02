class Cube {
    constructor(length) {
        this.length = length;
    }

    getSideLength() {
        return this.length;
    }

    getSurfaceArea() {
        return (this.length * this.length) * 6;
    }

    getVolume() {
        return Math.pow(this.length, 3);
    }
    getaddNumber(arg1, arg2){
        return arg1 + arg2;
    }
 
}

const add=(a=0,b=0)=>a+b;

module.exports = {
    Cube: Cube,
    add
    }
