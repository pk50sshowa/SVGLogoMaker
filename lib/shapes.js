class Shape {
    constructor(characters, textColor, shapes, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapes = shapes;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    render () {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

module.exports = Shape;