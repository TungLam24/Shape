var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.getFill = function () {
        return this.filled;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.setFill = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        switch (this.filled) {
            case true:
                return "A shape with color ".concat(this.color, " and filled");
                break;
            default:
                return "A shape with color ".concat(this.color, " and unfilled");
                break;
        }
    };
    return Shape;
}());
var CircleShape = /** @class */ (function (_super) {
    __extends(CircleShape, _super);
    function CircleShape(color, radius, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = radius;
        return _this;
    }
    CircleShape.prototype.getRadius = function () {
        return this.radius;
    };
    CircleShape.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    CircleShape.prototype.getArea = function () {
        return (Math.PI * Math.pow(this.radius, 2));
    };
    CircleShape.prototype.getPerimeter = function () {
        return (2 * Math.PI * this.radius);
    };
    CircleShape.prototype.toString = function () {
        return "A Rectangle with radius = ".concat(this.radius, ", which is a subclass of ").concat(_super.prototype.toString.call(this), "}");
    };
    return CircleShape;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.getArea = function () {
        return (this.width * this.height);
    };
    Rectangle.prototype.getPerimeter = function () {
        return (2 * (this.width + this.height));
    };
    Rectangle.prototype.toString = function () {
        return "A Rectangle with width = ".concat(this.width, ", height = ").concat(this.height, ", which is subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color, filled) {
        return _super.call(this, color, side, side, filled) || this;
    }
    Square.prototype.getSide = function () {
        return this.width;
    };
    Square.prototype.setSide = function (side) {
        this.height = side;
        this.width = side;
    };
    Square.prototype.toString = function () {
        return "A Square with side = ".concat(this.width, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Square;
}(Rectangle));
var square = new Square(10, "red", true);
console.log(square.getArea());
console.log(square.toString());
