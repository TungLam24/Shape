class Shape {
    color: string;
    filled: boolean;
    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    getColor(): string {
        return this.color;
    }
    getFill(): boolean {
        return this.filled;
    }
    setColor(color: string) {
        this.color = color;
    }
    setFill(filled: boolean) {
        this.filled = filled;
    }
    toString(): string {
        switch (this.filled) {
            case true:
                return `A shape with color ${this.color} and filled`
                break;
            default:
                return `A shape with color ${this.color} and unfilled`
                break;
        }
    }
}
class CircleShape extends Shape {
    radius: number;
    constructor(color: string, radius: number, filled: boolean) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return (Math.PI * this.radius ** 2)
    }
    getPerimeter(): number {
        return (2 * Math.PI * this.radius)
    }
    toString(): string {
        return `A Rectangle with radius = ${this.radius}, which is a subclass of ${super.toString()}}`
    }
}
class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(color: string, width: number, height: number, filled: boolean) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    getWidth(): number {
        return this.width;
    }
    setWidth(width: number) {
        this.width = width;
    }
    getHeight(): number {
        return this.height;
    }
    setHeight(height: number) {
        this.height = height;
    }
    getArea(): number {
        return (this.width * this.height)
    }
    getPerimeter(): number {
        return (2 * (this.width + this.height))
    }
    toString(): string {
        return `A Rectangle with width = ${this.width}, height = ${this.height}, which is subclass of ${super.toString()}`
    }
}
class Square extends Rectangle {
    constructor(side: number, color: string, filled: boolean) {
        super(color, side, side, filled);
    }
    getSide(): number {
        return this.width;
    }
    setSide(side: number) {
        this.height = side;
        this.width = side;
    }
    toString(): string {
        return `A Square with side = ${this.width}, which is a subclass of ${super.toString()}`
    }
}
let square = new Square(10, "red", true);
console.log(square.getArea())
console.log(square.toString())